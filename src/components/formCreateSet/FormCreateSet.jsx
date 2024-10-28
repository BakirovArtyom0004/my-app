export function FormCreateSet(){
    return (
        <form>
            <label>
                Название набора
                <input type="text" name="name" />
            </label>
            <label>
                Описание
                <textarea name="description" />
            </label>
            <input type="submit" value="Создать сет" />
        </form>
    )
}