import { useState, useRef, KeyboardEventHandler, FocusEventHandler } from 'react';
import { Form, useSubmit } from '@remix-run/react';
import clsx from 'clsx';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Checkbox } from '~/components/inputs/Checkbox';
import { Input } from '~/components/inputs/Input';
import { IconButton } from '~/components/atoms/IconButton';
import * as styles from './Todo.css';

interface TodoProps {
  id?: string;
  className?: string;
  description?: string;
  completed?: boolean;
}

export function Todo({ id = '', className = '', description = '', completed = false }: TodoProps) {
  const checkboxId = `${id}-checkbox`;
  const inputId = `${id}-input`;
  const [isEditable, setIsEditable] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const submit = useSubmit();

  const onUpdate = () => {
    const formData = new FormData(formRef.current!);
    formData.append('intent', id ? 'update' : 'create');

    submit(formData, {
      method: 'post',
    });
  };

  const onInputDoubleClick = () => {
    if (!isEditable) {
      setIsEditable(true);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  };

  const onInputUpdated = () => {
    setIsEditable(false);
    onUpdate();
  };

  const onInputBlur: FocusEventHandler<HTMLInputElement> = () => {
    onInputUpdated();
  };

  const onInputKeyDown: KeyboardEventHandler<HTMLInputElement> = (evt) => {
    if (evt.key === 'Enter') {
      onInputUpdated();
    }
  };

  return (
    <Form className={clsx(styles.todo, className)} method="post" ref={formRef}>
      <input type="hidden" name="id" value={id} />
      <Checkbox
        aria-label="Toggle Todo"
        className={styles.checkbox}
        defaultSelected={completed}
        id={checkboxId}
        name="completed"
        onChange={onUpdate}
      />
      <Input
        className={styles.label}
        defaultValue={description}
        id={inputId}
        name="description"
        onBlur={onInputBlur}
        onDoubleClick={onInputDoubleClick}
        onKeyDown={onInputKeyDown}
        readOnly={!isEditable}
        ref={inputRef}
      />
      <IconButton
        className={styles.deleteButton}
        icon={faTrashCan}
        label="Delete Todo"
        size="large"
        type="submit"
        name="intent"
        value="delete"
      />
    </Form>
  );
}
