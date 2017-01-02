declare class Promise<T> {
    new (resolve: () => T, reject: () => any): Promise<T>;
    then(onSuccess: (obj: T) => void, onFailure: (obj: any) => void);
    static resolve<Type>(val: Type): Promise<Type>;
    static reject(val: any): Promise<any>;
}