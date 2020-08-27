export async function toggleTodo (user, id) {
    const result = await fetch(`/api/v1/tasks/${user}/${id}`)
    return result
}