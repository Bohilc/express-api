import "reflect-metadata";

interface Constructor<T> {
  new (...args: any[]): T;
}

export const Injectable = (): ClassDecorator => {
  return (target: any) => {};
};

export const Injector = new (class {
  resolve<T>(Target: Constructor<T>, connection: any): T {
    const requiredParams =
      Reflect.getMetadata("design:paramtypes", Target) || [];
    const resolvedParams = requiredParams.map((param: any) =>
      Injector.resolve(param, connection)
    );
    return new Target(...resolvedParams);
  }
})();
