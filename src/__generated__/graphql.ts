/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo?: Maybe<Todo>;
  deleteTodo?: Maybe<Todo>;
  updateTodo?: Maybe<Todo>;
};


export type MutationCreateTodoArgs = {
  data: TodoCreateInput;
};


export type MutationDeleteTodoArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateTodoArgs = {
  data: TodoUpdateInput;
  id: Scalars['String']['input'];
};

/** Field to order the Todos by */
export enum OrderBy {
  CreatedAt = 'createdAt',
  Description = 'description',
  UpdatedAt = 'updatedAt'
}

export type Query = {
  __typename?: 'Query';
  /** Query for all todos */
  allTodos: Array<Todo>;
  /** Query for todos with filters */
  filterTodos: Array<Maybe<Todo>>;
  todoById?: Maybe<Todo>;
};


export type QueryAllTodosArgs = {
  orderBy?: InputMaybe<OrderBy>;
  sort?: InputMaybe<SortOrder>;
};


export type QueryFilterTodosArgs = {
  data?: InputMaybe<TodoFilterInput>;
};


export type QueryTodoByIdArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Direction to sort the Todos */
export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type Todo = {
  __typename?: 'Todo';
  /** Completed status for the Todo */
  completed: Scalars['Boolean']['output'];
  /** DateTime the todo was created */
  createdAt: Scalars['DateTime']['output'];
  /** The Todo description */
  description?: Maybe<Scalars['String']['output']>;
  /** Unique Identifier for the Todo */
  id: Scalars['String']['output'];
  /** DateTime the todo was updated */
  updatedAt: Scalars['DateTime']['output'];
};

export type TodoCreateInput = {
  /** Description for the Todo */
  description: Scalars['String']['input'];
};

export type TodoFilterInput = {
  /** Filter the todos by completed status */
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Created End DateTime to filter the todos by */
  endDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  /** Field to order the todos by */
  orderBy?: InputMaybe<OrderBy>;
  /** Query to filter the todos by */
  query?: InputMaybe<Scalars['String']['input']>;
  /** Direction to order the todos by */
  sort?: InputMaybe<SortOrder>;
  /** Created Start DateTime to filter the todos by */
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TodoOrderByInput = {
  /** Field to order the todos by */
  orderBy?: InputMaybe<OrderBy>;
  /** Direction to order the todos by */
  sort?: InputMaybe<SortOrder>;
};

export type TodoUpdateInput = {
  /** Completed status for the todo */
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Description for the Todo */
  description?: InputMaybe<Scalars['String']['input']>;
};
