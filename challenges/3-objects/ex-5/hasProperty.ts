export function hasProperty<T extends {}>(
    obj: T,
    prop: keyof any
  ): prop is keyof T{
    return prop in obj
  }