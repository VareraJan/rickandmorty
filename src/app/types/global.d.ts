declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames
}

type DeepPartial<T> = T extends object
    ? {
            [P in keyof T]?: DeepPartial<T[P]>;
        }
    : T;

type ReducersMapObject<S = any, A extends Action = Action> = {
    [K in keyof S]: Reducer<S[K], A>
    }