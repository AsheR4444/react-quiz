type ClassesObject = {
    [key: string]: boolean
}

type ClassesType = string | ClassesObject | undefined;

export const smartClass = (...classes: Array<ClassesType>): string => {
    const active: Array<string> = []

    classes.forEach((cl: ClassesType) => {
        if (typeof cl === 'string') {
            active.push(cl)
            return
        }
        if (typeof cl === 'object') {
            Object.keys(cl).forEach((key: string) => cl[key] && active.push(key))
        }
    })

    return active.join(' ')
}
