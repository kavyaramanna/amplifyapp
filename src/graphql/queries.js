/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      employeeId
      employeeName
      designation
      bloodGroup
      contactNumber
      education
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        employeeId
        employeeName
        designation
        bloodGroup
        contactNumber
        education
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
