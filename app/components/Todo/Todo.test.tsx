import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useLoaderData } from '@remix-run/react';
import { json, redirect } from '@remix-run/node';
import { createRemixStub } from '@remix-run/testing';
import { Todo } from './Todo';

describe('components/Todo', () => {
  const action = vi.fn().mockResolvedValue(json({}));
  const loader = vi.fn();

  function MyComponent() {
    const data = useLoaderData() as { id: string; description: string; completed: boolean };

    return <Todo id={data.id} description={data.description} completed={data.completed} />;
  }

  beforeEach(() => {
    action.mockClear();
    loader.mockClear();
  });

  it('should render the todo', async () => {
    loader.mockReturnValue(json({ id: '1', description: 'Test', completed: false }));
    const RemixStub = createRemixStub([
      {
        Component: MyComponent,
        loader,
        path: '/',
        action: async ({ request }) => {
          const formPayload = Object.fromEntries(await request.formData());

          action(formPayload);

          return redirect('/');
        },
      },
    ]);
    render(<RemixStub />);

    await waitFor(() => expect(screen.getByDisplayValue('Test')).toBeInTheDocument());
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('should submit the todo if the completed changes', async () => {
    const user = userEvent.setup();
    loader.mockReturnValue(json({ id: '1', description: 'Test', completed: false }));
    const RemixStub = createRemixStub([
      {
        Component: MyComponent,
        loader,
        path: '/',
        action: async ({ request }) => {
          const formPayload = Object.fromEntries(await request.formData());

          action(formPayload);

          return null;
        },
      },
    ]);
    render(<RemixStub />);

    await waitFor(() => expect(screen.getByRole('checkbox')).not.toBeChecked());

    await user.click(screen.getByRole('checkbox'));

    expect(action).toHaveBeenCalledWith({
      id: '1',
      completed: 'on',
      description: 'Test',
      intent: 'update',
    });
  });

  it('should update the description', async () => {
    const user = userEvent.setup();
    loader.mockReturnValue(json({ id: '1', description: 'Test' }));
    const RemixStub = createRemixStub([
      {
        Component: MyComponent,
        loader,
        path: '/',
        action: async ({ request }) => {
          const formPayload = Object.fromEntries(await request.formData());

          action(formPayload);

          return null;
        },
      },
    ]);
    render(<RemixStub />);

    await waitFor(() => expect(screen.getByRole('checkbox')).not.toBeChecked());

    const textBox = screen.getByDisplayValue('Test');

    await user.dblClick(textBox);
    await user.type(textBox, '{Backspace}{Backspace}{Backspace}{Backspace}Updated{enter}');

    expect(action).toHaveBeenCalledWith({
      id: '1',
      description: 'Updated',
      intent: 'update',
    });
  });

  it('should update the title on blur', async () => {
    const user = userEvent.setup();
    loader.mockReturnValue(json({ id: '1', description: 'Test' }));
    const RemixStub = createRemixStub([
      {
        Component: MyComponent,
        loader,
        path: '/',
        action: async ({ request }) => {
          const formPayload = Object.fromEntries(await request.formData());

          action(formPayload);

          return null;
        },
      },
    ]);
    render(<RemixStub />);

    await waitFor(() => expect(screen.getByRole('checkbox')).not.toBeChecked());

    const textBox = screen.getByDisplayValue('Test');

    await user.dblClick(textBox);
    await user.type(textBox, '{Backspace}{Backspace}{Backspace}{Backspace}Updated');
    await user.tab();

    expect(action).toHaveBeenCalledWith({
      id: '1',
      description: 'Updated',
      intent: 'update',
    });
  });

  it('should call the onDelete prop when the delete button is clicked', async () => {
    const user = userEvent.setup();
    loader.mockReturnValue(json({ id: '1', description: 'Test' }));
    const RemixStub = createRemixStub([
      {
        Component: MyComponent,
        loader,
        path: '/',
        action: async ({ request }) => {
          const formPayload = Object.fromEntries(await request.formData());

          action(formPayload);

          return null;
        },
      },
    ]);
    render(<RemixStub />);

    await waitFor(() => expect(screen.getByRole('checkbox')).not.toBeChecked());

    await user.click(screen.getByRole('button'));

    expect(action).toHaveBeenCalledWith({
      id: '1',
      description: 'Test',
      intent: 'delete',
    });
  });

  it('should render the todo with completed', async () => {
    loader.mockReturnValue(json({ id: '1', description: 'Test', completed: true }));
    const RemixStub = createRemixStub([
      {
        Component: MyComponent,
        loader,
        path: '/',
        action: async ({ request }) => {
          const formPayload = Object.fromEntries(await request.formData());

          action(formPayload);

          return null;
        },
      },
    ]);
    render(<RemixStub />);

    await waitFor(() => expect(screen.getByRole('checkbox')).toBeChecked());
  });
});
