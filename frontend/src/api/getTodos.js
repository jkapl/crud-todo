export async function getTodos (user) {
    const result = await fetch(`api/v1/tasks/${user}/all`)
    return result.json()
}