export async function deleteTodo (user, id) {
    fetch(`/api/v1/tasks/:${user}/:${id}`);
}