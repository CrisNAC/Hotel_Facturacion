
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Huesped
 * 
 */
export type Huesped = $Result.DefaultSelection<Prisma.$HuespedPayload>
/**
 * Model TipoHabitacion
 * 
 */
export type TipoHabitacion = $Result.DefaultSelection<Prisma.$TipoHabitacionPayload>
/**
 * Model Tarifa
 * 
 */
export type Tarifa = $Result.DefaultSelection<Prisma.$TarifaPayload>
/**
 * Model Habitacion
 * 
 */
export type Habitacion = $Result.DefaultSelection<Prisma.$HabitacionPayload>
/**
 * Model Reserva
 * 
 */
export type Reserva = $Result.DefaultSelection<Prisma.$ReservaPayload>
/**
 * Model Ingreso
 * 
 */
export type Ingreso = $Result.DefaultSelection<Prisma.$IngresoPayload>
/**
 * Model HuespedHabitacion
 * 
 */
export type HuespedHabitacion = $Result.DefaultSelection<Prisma.$HuespedHabitacionPayload>
/**
 * Model Cuenta
 * 
 */
export type Cuenta = $Result.DefaultSelection<Prisma.$CuentaPayload>
/**
 * Model Consumo
 * 
 */
export type Consumo = $Result.DefaultSelection<Prisma.$ConsumoPayload>
/**
 * Model Timbrado
 * 
 */
export type Timbrado = $Result.DefaultSelection<Prisma.$TimbradoPayload>
/**
 * Model Factura
 * 
 */
export type Factura = $Result.DefaultSelection<Prisma.$FacturaPayload>
/**
 * Model DetalleFactura
 * 
 */
export type DetalleFactura = $Result.DefaultSelection<Prisma.$DetalleFacturaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DocumentoIdentidad: {
  DNI: 'DNI',
  PASAPORTE: 'PASAPORTE',
  LICENCIA: 'LICENCIA'
};

export type DocumentoIdentidad = (typeof DocumentoIdentidad)[keyof typeof DocumentoIdentidad]


export const Nacionalidad: {
  PARAGUAY: 'PARAGUAY',
  BRASIL: 'BRASIL',
  ARGENTINA: 'ARGENTINA',
  OTRO: 'OTRO'
};

export type Nacionalidad = (typeof Nacionalidad)[keyof typeof Nacionalidad]

}

export type DocumentoIdentidad = $Enums.DocumentoIdentidad

export const DocumentoIdentidad: typeof $Enums.DocumentoIdentidad

export type Nacionalidad = $Enums.Nacionalidad

export const Nacionalidad: typeof $Enums.Nacionalidad

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.huesped`: Exposes CRUD operations for the **Huesped** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Huespeds
    * const huespeds = await prisma.huesped.findMany()
    * ```
    */
  get huesped(): Prisma.HuespedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoHabitacion`: Exposes CRUD operations for the **TipoHabitacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoHabitacions
    * const tipoHabitacions = await prisma.tipoHabitacion.findMany()
    * ```
    */
  get tipoHabitacion(): Prisma.TipoHabitacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tarifa`: Exposes CRUD operations for the **Tarifa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tarifas
    * const tarifas = await prisma.tarifa.findMany()
    * ```
    */
  get tarifa(): Prisma.TarifaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.habitacion`: Exposes CRUD operations for the **Habitacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habitacions
    * const habitacions = await prisma.habitacion.findMany()
    * ```
    */
  get habitacion(): Prisma.HabitacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reserva`: Exposes CRUD operations for the **Reserva** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservas
    * const reservas = await prisma.reserva.findMany()
    * ```
    */
  get reserva(): Prisma.ReservaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingreso`: Exposes CRUD operations for the **Ingreso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingresos
    * const ingresos = await prisma.ingreso.findMany()
    * ```
    */
  get ingreso(): Prisma.IngresoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.huespedHabitacion`: Exposes CRUD operations for the **HuespedHabitacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HuespedHabitacions
    * const huespedHabitacions = await prisma.huespedHabitacion.findMany()
    * ```
    */
  get huespedHabitacion(): Prisma.HuespedHabitacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cuenta`: Exposes CRUD operations for the **Cuenta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cuentas
    * const cuentas = await prisma.cuenta.findMany()
    * ```
    */
  get cuenta(): Prisma.CuentaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consumo`: Exposes CRUD operations for the **Consumo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consumos
    * const consumos = await prisma.consumo.findMany()
    * ```
    */
  get consumo(): Prisma.ConsumoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timbrado`: Exposes CRUD operations for the **Timbrado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Timbrados
    * const timbrados = await prisma.timbrado.findMany()
    * ```
    */
  get timbrado(): Prisma.TimbradoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.factura`: Exposes CRUD operations for the **Factura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facturas
    * const facturas = await prisma.factura.findMany()
    * ```
    */
  get factura(): Prisma.FacturaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalleFactura`: Exposes CRUD operations for the **DetalleFactura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetalleFacturas
    * const detalleFacturas = await prisma.detalleFactura.findMany()
    * ```
    */
  get detalleFactura(): Prisma.DetalleFacturaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Huesped: 'Huesped',
    TipoHabitacion: 'TipoHabitacion',
    Tarifa: 'Tarifa',
    Habitacion: 'Habitacion',
    Reserva: 'Reserva',
    Ingreso: 'Ingreso',
    HuespedHabitacion: 'HuespedHabitacion',
    Cuenta: 'Cuenta',
    Consumo: 'Consumo',
    Timbrado: 'Timbrado',
    Factura: 'Factura',
    DetalleFactura: 'DetalleFactura'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "huesped" | "tipoHabitacion" | "tarifa" | "habitacion" | "reserva" | "ingreso" | "huespedHabitacion" | "cuenta" | "consumo" | "timbrado" | "factura" | "detalleFactura"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Huesped: {
        payload: Prisma.$HuespedPayload<ExtArgs>
        fields: Prisma.HuespedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HuespedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuespedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HuespedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuespedPayload>
          }
          findFirst: {
            args: Prisma.HuespedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuespedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HuespedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuespedPayload>
          }
          findMany: {
            args: Prisma.HuespedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuespedPayload>[]
          }
          create: {
            args: Prisma.HuespedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuespedPayload>
          }
          createMany: {
            args: Prisma.HuespedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HuespedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuespedPayload>[]
          }
          delete: {
            args: Prisma.HuespedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuespedPayload>
          }
          update: {
            args: Prisma.HuespedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuespedPayload>
          }
          deleteMany: {
            args: Prisma.HuespedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HuespedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HuespedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuespedPayload>[]
          }
          upsert: {
            args: Prisma.HuespedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuespedPayload>
          }
          aggregate: {
            args: Prisma.HuespedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHuesped>
          }
          groupBy: {
            args: Prisma.HuespedGroupByArgs<ExtArgs>
            result: $Utils.Optional<HuespedGroupByOutputType>[]
          }
          count: {
            args: Prisma.HuespedCountArgs<ExtArgs>
            result: $Utils.Optional<HuespedCountAggregateOutputType> | number
          }
        }
      }
      TipoHabitacion: {
        payload: Prisma.$TipoHabitacionPayload<ExtArgs>
        fields: Prisma.TipoHabitacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoHabitacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoHabitacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoHabitacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoHabitacionPayload>
          }
          findFirst: {
            args: Prisma.TipoHabitacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoHabitacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoHabitacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoHabitacionPayload>
          }
          findMany: {
            args: Prisma.TipoHabitacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoHabitacionPayload>[]
          }
          create: {
            args: Prisma.TipoHabitacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoHabitacionPayload>
          }
          createMany: {
            args: Prisma.TipoHabitacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoHabitacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoHabitacionPayload>[]
          }
          delete: {
            args: Prisma.TipoHabitacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoHabitacionPayload>
          }
          update: {
            args: Prisma.TipoHabitacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoHabitacionPayload>
          }
          deleteMany: {
            args: Prisma.TipoHabitacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoHabitacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoHabitacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoHabitacionPayload>[]
          }
          upsert: {
            args: Prisma.TipoHabitacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoHabitacionPayload>
          }
          aggregate: {
            args: Prisma.TipoHabitacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoHabitacion>
          }
          groupBy: {
            args: Prisma.TipoHabitacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoHabitacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoHabitacionCountArgs<ExtArgs>
            result: $Utils.Optional<TipoHabitacionCountAggregateOutputType> | number
          }
        }
      }
      Tarifa: {
        payload: Prisma.$TarifaPayload<ExtArgs>
        fields: Prisma.TarifaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TarifaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarifaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TarifaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarifaPayload>
          }
          findFirst: {
            args: Prisma.TarifaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarifaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TarifaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarifaPayload>
          }
          findMany: {
            args: Prisma.TarifaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarifaPayload>[]
          }
          create: {
            args: Prisma.TarifaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarifaPayload>
          }
          createMany: {
            args: Prisma.TarifaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TarifaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarifaPayload>[]
          }
          delete: {
            args: Prisma.TarifaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarifaPayload>
          }
          update: {
            args: Prisma.TarifaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarifaPayload>
          }
          deleteMany: {
            args: Prisma.TarifaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TarifaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TarifaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarifaPayload>[]
          }
          upsert: {
            args: Prisma.TarifaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarifaPayload>
          }
          aggregate: {
            args: Prisma.TarifaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTarifa>
          }
          groupBy: {
            args: Prisma.TarifaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TarifaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TarifaCountArgs<ExtArgs>
            result: $Utils.Optional<TarifaCountAggregateOutputType> | number
          }
        }
      }
      Habitacion: {
        payload: Prisma.$HabitacionPayload<ExtArgs>
        fields: Prisma.HabitacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload>
          }
          findFirst: {
            args: Prisma.HabitacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload>
          }
          findMany: {
            args: Prisma.HabitacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload>[]
          }
          create: {
            args: Prisma.HabitacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload>
          }
          createMany: {
            args: Prisma.HabitacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HabitacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload>[]
          }
          delete: {
            args: Prisma.HabitacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload>
          }
          update: {
            args: Prisma.HabitacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload>
          }
          deleteMany: {
            args: Prisma.HabitacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HabitacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload>[]
          }
          upsert: {
            args: Prisma.HabitacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload>
          }
          aggregate: {
            args: Prisma.HabitacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabitacion>
          }
          groupBy: {
            args: Prisma.HabitacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitacionCountArgs<ExtArgs>
            result: $Utils.Optional<HabitacionCountAggregateOutputType> | number
          }
        }
      }
      Reserva: {
        payload: Prisma.$ReservaPayload<ExtArgs>
        fields: Prisma.ReservaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          findFirst: {
            args: Prisma.ReservaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          findMany: {
            args: Prisma.ReservaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          create: {
            args: Prisma.ReservaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          createMany: {
            args: Prisma.ReservaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          delete: {
            args: Prisma.ReservaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          update: {
            args: Prisma.ReservaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          deleteMany: {
            args: Prisma.ReservaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          upsert: {
            args: Prisma.ReservaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          aggregate: {
            args: Prisma.ReservaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReserva>
          }
          groupBy: {
            args: Prisma.ReservaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservaCountArgs<ExtArgs>
            result: $Utils.Optional<ReservaCountAggregateOutputType> | number
          }
        }
      }
      Ingreso: {
        payload: Prisma.$IngresoPayload<ExtArgs>
        fields: Prisma.IngresoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngresoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngresoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngresoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngresoPayload>
          }
          findFirst: {
            args: Prisma.IngresoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngresoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngresoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngresoPayload>
          }
          findMany: {
            args: Prisma.IngresoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngresoPayload>[]
          }
          create: {
            args: Prisma.IngresoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngresoPayload>
          }
          createMany: {
            args: Prisma.IngresoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngresoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngresoPayload>[]
          }
          delete: {
            args: Prisma.IngresoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngresoPayload>
          }
          update: {
            args: Prisma.IngresoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngresoPayload>
          }
          deleteMany: {
            args: Prisma.IngresoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngresoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngresoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngresoPayload>[]
          }
          upsert: {
            args: Prisma.IngresoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngresoPayload>
          }
          aggregate: {
            args: Prisma.IngresoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngreso>
          }
          groupBy: {
            args: Prisma.IngresoGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngresoGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngresoCountArgs<ExtArgs>
            result: $Utils.Optional<IngresoCountAggregateOutputType> | number
          }
        }
      }
      HuespedHabitacion: {
        payload: Prisma.$HuespedHabitacionPayload<ExtArgs>
        fields: Prisma.HuespedHabitacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HuespedHabitacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuespedHabitacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HuespedHabitacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuespedHabitacionPayload>
          }
          findFirst: {
            args: Prisma.HuespedHabitacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuespedHabitacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HuespedHabitacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuespedHabitacionPayload>
          }
          findMany: {
            args: Prisma.HuespedHabitacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuespedHabitacionPayload>[]
          }
          create: {
            args: Prisma.HuespedHabitacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuespedHabitacionPayload>
          }
          createMany: {
            args: Prisma.HuespedHabitacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HuespedHabitacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuespedHabitacionPayload>[]
          }
          delete: {
            args: Prisma.HuespedHabitacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuespedHabitacionPayload>
          }
          update: {
            args: Prisma.HuespedHabitacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuespedHabitacionPayload>
          }
          deleteMany: {
            args: Prisma.HuespedHabitacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HuespedHabitacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HuespedHabitacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuespedHabitacionPayload>[]
          }
          upsert: {
            args: Prisma.HuespedHabitacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HuespedHabitacionPayload>
          }
          aggregate: {
            args: Prisma.HuespedHabitacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHuespedHabitacion>
          }
          groupBy: {
            args: Prisma.HuespedHabitacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<HuespedHabitacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.HuespedHabitacionCountArgs<ExtArgs>
            result: $Utils.Optional<HuespedHabitacionCountAggregateOutputType> | number
          }
        }
      }
      Cuenta: {
        payload: Prisma.$CuentaPayload<ExtArgs>
        fields: Prisma.CuentaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CuentaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CuentaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload>
          }
          findFirst: {
            args: Prisma.CuentaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CuentaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload>
          }
          findMany: {
            args: Prisma.CuentaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload>[]
          }
          create: {
            args: Prisma.CuentaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload>
          }
          createMany: {
            args: Prisma.CuentaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CuentaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload>[]
          }
          delete: {
            args: Prisma.CuentaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload>
          }
          update: {
            args: Prisma.CuentaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload>
          }
          deleteMany: {
            args: Prisma.CuentaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CuentaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CuentaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload>[]
          }
          upsert: {
            args: Prisma.CuentaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuentaPayload>
          }
          aggregate: {
            args: Prisma.CuentaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCuenta>
          }
          groupBy: {
            args: Prisma.CuentaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CuentaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CuentaCountArgs<ExtArgs>
            result: $Utils.Optional<CuentaCountAggregateOutputType> | number
          }
        }
      }
      Consumo: {
        payload: Prisma.$ConsumoPayload<ExtArgs>
        fields: Prisma.ConsumoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsumoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsumoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumoPayload>
          }
          findFirst: {
            args: Prisma.ConsumoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsumoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumoPayload>
          }
          findMany: {
            args: Prisma.ConsumoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumoPayload>[]
          }
          create: {
            args: Prisma.ConsumoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumoPayload>
          }
          createMany: {
            args: Prisma.ConsumoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsumoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumoPayload>[]
          }
          delete: {
            args: Prisma.ConsumoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumoPayload>
          }
          update: {
            args: Prisma.ConsumoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumoPayload>
          }
          deleteMany: {
            args: Prisma.ConsumoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsumoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsumoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumoPayload>[]
          }
          upsert: {
            args: Prisma.ConsumoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumoPayload>
          }
          aggregate: {
            args: Prisma.ConsumoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsumo>
          }
          groupBy: {
            args: Prisma.ConsumoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsumoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsumoCountArgs<ExtArgs>
            result: $Utils.Optional<ConsumoCountAggregateOutputType> | number
          }
        }
      }
      Timbrado: {
        payload: Prisma.$TimbradoPayload<ExtArgs>
        fields: Prisma.TimbradoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimbradoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimbradoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimbradoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimbradoPayload>
          }
          findFirst: {
            args: Prisma.TimbradoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimbradoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimbradoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimbradoPayload>
          }
          findMany: {
            args: Prisma.TimbradoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimbradoPayload>[]
          }
          create: {
            args: Prisma.TimbradoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimbradoPayload>
          }
          createMany: {
            args: Prisma.TimbradoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimbradoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimbradoPayload>[]
          }
          delete: {
            args: Prisma.TimbradoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimbradoPayload>
          }
          update: {
            args: Prisma.TimbradoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimbradoPayload>
          }
          deleteMany: {
            args: Prisma.TimbradoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimbradoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimbradoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimbradoPayload>[]
          }
          upsert: {
            args: Prisma.TimbradoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimbradoPayload>
          }
          aggregate: {
            args: Prisma.TimbradoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimbrado>
          }
          groupBy: {
            args: Prisma.TimbradoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimbradoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimbradoCountArgs<ExtArgs>
            result: $Utils.Optional<TimbradoCountAggregateOutputType> | number
          }
        }
      }
      Factura: {
        payload: Prisma.$FacturaPayload<ExtArgs>
        fields: Prisma.FacturaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacturaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacturaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          findFirst: {
            args: Prisma.FacturaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacturaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          findMany: {
            args: Prisma.FacturaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>[]
          }
          create: {
            args: Prisma.FacturaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          createMany: {
            args: Prisma.FacturaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacturaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>[]
          }
          delete: {
            args: Prisma.FacturaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          update: {
            args: Prisma.FacturaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          deleteMany: {
            args: Prisma.FacturaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacturaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacturaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>[]
          }
          upsert: {
            args: Prisma.FacturaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          aggregate: {
            args: Prisma.FacturaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFactura>
          }
          groupBy: {
            args: Prisma.FacturaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacturaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacturaCountArgs<ExtArgs>
            result: $Utils.Optional<FacturaCountAggregateOutputType> | number
          }
        }
      }
      DetalleFactura: {
        payload: Prisma.$DetalleFacturaPayload<ExtArgs>
        fields: Prisma.DetalleFacturaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetalleFacturaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetalleFacturaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload>
          }
          findFirst: {
            args: Prisma.DetalleFacturaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetalleFacturaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload>
          }
          findMany: {
            args: Prisma.DetalleFacturaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload>[]
          }
          create: {
            args: Prisma.DetalleFacturaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload>
          }
          createMany: {
            args: Prisma.DetalleFacturaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DetalleFacturaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload>[]
          }
          delete: {
            args: Prisma.DetalleFacturaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload>
          }
          update: {
            args: Prisma.DetalleFacturaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload>
          }
          deleteMany: {
            args: Prisma.DetalleFacturaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetalleFacturaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DetalleFacturaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload>[]
          }
          upsert: {
            args: Prisma.DetalleFacturaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload>
          }
          aggregate: {
            args: Prisma.DetalleFacturaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalleFactura>
          }
          groupBy: {
            args: Prisma.DetalleFacturaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetalleFacturaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetalleFacturaCountArgs<ExtArgs>
            result: $Utils.Optional<DetalleFacturaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    huesped?: HuespedOmit
    tipoHabitacion?: TipoHabitacionOmit
    tarifa?: TarifaOmit
    habitacion?: HabitacionOmit
    reserva?: ReservaOmit
    ingreso?: IngresoOmit
    huespedHabitacion?: HuespedHabitacionOmit
    cuenta?: CuentaOmit
    consumo?: ConsumoOmit
    timbrado?: TimbradoOmit
    factura?: FacturaOmit
    detalleFactura?: DetalleFacturaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    reservas: number
    ingresos: number
    consumos: number
    facturas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | UsuarioCountOutputTypeCountReservasArgs
    ingresos?: boolean | UsuarioCountOutputTypeCountIngresosArgs
    consumos?: boolean | UsuarioCountOutputTypeCountConsumosArgs
    facturas?: boolean | UsuarioCountOutputTypeCountFacturasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountIngresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngresoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountConsumosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsumoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountFacturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacturaWhereInput
  }


  /**
   * Count Type HuespedCountOutputType
   */

  export type HuespedCountOutputType = {
    reservas: number
    ingresos: number
    huespedesHabitaciones: number
  }

  export type HuespedCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | HuespedCountOutputTypeCountReservasArgs
    ingresos?: boolean | HuespedCountOutputTypeCountIngresosArgs
    huespedesHabitaciones?: boolean | HuespedCountOutputTypeCountHuespedesHabitacionesArgs
  }

  // Custom InputTypes
  /**
   * HuespedCountOutputType without action
   */
  export type HuespedCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuespedCountOutputType
     */
    select?: HuespedCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HuespedCountOutputType without action
   */
  export type HuespedCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }

  /**
   * HuespedCountOutputType without action
   */
  export type HuespedCountOutputTypeCountIngresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngresoWhereInput
  }

  /**
   * HuespedCountOutputType without action
   */
  export type HuespedCountOutputTypeCountHuespedesHabitacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HuespedHabitacionWhereInput
  }


  /**
   * Count Type TipoHabitacionCountOutputType
   */

  export type TipoHabitacionCountOutputType = {
    tarifas: number
    habitaciones: number
    reservas: number
  }

  export type TipoHabitacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tarifas?: boolean | TipoHabitacionCountOutputTypeCountTarifasArgs
    habitaciones?: boolean | TipoHabitacionCountOutputTypeCountHabitacionesArgs
    reservas?: boolean | TipoHabitacionCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * TipoHabitacionCountOutputType without action
   */
  export type TipoHabitacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoHabitacionCountOutputType
     */
    select?: TipoHabitacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoHabitacionCountOutputType without action
   */
  export type TipoHabitacionCountOutputTypeCountTarifasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TarifaWhereInput
  }

  /**
   * TipoHabitacionCountOutputType without action
   */
  export type TipoHabitacionCountOutputTypeCountHabitacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitacionWhereInput
  }

  /**
   * TipoHabitacionCountOutputType without action
   */
  export type TipoHabitacionCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }


  /**
   * Count Type TarifaCountOutputType
   */

  export type TarifaCountOutputType = {
    ingresos: number
  }

  export type TarifaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingresos?: boolean | TarifaCountOutputTypeCountIngresosArgs
  }

  // Custom InputTypes
  /**
   * TarifaCountOutputType without action
   */
  export type TarifaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarifaCountOutputType
     */
    select?: TarifaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TarifaCountOutputType without action
   */
  export type TarifaCountOutputTypeCountIngresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngresoWhereInput
  }


  /**
   * Count Type HabitacionCountOutputType
   */

  export type HabitacionCountOutputType = {
    ingresos: number
  }

  export type HabitacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingresos?: boolean | HabitacionCountOutputTypeCountIngresosArgs
  }

  // Custom InputTypes
  /**
   * HabitacionCountOutputType without action
   */
  export type HabitacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitacionCountOutputType
     */
    select?: HabitacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HabitacionCountOutputType without action
   */
  export type HabitacionCountOutputTypeCountIngresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngresoWhereInput
  }


  /**
   * Count Type ReservaCountOutputType
   */

  export type ReservaCountOutputType = {
    ingreso: number
  }

  export type ReservaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingreso?: boolean | ReservaCountOutputTypeCountIngresoArgs
  }

  // Custom InputTypes
  /**
   * ReservaCountOutputType without action
   */
  export type ReservaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaCountOutputType
     */
    select?: ReservaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReservaCountOutputType without action
   */
  export type ReservaCountOutputTypeCountIngresoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngresoWhereInput
  }


  /**
   * Count Type IngresoCountOutputType
   */

  export type IngresoCountOutputType = {
    huespedesHabitaciones: number
    cuenta: number
  }

  export type IngresoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    huespedesHabitaciones?: boolean | IngresoCountOutputTypeCountHuespedesHabitacionesArgs
    cuenta?: boolean | IngresoCountOutputTypeCountCuentaArgs
  }

  // Custom InputTypes
  /**
   * IngresoCountOutputType without action
   */
  export type IngresoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngresoCountOutputType
     */
    select?: IngresoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngresoCountOutputType without action
   */
  export type IngresoCountOutputTypeCountHuespedesHabitacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HuespedHabitacionWhereInput
  }

  /**
   * IngresoCountOutputType without action
   */
  export type IngresoCountOutputTypeCountCuentaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CuentaWhereInput
  }


  /**
   * Count Type CuentaCountOutputType
   */

  export type CuentaCountOutputType = {
    consumos: number
    factura: number
  }

  export type CuentaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consumos?: boolean | CuentaCountOutputTypeCountConsumosArgs
    factura?: boolean | CuentaCountOutputTypeCountFacturaArgs
  }

  // Custom InputTypes
  /**
   * CuentaCountOutputType without action
   */
  export type CuentaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuentaCountOutputType
     */
    select?: CuentaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CuentaCountOutputType without action
   */
  export type CuentaCountOutputTypeCountConsumosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsumoWhereInput
  }

  /**
   * CuentaCountOutputType without action
   */
  export type CuentaCountOutputTypeCountFacturaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacturaWhereInput
  }


  /**
   * Count Type TimbradoCountOutputType
   */

  export type TimbradoCountOutputType = {
    facturas: number
  }

  export type TimbradoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facturas?: boolean | TimbradoCountOutputTypeCountFacturasArgs
  }

  // Custom InputTypes
  /**
   * TimbradoCountOutputType without action
   */
  export type TimbradoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimbradoCountOutputType
     */
    select?: TimbradoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TimbradoCountOutputType without action
   */
  export type TimbradoCountOutputTypeCountFacturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacturaWhereInput
  }


  /**
   * Count Type FacturaCountOutputType
   */

  export type FacturaCountOutputType = {
    detalles: number
  }

  export type FacturaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | FacturaCountOutputTypeCountDetallesArgs
  }

  // Custom InputTypes
  /**
   * FacturaCountOutputType without action
   */
  export type FacturaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCountOutputType
     */
    select?: FacturaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FacturaCountOutputType without action
   */
  export type FacturaCountOutputTypeCountDetallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleFacturaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: number | null
    nombre: string | null
    apellido: string | null
    nombre_usuario: string | null
    contrasena_hash: string | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: number | null
    nombre: string | null
    apellido: string | null
    nombre_usuario: string | null
    contrasena_hash: string | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    nombre: number
    apellido: number
    nombre_usuario: number
    contrasena_hash: number
    activo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    nombre?: true
    apellido?: true
    nombre_usuario?: true
    contrasena_hash?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    nombre?: true
    apellido?: true
    nombre_usuario?: true
    contrasena_hash?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    nombre?: true
    apellido?: true
    nombre_usuario?: true
    contrasena_hash?: true
    activo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: number
    nombre: string
    apellido: string
    nombre_usuario: string
    contrasena_hash: string
    activo: boolean
    created_at: Date
    updated_at: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    apellido?: boolean
    nombre_usuario?: boolean
    contrasena_hash?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    reservas?: boolean | Usuario$reservasArgs<ExtArgs>
    ingresos?: boolean | Usuario$ingresosArgs<ExtArgs>
    consumos?: boolean | Usuario$consumosArgs<ExtArgs>
    facturas?: boolean | Usuario$facturasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    apellido?: boolean
    nombre_usuario?: boolean
    contrasena_hash?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    apellido?: boolean
    nombre_usuario?: boolean
    contrasena_hash?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id_usuario?: boolean
    nombre?: boolean
    apellido?: boolean
    nombre_usuario?: boolean
    contrasena_hash?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nombre" | "apellido" | "nombre_usuario" | "contrasena_hash" | "activo" | "created_at" | "updated_at", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | Usuario$reservasArgs<ExtArgs>
    ingresos?: boolean | Usuario$ingresosArgs<ExtArgs>
    consumos?: boolean | Usuario$consumosArgs<ExtArgs>
    facturas?: boolean | Usuario$facturasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
      ingresos: Prisma.$IngresoPayload<ExtArgs>[]
      consumos: Prisma.$ConsumoPayload<ExtArgs>[]
      facturas: Prisma.$FacturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nombre: string
      apellido: string
      nombre_usuario: string
      contrasena_hash: string
      activo: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id_usuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservas<T extends Usuario$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ingresos<T extends Usuario$ingresosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$ingresosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    consumos<T extends Usuario$consumosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$consumosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsumoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    facturas<T extends Usuario$facturasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$facturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id_usuario: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly apellido: FieldRef<"Usuario", 'String'>
    readonly nombre_usuario: FieldRef<"Usuario", 'String'>
    readonly contrasena_hash: FieldRef<"Usuario", 'String'>
    readonly activo: FieldRef<"Usuario", 'Boolean'>
    readonly created_at: FieldRef<"Usuario", 'DateTime'>
    readonly updated_at: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.reservas
   */
  export type Usuario$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Usuario.ingresos
   */
  export type Usuario$ingresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingreso
     */
    select?: IngresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingreso
     */
    omit?: IngresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngresoInclude<ExtArgs> | null
    where?: IngresoWhereInput
    orderBy?: IngresoOrderByWithRelationInput | IngresoOrderByWithRelationInput[]
    cursor?: IngresoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngresoScalarFieldEnum | IngresoScalarFieldEnum[]
  }

  /**
   * Usuario.consumos
   */
  export type Usuario$consumosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumo
     */
    select?: ConsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumo
     */
    omit?: ConsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumoInclude<ExtArgs> | null
    where?: ConsumoWhereInput
    orderBy?: ConsumoOrderByWithRelationInput | ConsumoOrderByWithRelationInput[]
    cursor?: ConsumoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsumoScalarFieldEnum | ConsumoScalarFieldEnum[]
  }

  /**
   * Usuario.facturas
   */
  export type Usuario$facturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    where?: FacturaWhereInput
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    cursor?: FacturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Huesped
   */

  export type AggregateHuesped = {
    _count: HuespedCountAggregateOutputType | null
    _avg: HuespedAvgAggregateOutputType | null
    _sum: HuespedSumAggregateOutputType | null
    _min: HuespedMinAggregateOutputType | null
    _max: HuespedMaxAggregateOutputType | null
  }

  export type HuespedAvgAggregateOutputType = {
    id_huesped: number | null
  }

  export type HuespedSumAggregateOutputType = {
    id_huesped: number | null
  }

  export type HuespedMinAggregateOutputType = {
    id_huesped: number | null
    nombre: string | null
    apellido: string | null
    documento_identidad: $Enums.DocumentoIdentidad | null
    numero_documento: string | null
    ruc: string | null
    nacionalidad: $Enums.Nacionalidad | null
    telefono: string | null
    email: string | null
    fecha_nacimiento: Date | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HuespedMaxAggregateOutputType = {
    id_huesped: number | null
    nombre: string | null
    apellido: string | null
    documento_identidad: $Enums.DocumentoIdentidad | null
    numero_documento: string | null
    ruc: string | null
    nacionalidad: $Enums.Nacionalidad | null
    telefono: string | null
    email: string | null
    fecha_nacimiento: Date | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HuespedCountAggregateOutputType = {
    id_huesped: number
    nombre: number
    apellido: number
    documento_identidad: number
    numero_documento: number
    ruc: number
    nacionalidad: number
    telefono: number
    email: number
    fecha_nacimiento: number
    activo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type HuespedAvgAggregateInputType = {
    id_huesped?: true
  }

  export type HuespedSumAggregateInputType = {
    id_huesped?: true
  }

  export type HuespedMinAggregateInputType = {
    id_huesped?: true
    nombre?: true
    apellido?: true
    documento_identidad?: true
    numero_documento?: true
    ruc?: true
    nacionalidad?: true
    telefono?: true
    email?: true
    fecha_nacimiento?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type HuespedMaxAggregateInputType = {
    id_huesped?: true
    nombre?: true
    apellido?: true
    documento_identidad?: true
    numero_documento?: true
    ruc?: true
    nacionalidad?: true
    telefono?: true
    email?: true
    fecha_nacimiento?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type HuespedCountAggregateInputType = {
    id_huesped?: true
    nombre?: true
    apellido?: true
    documento_identidad?: true
    numero_documento?: true
    ruc?: true
    nacionalidad?: true
    telefono?: true
    email?: true
    fecha_nacimiento?: true
    activo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type HuespedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Huesped to aggregate.
     */
    where?: HuespedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Huespeds to fetch.
     */
    orderBy?: HuespedOrderByWithRelationInput | HuespedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HuespedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Huespeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Huespeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Huespeds
    **/
    _count?: true | HuespedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HuespedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HuespedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HuespedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HuespedMaxAggregateInputType
  }

  export type GetHuespedAggregateType<T extends HuespedAggregateArgs> = {
        [P in keyof T & keyof AggregateHuesped]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHuesped[P]>
      : GetScalarType<T[P], AggregateHuesped[P]>
  }




  export type HuespedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HuespedWhereInput
    orderBy?: HuespedOrderByWithAggregationInput | HuespedOrderByWithAggregationInput[]
    by: HuespedScalarFieldEnum[] | HuespedScalarFieldEnum
    having?: HuespedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HuespedCountAggregateInputType | true
    _avg?: HuespedAvgAggregateInputType
    _sum?: HuespedSumAggregateInputType
    _min?: HuespedMinAggregateInputType
    _max?: HuespedMaxAggregateInputType
  }

  export type HuespedGroupByOutputType = {
    id_huesped: number
    nombre: string
    apellido: string
    documento_identidad: $Enums.DocumentoIdentidad
    numero_documento: string
    ruc: string | null
    nacionalidad: $Enums.Nacionalidad
    telefono: string | null
    email: string | null
    fecha_nacimiento: Date
    activo: boolean
    created_at: Date
    updated_at: Date
    _count: HuespedCountAggregateOutputType | null
    _avg: HuespedAvgAggregateOutputType | null
    _sum: HuespedSumAggregateOutputType | null
    _min: HuespedMinAggregateOutputType | null
    _max: HuespedMaxAggregateOutputType | null
  }

  type GetHuespedGroupByPayload<T extends HuespedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HuespedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HuespedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HuespedGroupByOutputType[P]>
            : GetScalarType<T[P], HuespedGroupByOutputType[P]>
        }
      >
    >


  export type HuespedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_huesped?: boolean
    nombre?: boolean
    apellido?: boolean
    documento_identidad?: boolean
    numero_documento?: boolean
    ruc?: boolean
    nacionalidad?: boolean
    telefono?: boolean
    email?: boolean
    fecha_nacimiento?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    reservas?: boolean | Huesped$reservasArgs<ExtArgs>
    ingresos?: boolean | Huesped$ingresosArgs<ExtArgs>
    huespedesHabitaciones?: boolean | Huesped$huespedesHabitacionesArgs<ExtArgs>
    _count?: boolean | HuespedCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["huesped"]>

  export type HuespedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_huesped?: boolean
    nombre?: boolean
    apellido?: boolean
    documento_identidad?: boolean
    numero_documento?: boolean
    ruc?: boolean
    nacionalidad?: boolean
    telefono?: boolean
    email?: boolean
    fecha_nacimiento?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["huesped"]>

  export type HuespedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_huesped?: boolean
    nombre?: boolean
    apellido?: boolean
    documento_identidad?: boolean
    numero_documento?: boolean
    ruc?: boolean
    nacionalidad?: boolean
    telefono?: boolean
    email?: boolean
    fecha_nacimiento?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["huesped"]>

  export type HuespedSelectScalar = {
    id_huesped?: boolean
    nombre?: boolean
    apellido?: boolean
    documento_identidad?: boolean
    numero_documento?: boolean
    ruc?: boolean
    nacionalidad?: boolean
    telefono?: boolean
    email?: boolean
    fecha_nacimiento?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type HuespedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_huesped" | "nombre" | "apellido" | "documento_identidad" | "numero_documento" | "ruc" | "nacionalidad" | "telefono" | "email" | "fecha_nacimiento" | "activo" | "created_at" | "updated_at", ExtArgs["result"]["huesped"]>
  export type HuespedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | Huesped$reservasArgs<ExtArgs>
    ingresos?: boolean | Huesped$ingresosArgs<ExtArgs>
    huespedesHabitaciones?: boolean | Huesped$huespedesHabitacionesArgs<ExtArgs>
    _count?: boolean | HuespedCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HuespedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HuespedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HuespedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Huesped"
    objects: {
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
      ingresos: Prisma.$IngresoPayload<ExtArgs>[]
      huespedesHabitaciones: Prisma.$HuespedHabitacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_huesped: number
      nombre: string
      apellido: string
      documento_identidad: $Enums.DocumentoIdentidad
      numero_documento: string
      ruc: string | null
      nacionalidad: $Enums.Nacionalidad
      telefono: string | null
      email: string | null
      fecha_nacimiento: Date
      activo: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["huesped"]>
    composites: {}
  }

  type HuespedGetPayload<S extends boolean | null | undefined | HuespedDefaultArgs> = $Result.GetResult<Prisma.$HuespedPayload, S>

  type HuespedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HuespedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HuespedCountAggregateInputType | true
    }

  export interface HuespedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Huesped'], meta: { name: 'Huesped' } }
    /**
     * Find zero or one Huesped that matches the filter.
     * @param {HuespedFindUniqueArgs} args - Arguments to find a Huesped
     * @example
     * // Get one Huesped
     * const huesped = await prisma.huesped.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HuespedFindUniqueArgs>(args: SelectSubset<T, HuespedFindUniqueArgs<ExtArgs>>): Prisma__HuespedClient<$Result.GetResult<Prisma.$HuespedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Huesped that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HuespedFindUniqueOrThrowArgs} args - Arguments to find a Huesped
     * @example
     * // Get one Huesped
     * const huesped = await prisma.huesped.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HuespedFindUniqueOrThrowArgs>(args: SelectSubset<T, HuespedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HuespedClient<$Result.GetResult<Prisma.$HuespedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Huesped that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuespedFindFirstArgs} args - Arguments to find a Huesped
     * @example
     * // Get one Huesped
     * const huesped = await prisma.huesped.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HuespedFindFirstArgs>(args?: SelectSubset<T, HuespedFindFirstArgs<ExtArgs>>): Prisma__HuespedClient<$Result.GetResult<Prisma.$HuespedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Huesped that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuespedFindFirstOrThrowArgs} args - Arguments to find a Huesped
     * @example
     * // Get one Huesped
     * const huesped = await prisma.huesped.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HuespedFindFirstOrThrowArgs>(args?: SelectSubset<T, HuespedFindFirstOrThrowArgs<ExtArgs>>): Prisma__HuespedClient<$Result.GetResult<Prisma.$HuespedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Huespeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuespedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Huespeds
     * const huespeds = await prisma.huesped.findMany()
     * 
     * // Get first 10 Huespeds
     * const huespeds = await prisma.huesped.findMany({ take: 10 })
     * 
     * // Only select the `id_huesped`
     * const huespedWithId_huespedOnly = await prisma.huesped.findMany({ select: { id_huesped: true } })
     * 
     */
    findMany<T extends HuespedFindManyArgs>(args?: SelectSubset<T, HuespedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HuespedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Huesped.
     * @param {HuespedCreateArgs} args - Arguments to create a Huesped.
     * @example
     * // Create one Huesped
     * const Huesped = await prisma.huesped.create({
     *   data: {
     *     // ... data to create a Huesped
     *   }
     * })
     * 
     */
    create<T extends HuespedCreateArgs>(args: SelectSubset<T, HuespedCreateArgs<ExtArgs>>): Prisma__HuespedClient<$Result.GetResult<Prisma.$HuespedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Huespeds.
     * @param {HuespedCreateManyArgs} args - Arguments to create many Huespeds.
     * @example
     * // Create many Huespeds
     * const huesped = await prisma.huesped.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HuespedCreateManyArgs>(args?: SelectSubset<T, HuespedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Huespeds and returns the data saved in the database.
     * @param {HuespedCreateManyAndReturnArgs} args - Arguments to create many Huespeds.
     * @example
     * // Create many Huespeds
     * const huesped = await prisma.huesped.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Huespeds and only return the `id_huesped`
     * const huespedWithId_huespedOnly = await prisma.huesped.createManyAndReturn({
     *   select: { id_huesped: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HuespedCreateManyAndReturnArgs>(args?: SelectSubset<T, HuespedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HuespedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Huesped.
     * @param {HuespedDeleteArgs} args - Arguments to delete one Huesped.
     * @example
     * // Delete one Huesped
     * const Huesped = await prisma.huesped.delete({
     *   where: {
     *     // ... filter to delete one Huesped
     *   }
     * })
     * 
     */
    delete<T extends HuespedDeleteArgs>(args: SelectSubset<T, HuespedDeleteArgs<ExtArgs>>): Prisma__HuespedClient<$Result.GetResult<Prisma.$HuespedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Huesped.
     * @param {HuespedUpdateArgs} args - Arguments to update one Huesped.
     * @example
     * // Update one Huesped
     * const huesped = await prisma.huesped.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HuespedUpdateArgs>(args: SelectSubset<T, HuespedUpdateArgs<ExtArgs>>): Prisma__HuespedClient<$Result.GetResult<Prisma.$HuespedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Huespeds.
     * @param {HuespedDeleteManyArgs} args - Arguments to filter Huespeds to delete.
     * @example
     * // Delete a few Huespeds
     * const { count } = await prisma.huesped.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HuespedDeleteManyArgs>(args?: SelectSubset<T, HuespedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Huespeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuespedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Huespeds
     * const huesped = await prisma.huesped.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HuespedUpdateManyArgs>(args: SelectSubset<T, HuespedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Huespeds and returns the data updated in the database.
     * @param {HuespedUpdateManyAndReturnArgs} args - Arguments to update many Huespeds.
     * @example
     * // Update many Huespeds
     * const huesped = await prisma.huesped.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Huespeds and only return the `id_huesped`
     * const huespedWithId_huespedOnly = await prisma.huesped.updateManyAndReturn({
     *   select: { id_huesped: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HuespedUpdateManyAndReturnArgs>(args: SelectSubset<T, HuespedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HuespedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Huesped.
     * @param {HuespedUpsertArgs} args - Arguments to update or create a Huesped.
     * @example
     * // Update or create a Huesped
     * const huesped = await prisma.huesped.upsert({
     *   create: {
     *     // ... data to create a Huesped
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Huesped we want to update
     *   }
     * })
     */
    upsert<T extends HuespedUpsertArgs>(args: SelectSubset<T, HuespedUpsertArgs<ExtArgs>>): Prisma__HuespedClient<$Result.GetResult<Prisma.$HuespedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Huespeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuespedCountArgs} args - Arguments to filter Huespeds to count.
     * @example
     * // Count the number of Huespeds
     * const count = await prisma.huesped.count({
     *   where: {
     *     // ... the filter for the Huespeds we want to count
     *   }
     * })
    **/
    count<T extends HuespedCountArgs>(
      args?: Subset<T, HuespedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HuespedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Huesped.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuespedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HuespedAggregateArgs>(args: Subset<T, HuespedAggregateArgs>): Prisma.PrismaPromise<GetHuespedAggregateType<T>>

    /**
     * Group by Huesped.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuespedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HuespedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HuespedGroupByArgs['orderBy'] }
        : { orderBy?: HuespedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HuespedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHuespedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Huesped model
   */
  readonly fields: HuespedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Huesped.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HuespedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservas<T extends Huesped$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Huesped$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ingresos<T extends Huesped$ingresosArgs<ExtArgs> = {}>(args?: Subset<T, Huesped$ingresosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    huespedesHabitaciones<T extends Huesped$huespedesHabitacionesArgs<ExtArgs> = {}>(args?: Subset<T, Huesped$huespedesHabitacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HuespedHabitacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Huesped model
   */
  interface HuespedFieldRefs {
    readonly id_huesped: FieldRef<"Huesped", 'Int'>
    readonly nombre: FieldRef<"Huesped", 'String'>
    readonly apellido: FieldRef<"Huesped", 'String'>
    readonly documento_identidad: FieldRef<"Huesped", 'DocumentoIdentidad'>
    readonly numero_documento: FieldRef<"Huesped", 'String'>
    readonly ruc: FieldRef<"Huesped", 'String'>
    readonly nacionalidad: FieldRef<"Huesped", 'Nacionalidad'>
    readonly telefono: FieldRef<"Huesped", 'String'>
    readonly email: FieldRef<"Huesped", 'String'>
    readonly fecha_nacimiento: FieldRef<"Huesped", 'DateTime'>
    readonly activo: FieldRef<"Huesped", 'Boolean'>
    readonly created_at: FieldRef<"Huesped", 'DateTime'>
    readonly updated_at: FieldRef<"Huesped", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Huesped findUnique
   */
  export type HuespedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Huesped
     */
    select?: HuespedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Huesped
     */
    omit?: HuespedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HuespedInclude<ExtArgs> | null
    /**
     * Filter, which Huesped to fetch.
     */
    where: HuespedWhereUniqueInput
  }

  /**
   * Huesped findUniqueOrThrow
   */
  export type HuespedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Huesped
     */
    select?: HuespedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Huesped
     */
    omit?: HuespedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HuespedInclude<ExtArgs> | null
    /**
     * Filter, which Huesped to fetch.
     */
    where: HuespedWhereUniqueInput
  }

  /**
   * Huesped findFirst
   */
  export type HuespedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Huesped
     */
    select?: HuespedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Huesped
     */
    omit?: HuespedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HuespedInclude<ExtArgs> | null
    /**
     * Filter, which Huesped to fetch.
     */
    where?: HuespedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Huespeds to fetch.
     */
    orderBy?: HuespedOrderByWithRelationInput | HuespedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Huespeds.
     */
    cursor?: HuespedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Huespeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Huespeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Huespeds.
     */
    distinct?: HuespedScalarFieldEnum | HuespedScalarFieldEnum[]
  }

  /**
   * Huesped findFirstOrThrow
   */
  export type HuespedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Huesped
     */
    select?: HuespedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Huesped
     */
    omit?: HuespedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HuespedInclude<ExtArgs> | null
    /**
     * Filter, which Huesped to fetch.
     */
    where?: HuespedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Huespeds to fetch.
     */
    orderBy?: HuespedOrderByWithRelationInput | HuespedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Huespeds.
     */
    cursor?: HuespedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Huespeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Huespeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Huespeds.
     */
    distinct?: HuespedScalarFieldEnum | HuespedScalarFieldEnum[]
  }

  /**
   * Huesped findMany
   */
  export type HuespedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Huesped
     */
    select?: HuespedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Huesped
     */
    omit?: HuespedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HuespedInclude<ExtArgs> | null
    /**
     * Filter, which Huespeds to fetch.
     */
    where?: HuespedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Huespeds to fetch.
     */
    orderBy?: HuespedOrderByWithRelationInput | HuespedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Huespeds.
     */
    cursor?: HuespedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Huespeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Huespeds.
     */
    skip?: number
    distinct?: HuespedScalarFieldEnum | HuespedScalarFieldEnum[]
  }

  /**
   * Huesped create
   */
  export type HuespedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Huesped
     */
    select?: HuespedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Huesped
     */
    omit?: HuespedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HuespedInclude<ExtArgs> | null
    /**
     * The data needed to create a Huesped.
     */
    data: XOR<HuespedCreateInput, HuespedUncheckedCreateInput>
  }

  /**
   * Huesped createMany
   */
  export type HuespedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Huespeds.
     */
    data: HuespedCreateManyInput | HuespedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Huesped createManyAndReturn
   */
  export type HuespedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Huesped
     */
    select?: HuespedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Huesped
     */
    omit?: HuespedOmit<ExtArgs> | null
    /**
     * The data used to create many Huespeds.
     */
    data: HuespedCreateManyInput | HuespedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Huesped update
   */
  export type HuespedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Huesped
     */
    select?: HuespedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Huesped
     */
    omit?: HuespedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HuespedInclude<ExtArgs> | null
    /**
     * The data needed to update a Huesped.
     */
    data: XOR<HuespedUpdateInput, HuespedUncheckedUpdateInput>
    /**
     * Choose, which Huesped to update.
     */
    where: HuespedWhereUniqueInput
  }

  /**
   * Huesped updateMany
   */
  export type HuespedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Huespeds.
     */
    data: XOR<HuespedUpdateManyMutationInput, HuespedUncheckedUpdateManyInput>
    /**
     * Filter which Huespeds to update
     */
    where?: HuespedWhereInput
    /**
     * Limit how many Huespeds to update.
     */
    limit?: number
  }

  /**
   * Huesped updateManyAndReturn
   */
  export type HuespedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Huesped
     */
    select?: HuespedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Huesped
     */
    omit?: HuespedOmit<ExtArgs> | null
    /**
     * The data used to update Huespeds.
     */
    data: XOR<HuespedUpdateManyMutationInput, HuespedUncheckedUpdateManyInput>
    /**
     * Filter which Huespeds to update
     */
    where?: HuespedWhereInput
    /**
     * Limit how many Huespeds to update.
     */
    limit?: number
  }

  /**
   * Huesped upsert
   */
  export type HuespedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Huesped
     */
    select?: HuespedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Huesped
     */
    omit?: HuespedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HuespedInclude<ExtArgs> | null
    /**
     * The filter to search for the Huesped to update in case it exists.
     */
    where: HuespedWhereUniqueInput
    /**
     * In case the Huesped found by the `where` argument doesn't exist, create a new Huesped with this data.
     */
    create: XOR<HuespedCreateInput, HuespedUncheckedCreateInput>
    /**
     * In case the Huesped was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HuespedUpdateInput, HuespedUncheckedUpdateInput>
  }

  /**
   * Huesped delete
   */
  export type HuespedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Huesped
     */
    select?: HuespedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Huesped
     */
    omit?: HuespedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HuespedInclude<ExtArgs> | null
    /**
     * Filter which Huesped to delete.
     */
    where: HuespedWhereUniqueInput
  }

  /**
   * Huesped deleteMany
   */
  export type HuespedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Huespeds to delete
     */
    where?: HuespedWhereInput
    /**
     * Limit how many Huespeds to delete.
     */
    limit?: number
  }

  /**
   * Huesped.reservas
   */
  export type Huesped$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Huesped.ingresos
   */
  export type Huesped$ingresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingreso
     */
    select?: IngresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingreso
     */
    omit?: IngresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngresoInclude<ExtArgs> | null
    where?: IngresoWhereInput
    orderBy?: IngresoOrderByWithRelationInput | IngresoOrderByWithRelationInput[]
    cursor?: IngresoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngresoScalarFieldEnum | IngresoScalarFieldEnum[]
  }

  /**
   * Huesped.huespedesHabitaciones
   */
  export type Huesped$huespedesHabitacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuespedHabitacion
     */
    select?: HuespedHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HuespedHabitacion
     */
    omit?: HuespedHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HuespedHabitacionInclude<ExtArgs> | null
    where?: HuespedHabitacionWhereInput
    orderBy?: HuespedHabitacionOrderByWithRelationInput | HuespedHabitacionOrderByWithRelationInput[]
    cursor?: HuespedHabitacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HuespedHabitacionScalarFieldEnum | HuespedHabitacionScalarFieldEnum[]
  }

  /**
   * Huesped without action
   */
  export type HuespedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Huesped
     */
    select?: HuespedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Huesped
     */
    omit?: HuespedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HuespedInclude<ExtArgs> | null
  }


  /**
   * Model TipoHabitacion
   */

  export type AggregateTipoHabitacion = {
    _count: TipoHabitacionCountAggregateOutputType | null
    _avg: TipoHabitacionAvgAggregateOutputType | null
    _sum: TipoHabitacionSumAggregateOutputType | null
    _min: TipoHabitacionMinAggregateOutputType | null
    _max: TipoHabitacionMaxAggregateOutputType | null
  }

  export type TipoHabitacionAvgAggregateOutputType = {
    id_tipo_habitacion: number | null
    capacidad: number | null
  }

  export type TipoHabitacionSumAggregateOutputType = {
    id_tipo_habitacion: number | null
    capacidad: number | null
  }

  export type TipoHabitacionMinAggregateOutputType = {
    id_tipo_habitacion: number | null
    nombre: string | null
    descripcion: string | null
    capacidad: number | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TipoHabitacionMaxAggregateOutputType = {
    id_tipo_habitacion: number | null
    nombre: string | null
    descripcion: string | null
    capacidad: number | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TipoHabitacionCountAggregateOutputType = {
    id_tipo_habitacion: number
    nombre: number
    descripcion: number
    capacidad: number
    activo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TipoHabitacionAvgAggregateInputType = {
    id_tipo_habitacion?: true
    capacidad?: true
  }

  export type TipoHabitacionSumAggregateInputType = {
    id_tipo_habitacion?: true
    capacidad?: true
  }

  export type TipoHabitacionMinAggregateInputType = {
    id_tipo_habitacion?: true
    nombre?: true
    descripcion?: true
    capacidad?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type TipoHabitacionMaxAggregateInputType = {
    id_tipo_habitacion?: true
    nombre?: true
    descripcion?: true
    capacidad?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type TipoHabitacionCountAggregateInputType = {
    id_tipo_habitacion?: true
    nombre?: true
    descripcion?: true
    capacidad?: true
    activo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TipoHabitacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoHabitacion to aggregate.
     */
    where?: TipoHabitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoHabitacions to fetch.
     */
    orderBy?: TipoHabitacionOrderByWithRelationInput | TipoHabitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoHabitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoHabitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoHabitacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoHabitacions
    **/
    _count?: true | TipoHabitacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoHabitacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoHabitacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoHabitacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoHabitacionMaxAggregateInputType
  }

  export type GetTipoHabitacionAggregateType<T extends TipoHabitacionAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoHabitacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoHabitacion[P]>
      : GetScalarType<T[P], AggregateTipoHabitacion[P]>
  }




  export type TipoHabitacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoHabitacionWhereInput
    orderBy?: TipoHabitacionOrderByWithAggregationInput | TipoHabitacionOrderByWithAggregationInput[]
    by: TipoHabitacionScalarFieldEnum[] | TipoHabitacionScalarFieldEnum
    having?: TipoHabitacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoHabitacionCountAggregateInputType | true
    _avg?: TipoHabitacionAvgAggregateInputType
    _sum?: TipoHabitacionSumAggregateInputType
    _min?: TipoHabitacionMinAggregateInputType
    _max?: TipoHabitacionMaxAggregateInputType
  }

  export type TipoHabitacionGroupByOutputType = {
    id_tipo_habitacion: number
    nombre: string
    descripcion: string
    capacidad: number
    activo: boolean
    created_at: Date
    updated_at: Date
    _count: TipoHabitacionCountAggregateOutputType | null
    _avg: TipoHabitacionAvgAggregateOutputType | null
    _sum: TipoHabitacionSumAggregateOutputType | null
    _min: TipoHabitacionMinAggregateOutputType | null
    _max: TipoHabitacionMaxAggregateOutputType | null
  }

  type GetTipoHabitacionGroupByPayload<T extends TipoHabitacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoHabitacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoHabitacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoHabitacionGroupByOutputType[P]>
            : GetScalarType<T[P], TipoHabitacionGroupByOutputType[P]>
        }
      >
    >


  export type TipoHabitacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_habitacion?: boolean
    nombre?: boolean
    descripcion?: boolean
    capacidad?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    tarifas?: boolean | TipoHabitacion$tarifasArgs<ExtArgs>
    habitaciones?: boolean | TipoHabitacion$habitacionesArgs<ExtArgs>
    reservas?: boolean | TipoHabitacion$reservasArgs<ExtArgs>
    _count?: boolean | TipoHabitacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoHabitacion"]>

  export type TipoHabitacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_habitacion?: boolean
    nombre?: boolean
    descripcion?: boolean
    capacidad?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["tipoHabitacion"]>

  export type TipoHabitacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_habitacion?: boolean
    nombre?: boolean
    descripcion?: boolean
    capacidad?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["tipoHabitacion"]>

  export type TipoHabitacionSelectScalar = {
    id_tipo_habitacion?: boolean
    nombre?: boolean
    descripcion?: boolean
    capacidad?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TipoHabitacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_tipo_habitacion" | "nombre" | "descripcion" | "capacidad" | "activo" | "created_at" | "updated_at", ExtArgs["result"]["tipoHabitacion"]>
  export type TipoHabitacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tarifas?: boolean | TipoHabitacion$tarifasArgs<ExtArgs>
    habitaciones?: boolean | TipoHabitacion$habitacionesArgs<ExtArgs>
    reservas?: boolean | TipoHabitacion$reservasArgs<ExtArgs>
    _count?: boolean | TipoHabitacionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoHabitacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TipoHabitacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoHabitacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoHabitacion"
    objects: {
      tarifas: Prisma.$TarifaPayload<ExtArgs>[]
      habitaciones: Prisma.$HabitacionPayload<ExtArgs>[]
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_tipo_habitacion: number
      nombre: string
      descripcion: string
      capacidad: number
      activo: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["tipoHabitacion"]>
    composites: {}
  }

  type TipoHabitacionGetPayload<S extends boolean | null | undefined | TipoHabitacionDefaultArgs> = $Result.GetResult<Prisma.$TipoHabitacionPayload, S>

  type TipoHabitacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoHabitacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoHabitacionCountAggregateInputType | true
    }

  export interface TipoHabitacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoHabitacion'], meta: { name: 'TipoHabitacion' } }
    /**
     * Find zero or one TipoHabitacion that matches the filter.
     * @param {TipoHabitacionFindUniqueArgs} args - Arguments to find a TipoHabitacion
     * @example
     * // Get one TipoHabitacion
     * const tipoHabitacion = await prisma.tipoHabitacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoHabitacionFindUniqueArgs>(args: SelectSubset<T, TipoHabitacionFindUniqueArgs<ExtArgs>>): Prisma__TipoHabitacionClient<$Result.GetResult<Prisma.$TipoHabitacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoHabitacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoHabitacionFindUniqueOrThrowArgs} args - Arguments to find a TipoHabitacion
     * @example
     * // Get one TipoHabitacion
     * const tipoHabitacion = await prisma.tipoHabitacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoHabitacionFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoHabitacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoHabitacionClient<$Result.GetResult<Prisma.$TipoHabitacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoHabitacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoHabitacionFindFirstArgs} args - Arguments to find a TipoHabitacion
     * @example
     * // Get one TipoHabitacion
     * const tipoHabitacion = await prisma.tipoHabitacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoHabitacionFindFirstArgs>(args?: SelectSubset<T, TipoHabitacionFindFirstArgs<ExtArgs>>): Prisma__TipoHabitacionClient<$Result.GetResult<Prisma.$TipoHabitacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoHabitacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoHabitacionFindFirstOrThrowArgs} args - Arguments to find a TipoHabitacion
     * @example
     * // Get one TipoHabitacion
     * const tipoHabitacion = await prisma.tipoHabitacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoHabitacionFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoHabitacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoHabitacionClient<$Result.GetResult<Prisma.$TipoHabitacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoHabitacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoHabitacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoHabitacions
     * const tipoHabitacions = await prisma.tipoHabitacion.findMany()
     * 
     * // Get first 10 TipoHabitacions
     * const tipoHabitacions = await prisma.tipoHabitacion.findMany({ take: 10 })
     * 
     * // Only select the `id_tipo_habitacion`
     * const tipoHabitacionWithId_tipo_habitacionOnly = await prisma.tipoHabitacion.findMany({ select: { id_tipo_habitacion: true } })
     * 
     */
    findMany<T extends TipoHabitacionFindManyArgs>(args?: SelectSubset<T, TipoHabitacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoHabitacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoHabitacion.
     * @param {TipoHabitacionCreateArgs} args - Arguments to create a TipoHabitacion.
     * @example
     * // Create one TipoHabitacion
     * const TipoHabitacion = await prisma.tipoHabitacion.create({
     *   data: {
     *     // ... data to create a TipoHabitacion
     *   }
     * })
     * 
     */
    create<T extends TipoHabitacionCreateArgs>(args: SelectSubset<T, TipoHabitacionCreateArgs<ExtArgs>>): Prisma__TipoHabitacionClient<$Result.GetResult<Prisma.$TipoHabitacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoHabitacions.
     * @param {TipoHabitacionCreateManyArgs} args - Arguments to create many TipoHabitacions.
     * @example
     * // Create many TipoHabitacions
     * const tipoHabitacion = await prisma.tipoHabitacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoHabitacionCreateManyArgs>(args?: SelectSubset<T, TipoHabitacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TipoHabitacions and returns the data saved in the database.
     * @param {TipoHabitacionCreateManyAndReturnArgs} args - Arguments to create many TipoHabitacions.
     * @example
     * // Create many TipoHabitacions
     * const tipoHabitacion = await prisma.tipoHabitacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TipoHabitacions and only return the `id_tipo_habitacion`
     * const tipoHabitacionWithId_tipo_habitacionOnly = await prisma.tipoHabitacion.createManyAndReturn({
     *   select: { id_tipo_habitacion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoHabitacionCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoHabitacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoHabitacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TipoHabitacion.
     * @param {TipoHabitacionDeleteArgs} args - Arguments to delete one TipoHabitacion.
     * @example
     * // Delete one TipoHabitacion
     * const TipoHabitacion = await prisma.tipoHabitacion.delete({
     *   where: {
     *     // ... filter to delete one TipoHabitacion
     *   }
     * })
     * 
     */
    delete<T extends TipoHabitacionDeleteArgs>(args: SelectSubset<T, TipoHabitacionDeleteArgs<ExtArgs>>): Prisma__TipoHabitacionClient<$Result.GetResult<Prisma.$TipoHabitacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoHabitacion.
     * @param {TipoHabitacionUpdateArgs} args - Arguments to update one TipoHabitacion.
     * @example
     * // Update one TipoHabitacion
     * const tipoHabitacion = await prisma.tipoHabitacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoHabitacionUpdateArgs>(args: SelectSubset<T, TipoHabitacionUpdateArgs<ExtArgs>>): Prisma__TipoHabitacionClient<$Result.GetResult<Prisma.$TipoHabitacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoHabitacions.
     * @param {TipoHabitacionDeleteManyArgs} args - Arguments to filter TipoHabitacions to delete.
     * @example
     * // Delete a few TipoHabitacions
     * const { count } = await prisma.tipoHabitacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoHabitacionDeleteManyArgs>(args?: SelectSubset<T, TipoHabitacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoHabitacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoHabitacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoHabitacions
     * const tipoHabitacion = await prisma.tipoHabitacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoHabitacionUpdateManyArgs>(args: SelectSubset<T, TipoHabitacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoHabitacions and returns the data updated in the database.
     * @param {TipoHabitacionUpdateManyAndReturnArgs} args - Arguments to update many TipoHabitacions.
     * @example
     * // Update many TipoHabitacions
     * const tipoHabitacion = await prisma.tipoHabitacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TipoHabitacions and only return the `id_tipo_habitacion`
     * const tipoHabitacionWithId_tipo_habitacionOnly = await prisma.tipoHabitacion.updateManyAndReturn({
     *   select: { id_tipo_habitacion: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TipoHabitacionUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoHabitacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoHabitacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TipoHabitacion.
     * @param {TipoHabitacionUpsertArgs} args - Arguments to update or create a TipoHabitacion.
     * @example
     * // Update or create a TipoHabitacion
     * const tipoHabitacion = await prisma.tipoHabitacion.upsert({
     *   create: {
     *     // ... data to create a TipoHabitacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoHabitacion we want to update
     *   }
     * })
     */
    upsert<T extends TipoHabitacionUpsertArgs>(args: SelectSubset<T, TipoHabitacionUpsertArgs<ExtArgs>>): Prisma__TipoHabitacionClient<$Result.GetResult<Prisma.$TipoHabitacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoHabitacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoHabitacionCountArgs} args - Arguments to filter TipoHabitacions to count.
     * @example
     * // Count the number of TipoHabitacions
     * const count = await prisma.tipoHabitacion.count({
     *   where: {
     *     // ... the filter for the TipoHabitacions we want to count
     *   }
     * })
    **/
    count<T extends TipoHabitacionCountArgs>(
      args?: Subset<T, TipoHabitacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoHabitacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoHabitacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoHabitacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoHabitacionAggregateArgs>(args: Subset<T, TipoHabitacionAggregateArgs>): Prisma.PrismaPromise<GetTipoHabitacionAggregateType<T>>

    /**
     * Group by TipoHabitacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoHabitacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipoHabitacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoHabitacionGroupByArgs['orderBy'] }
        : { orderBy?: TipoHabitacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipoHabitacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoHabitacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoHabitacion model
   */
  readonly fields: TipoHabitacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoHabitacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoHabitacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tarifas<T extends TipoHabitacion$tarifasArgs<ExtArgs> = {}>(args?: Subset<T, TipoHabitacion$tarifasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarifaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    habitaciones<T extends TipoHabitacion$habitacionesArgs<ExtArgs> = {}>(args?: Subset<T, TipoHabitacion$habitacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservas<T extends TipoHabitacion$reservasArgs<ExtArgs> = {}>(args?: Subset<T, TipoHabitacion$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TipoHabitacion model
   */
  interface TipoHabitacionFieldRefs {
    readonly id_tipo_habitacion: FieldRef<"TipoHabitacion", 'Int'>
    readonly nombre: FieldRef<"TipoHabitacion", 'String'>
    readonly descripcion: FieldRef<"TipoHabitacion", 'String'>
    readonly capacidad: FieldRef<"TipoHabitacion", 'Int'>
    readonly activo: FieldRef<"TipoHabitacion", 'Boolean'>
    readonly created_at: FieldRef<"TipoHabitacion", 'DateTime'>
    readonly updated_at: FieldRef<"TipoHabitacion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TipoHabitacion findUnique
   */
  export type TipoHabitacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoHabitacion
     */
    select?: TipoHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoHabitacion
     */
    omit?: TipoHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoHabitacionInclude<ExtArgs> | null
    /**
     * Filter, which TipoHabitacion to fetch.
     */
    where: TipoHabitacionWhereUniqueInput
  }

  /**
   * TipoHabitacion findUniqueOrThrow
   */
  export type TipoHabitacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoHabitacion
     */
    select?: TipoHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoHabitacion
     */
    omit?: TipoHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoHabitacionInclude<ExtArgs> | null
    /**
     * Filter, which TipoHabitacion to fetch.
     */
    where: TipoHabitacionWhereUniqueInput
  }

  /**
   * TipoHabitacion findFirst
   */
  export type TipoHabitacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoHabitacion
     */
    select?: TipoHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoHabitacion
     */
    omit?: TipoHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoHabitacionInclude<ExtArgs> | null
    /**
     * Filter, which TipoHabitacion to fetch.
     */
    where?: TipoHabitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoHabitacions to fetch.
     */
    orderBy?: TipoHabitacionOrderByWithRelationInput | TipoHabitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoHabitacions.
     */
    cursor?: TipoHabitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoHabitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoHabitacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoHabitacions.
     */
    distinct?: TipoHabitacionScalarFieldEnum | TipoHabitacionScalarFieldEnum[]
  }

  /**
   * TipoHabitacion findFirstOrThrow
   */
  export type TipoHabitacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoHabitacion
     */
    select?: TipoHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoHabitacion
     */
    omit?: TipoHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoHabitacionInclude<ExtArgs> | null
    /**
     * Filter, which TipoHabitacion to fetch.
     */
    where?: TipoHabitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoHabitacions to fetch.
     */
    orderBy?: TipoHabitacionOrderByWithRelationInput | TipoHabitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoHabitacions.
     */
    cursor?: TipoHabitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoHabitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoHabitacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoHabitacions.
     */
    distinct?: TipoHabitacionScalarFieldEnum | TipoHabitacionScalarFieldEnum[]
  }

  /**
   * TipoHabitacion findMany
   */
  export type TipoHabitacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoHabitacion
     */
    select?: TipoHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoHabitacion
     */
    omit?: TipoHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoHabitacionInclude<ExtArgs> | null
    /**
     * Filter, which TipoHabitacions to fetch.
     */
    where?: TipoHabitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoHabitacions to fetch.
     */
    orderBy?: TipoHabitacionOrderByWithRelationInput | TipoHabitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoHabitacions.
     */
    cursor?: TipoHabitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoHabitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoHabitacions.
     */
    skip?: number
    distinct?: TipoHabitacionScalarFieldEnum | TipoHabitacionScalarFieldEnum[]
  }

  /**
   * TipoHabitacion create
   */
  export type TipoHabitacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoHabitacion
     */
    select?: TipoHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoHabitacion
     */
    omit?: TipoHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoHabitacionInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoHabitacion.
     */
    data: XOR<TipoHabitacionCreateInput, TipoHabitacionUncheckedCreateInput>
  }

  /**
   * TipoHabitacion createMany
   */
  export type TipoHabitacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoHabitacions.
     */
    data: TipoHabitacionCreateManyInput | TipoHabitacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoHabitacion createManyAndReturn
   */
  export type TipoHabitacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoHabitacion
     */
    select?: TipoHabitacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoHabitacion
     */
    omit?: TipoHabitacionOmit<ExtArgs> | null
    /**
     * The data used to create many TipoHabitacions.
     */
    data: TipoHabitacionCreateManyInput | TipoHabitacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoHabitacion update
   */
  export type TipoHabitacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoHabitacion
     */
    select?: TipoHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoHabitacion
     */
    omit?: TipoHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoHabitacionInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoHabitacion.
     */
    data: XOR<TipoHabitacionUpdateInput, TipoHabitacionUncheckedUpdateInput>
    /**
     * Choose, which TipoHabitacion to update.
     */
    where: TipoHabitacionWhereUniqueInput
  }

  /**
   * TipoHabitacion updateMany
   */
  export type TipoHabitacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoHabitacions.
     */
    data: XOR<TipoHabitacionUpdateManyMutationInput, TipoHabitacionUncheckedUpdateManyInput>
    /**
     * Filter which TipoHabitacions to update
     */
    where?: TipoHabitacionWhereInput
    /**
     * Limit how many TipoHabitacions to update.
     */
    limit?: number
  }

  /**
   * TipoHabitacion updateManyAndReturn
   */
  export type TipoHabitacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoHabitacion
     */
    select?: TipoHabitacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoHabitacion
     */
    omit?: TipoHabitacionOmit<ExtArgs> | null
    /**
     * The data used to update TipoHabitacions.
     */
    data: XOR<TipoHabitacionUpdateManyMutationInput, TipoHabitacionUncheckedUpdateManyInput>
    /**
     * Filter which TipoHabitacions to update
     */
    where?: TipoHabitacionWhereInput
    /**
     * Limit how many TipoHabitacions to update.
     */
    limit?: number
  }

  /**
   * TipoHabitacion upsert
   */
  export type TipoHabitacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoHabitacion
     */
    select?: TipoHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoHabitacion
     */
    omit?: TipoHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoHabitacionInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoHabitacion to update in case it exists.
     */
    where: TipoHabitacionWhereUniqueInput
    /**
     * In case the TipoHabitacion found by the `where` argument doesn't exist, create a new TipoHabitacion with this data.
     */
    create: XOR<TipoHabitacionCreateInput, TipoHabitacionUncheckedCreateInput>
    /**
     * In case the TipoHabitacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoHabitacionUpdateInput, TipoHabitacionUncheckedUpdateInput>
  }

  /**
   * TipoHabitacion delete
   */
  export type TipoHabitacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoHabitacion
     */
    select?: TipoHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoHabitacion
     */
    omit?: TipoHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoHabitacionInclude<ExtArgs> | null
    /**
     * Filter which TipoHabitacion to delete.
     */
    where: TipoHabitacionWhereUniqueInput
  }

  /**
   * TipoHabitacion deleteMany
   */
  export type TipoHabitacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoHabitacions to delete
     */
    where?: TipoHabitacionWhereInput
    /**
     * Limit how many TipoHabitacions to delete.
     */
    limit?: number
  }

  /**
   * TipoHabitacion.tarifas
   */
  export type TipoHabitacion$tarifasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarifa
     */
    select?: TarifaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarifa
     */
    omit?: TarifaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarifaInclude<ExtArgs> | null
    where?: TarifaWhereInput
    orderBy?: TarifaOrderByWithRelationInput | TarifaOrderByWithRelationInput[]
    cursor?: TarifaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TarifaScalarFieldEnum | TarifaScalarFieldEnum[]
  }

  /**
   * TipoHabitacion.habitaciones
   */
  export type TipoHabitacion$habitacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    where?: HabitacionWhereInput
    orderBy?: HabitacionOrderByWithRelationInput | HabitacionOrderByWithRelationInput[]
    cursor?: HabitacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitacionScalarFieldEnum | HabitacionScalarFieldEnum[]
  }

  /**
   * TipoHabitacion.reservas
   */
  export type TipoHabitacion$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * TipoHabitacion without action
   */
  export type TipoHabitacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoHabitacion
     */
    select?: TipoHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoHabitacion
     */
    omit?: TipoHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoHabitacionInclude<ExtArgs> | null
  }


  /**
   * Model Tarifa
   */

  export type AggregateTarifa = {
    _count: TarifaCountAggregateOutputType | null
    _avg: TarifaAvgAggregateOutputType | null
    _sum: TarifaSumAggregateOutputType | null
    _min: TarifaMinAggregateOutputType | null
    _max: TarifaMaxAggregateOutputType | null
  }

  export type TarifaAvgAggregateOutputType = {
    id_tarifa: number | null
    fk_tipo_habitacion: number | null
    precio: number | null
  }

  export type TarifaSumAggregateOutputType = {
    id_tarifa: number | null
    fk_tipo_habitacion: number | null
    precio: number | null
  }

  export type TarifaMinAggregateOutputType = {
    id_tarifa: number | null
    fk_tipo_habitacion: number | null
    descripcion: string | null
    precio: number | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TarifaMaxAggregateOutputType = {
    id_tarifa: number | null
    fk_tipo_habitacion: number | null
    descripcion: string | null
    precio: number | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TarifaCountAggregateOutputType = {
    id_tarifa: number
    fk_tipo_habitacion: number
    descripcion: number
    precio: number
    activo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TarifaAvgAggregateInputType = {
    id_tarifa?: true
    fk_tipo_habitacion?: true
    precio?: true
  }

  export type TarifaSumAggregateInputType = {
    id_tarifa?: true
    fk_tipo_habitacion?: true
    precio?: true
  }

  export type TarifaMinAggregateInputType = {
    id_tarifa?: true
    fk_tipo_habitacion?: true
    descripcion?: true
    precio?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type TarifaMaxAggregateInputType = {
    id_tarifa?: true
    fk_tipo_habitacion?: true
    descripcion?: true
    precio?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type TarifaCountAggregateInputType = {
    id_tarifa?: true
    fk_tipo_habitacion?: true
    descripcion?: true
    precio?: true
    activo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TarifaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tarifa to aggregate.
     */
    where?: TarifaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarifas to fetch.
     */
    orderBy?: TarifaOrderByWithRelationInput | TarifaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TarifaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarifas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarifas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tarifas
    **/
    _count?: true | TarifaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TarifaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TarifaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TarifaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TarifaMaxAggregateInputType
  }

  export type GetTarifaAggregateType<T extends TarifaAggregateArgs> = {
        [P in keyof T & keyof AggregateTarifa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTarifa[P]>
      : GetScalarType<T[P], AggregateTarifa[P]>
  }




  export type TarifaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TarifaWhereInput
    orderBy?: TarifaOrderByWithAggregationInput | TarifaOrderByWithAggregationInput[]
    by: TarifaScalarFieldEnum[] | TarifaScalarFieldEnum
    having?: TarifaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TarifaCountAggregateInputType | true
    _avg?: TarifaAvgAggregateInputType
    _sum?: TarifaSumAggregateInputType
    _min?: TarifaMinAggregateInputType
    _max?: TarifaMaxAggregateInputType
  }

  export type TarifaGroupByOutputType = {
    id_tarifa: number
    fk_tipo_habitacion: number
    descripcion: string
    precio: number
    activo: boolean
    created_at: Date
    updated_at: Date
    _count: TarifaCountAggregateOutputType | null
    _avg: TarifaAvgAggregateOutputType | null
    _sum: TarifaSumAggregateOutputType | null
    _min: TarifaMinAggregateOutputType | null
    _max: TarifaMaxAggregateOutputType | null
  }

  type GetTarifaGroupByPayload<T extends TarifaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TarifaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TarifaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TarifaGroupByOutputType[P]>
            : GetScalarType<T[P], TarifaGroupByOutputType[P]>
        }
      >
    >


  export type TarifaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tarifa?: boolean
    fk_tipo_habitacion?: boolean
    descripcion?: boolean
    precio?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    tipoHabitacion?: boolean | TipoHabitacionDefaultArgs<ExtArgs>
    ingresos?: boolean | Tarifa$ingresosArgs<ExtArgs>
    _count?: boolean | TarifaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tarifa"]>

  export type TarifaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tarifa?: boolean
    fk_tipo_habitacion?: boolean
    descripcion?: boolean
    precio?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    tipoHabitacion?: boolean | TipoHabitacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tarifa"]>

  export type TarifaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tarifa?: boolean
    fk_tipo_habitacion?: boolean
    descripcion?: boolean
    precio?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    tipoHabitacion?: boolean | TipoHabitacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tarifa"]>

  export type TarifaSelectScalar = {
    id_tarifa?: boolean
    fk_tipo_habitacion?: boolean
    descripcion?: boolean
    precio?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TarifaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_tarifa" | "fk_tipo_habitacion" | "descripcion" | "precio" | "activo" | "created_at" | "updated_at", ExtArgs["result"]["tarifa"]>
  export type TarifaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoHabitacion?: boolean | TipoHabitacionDefaultArgs<ExtArgs>
    ingresos?: boolean | Tarifa$ingresosArgs<ExtArgs>
    _count?: boolean | TarifaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TarifaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoHabitacion?: boolean | TipoHabitacionDefaultArgs<ExtArgs>
  }
  export type TarifaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoHabitacion?: boolean | TipoHabitacionDefaultArgs<ExtArgs>
  }

  export type $TarifaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tarifa"
    objects: {
      tipoHabitacion: Prisma.$TipoHabitacionPayload<ExtArgs>
      ingresos: Prisma.$IngresoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_tarifa: number
      fk_tipo_habitacion: number
      descripcion: string
      precio: number
      activo: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["tarifa"]>
    composites: {}
  }

  type TarifaGetPayload<S extends boolean | null | undefined | TarifaDefaultArgs> = $Result.GetResult<Prisma.$TarifaPayload, S>

  type TarifaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TarifaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TarifaCountAggregateInputType | true
    }

  export interface TarifaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tarifa'], meta: { name: 'Tarifa' } }
    /**
     * Find zero or one Tarifa that matches the filter.
     * @param {TarifaFindUniqueArgs} args - Arguments to find a Tarifa
     * @example
     * // Get one Tarifa
     * const tarifa = await prisma.tarifa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TarifaFindUniqueArgs>(args: SelectSubset<T, TarifaFindUniqueArgs<ExtArgs>>): Prisma__TarifaClient<$Result.GetResult<Prisma.$TarifaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tarifa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TarifaFindUniqueOrThrowArgs} args - Arguments to find a Tarifa
     * @example
     * // Get one Tarifa
     * const tarifa = await prisma.tarifa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TarifaFindUniqueOrThrowArgs>(args: SelectSubset<T, TarifaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TarifaClient<$Result.GetResult<Prisma.$TarifaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tarifa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarifaFindFirstArgs} args - Arguments to find a Tarifa
     * @example
     * // Get one Tarifa
     * const tarifa = await prisma.tarifa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TarifaFindFirstArgs>(args?: SelectSubset<T, TarifaFindFirstArgs<ExtArgs>>): Prisma__TarifaClient<$Result.GetResult<Prisma.$TarifaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tarifa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarifaFindFirstOrThrowArgs} args - Arguments to find a Tarifa
     * @example
     * // Get one Tarifa
     * const tarifa = await prisma.tarifa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TarifaFindFirstOrThrowArgs>(args?: SelectSubset<T, TarifaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TarifaClient<$Result.GetResult<Prisma.$TarifaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tarifas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarifaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tarifas
     * const tarifas = await prisma.tarifa.findMany()
     * 
     * // Get first 10 Tarifas
     * const tarifas = await prisma.tarifa.findMany({ take: 10 })
     * 
     * // Only select the `id_tarifa`
     * const tarifaWithId_tarifaOnly = await prisma.tarifa.findMany({ select: { id_tarifa: true } })
     * 
     */
    findMany<T extends TarifaFindManyArgs>(args?: SelectSubset<T, TarifaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarifaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tarifa.
     * @param {TarifaCreateArgs} args - Arguments to create a Tarifa.
     * @example
     * // Create one Tarifa
     * const Tarifa = await prisma.tarifa.create({
     *   data: {
     *     // ... data to create a Tarifa
     *   }
     * })
     * 
     */
    create<T extends TarifaCreateArgs>(args: SelectSubset<T, TarifaCreateArgs<ExtArgs>>): Prisma__TarifaClient<$Result.GetResult<Prisma.$TarifaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tarifas.
     * @param {TarifaCreateManyArgs} args - Arguments to create many Tarifas.
     * @example
     * // Create many Tarifas
     * const tarifa = await prisma.tarifa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TarifaCreateManyArgs>(args?: SelectSubset<T, TarifaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tarifas and returns the data saved in the database.
     * @param {TarifaCreateManyAndReturnArgs} args - Arguments to create many Tarifas.
     * @example
     * // Create many Tarifas
     * const tarifa = await prisma.tarifa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tarifas and only return the `id_tarifa`
     * const tarifaWithId_tarifaOnly = await prisma.tarifa.createManyAndReturn({
     *   select: { id_tarifa: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TarifaCreateManyAndReturnArgs>(args?: SelectSubset<T, TarifaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarifaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tarifa.
     * @param {TarifaDeleteArgs} args - Arguments to delete one Tarifa.
     * @example
     * // Delete one Tarifa
     * const Tarifa = await prisma.tarifa.delete({
     *   where: {
     *     // ... filter to delete one Tarifa
     *   }
     * })
     * 
     */
    delete<T extends TarifaDeleteArgs>(args: SelectSubset<T, TarifaDeleteArgs<ExtArgs>>): Prisma__TarifaClient<$Result.GetResult<Prisma.$TarifaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tarifa.
     * @param {TarifaUpdateArgs} args - Arguments to update one Tarifa.
     * @example
     * // Update one Tarifa
     * const tarifa = await prisma.tarifa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TarifaUpdateArgs>(args: SelectSubset<T, TarifaUpdateArgs<ExtArgs>>): Prisma__TarifaClient<$Result.GetResult<Prisma.$TarifaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tarifas.
     * @param {TarifaDeleteManyArgs} args - Arguments to filter Tarifas to delete.
     * @example
     * // Delete a few Tarifas
     * const { count } = await prisma.tarifa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TarifaDeleteManyArgs>(args?: SelectSubset<T, TarifaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tarifas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarifaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tarifas
     * const tarifa = await prisma.tarifa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TarifaUpdateManyArgs>(args: SelectSubset<T, TarifaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tarifas and returns the data updated in the database.
     * @param {TarifaUpdateManyAndReturnArgs} args - Arguments to update many Tarifas.
     * @example
     * // Update many Tarifas
     * const tarifa = await prisma.tarifa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tarifas and only return the `id_tarifa`
     * const tarifaWithId_tarifaOnly = await prisma.tarifa.updateManyAndReturn({
     *   select: { id_tarifa: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TarifaUpdateManyAndReturnArgs>(args: SelectSubset<T, TarifaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarifaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tarifa.
     * @param {TarifaUpsertArgs} args - Arguments to update or create a Tarifa.
     * @example
     * // Update or create a Tarifa
     * const tarifa = await prisma.tarifa.upsert({
     *   create: {
     *     // ... data to create a Tarifa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tarifa we want to update
     *   }
     * })
     */
    upsert<T extends TarifaUpsertArgs>(args: SelectSubset<T, TarifaUpsertArgs<ExtArgs>>): Prisma__TarifaClient<$Result.GetResult<Prisma.$TarifaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tarifas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarifaCountArgs} args - Arguments to filter Tarifas to count.
     * @example
     * // Count the number of Tarifas
     * const count = await prisma.tarifa.count({
     *   where: {
     *     // ... the filter for the Tarifas we want to count
     *   }
     * })
    **/
    count<T extends TarifaCountArgs>(
      args?: Subset<T, TarifaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TarifaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tarifa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarifaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TarifaAggregateArgs>(args: Subset<T, TarifaAggregateArgs>): Prisma.PrismaPromise<GetTarifaAggregateType<T>>

    /**
     * Group by Tarifa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarifaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TarifaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TarifaGroupByArgs['orderBy'] }
        : { orderBy?: TarifaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TarifaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTarifaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tarifa model
   */
  readonly fields: TarifaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tarifa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TarifaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipoHabitacion<T extends TipoHabitacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoHabitacionDefaultArgs<ExtArgs>>): Prisma__TipoHabitacionClient<$Result.GetResult<Prisma.$TipoHabitacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingresos<T extends Tarifa$ingresosArgs<ExtArgs> = {}>(args?: Subset<T, Tarifa$ingresosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tarifa model
   */
  interface TarifaFieldRefs {
    readonly id_tarifa: FieldRef<"Tarifa", 'Int'>
    readonly fk_tipo_habitacion: FieldRef<"Tarifa", 'Int'>
    readonly descripcion: FieldRef<"Tarifa", 'String'>
    readonly precio: FieldRef<"Tarifa", 'Int'>
    readonly activo: FieldRef<"Tarifa", 'Boolean'>
    readonly created_at: FieldRef<"Tarifa", 'DateTime'>
    readonly updated_at: FieldRef<"Tarifa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tarifa findUnique
   */
  export type TarifaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarifa
     */
    select?: TarifaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarifa
     */
    omit?: TarifaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarifaInclude<ExtArgs> | null
    /**
     * Filter, which Tarifa to fetch.
     */
    where: TarifaWhereUniqueInput
  }

  /**
   * Tarifa findUniqueOrThrow
   */
  export type TarifaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarifa
     */
    select?: TarifaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarifa
     */
    omit?: TarifaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarifaInclude<ExtArgs> | null
    /**
     * Filter, which Tarifa to fetch.
     */
    where: TarifaWhereUniqueInput
  }

  /**
   * Tarifa findFirst
   */
  export type TarifaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarifa
     */
    select?: TarifaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarifa
     */
    omit?: TarifaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarifaInclude<ExtArgs> | null
    /**
     * Filter, which Tarifa to fetch.
     */
    where?: TarifaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarifas to fetch.
     */
    orderBy?: TarifaOrderByWithRelationInput | TarifaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tarifas.
     */
    cursor?: TarifaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarifas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarifas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tarifas.
     */
    distinct?: TarifaScalarFieldEnum | TarifaScalarFieldEnum[]
  }

  /**
   * Tarifa findFirstOrThrow
   */
  export type TarifaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarifa
     */
    select?: TarifaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarifa
     */
    omit?: TarifaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarifaInclude<ExtArgs> | null
    /**
     * Filter, which Tarifa to fetch.
     */
    where?: TarifaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarifas to fetch.
     */
    orderBy?: TarifaOrderByWithRelationInput | TarifaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tarifas.
     */
    cursor?: TarifaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarifas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarifas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tarifas.
     */
    distinct?: TarifaScalarFieldEnum | TarifaScalarFieldEnum[]
  }

  /**
   * Tarifa findMany
   */
  export type TarifaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarifa
     */
    select?: TarifaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarifa
     */
    omit?: TarifaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarifaInclude<ExtArgs> | null
    /**
     * Filter, which Tarifas to fetch.
     */
    where?: TarifaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarifas to fetch.
     */
    orderBy?: TarifaOrderByWithRelationInput | TarifaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tarifas.
     */
    cursor?: TarifaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarifas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarifas.
     */
    skip?: number
    distinct?: TarifaScalarFieldEnum | TarifaScalarFieldEnum[]
  }

  /**
   * Tarifa create
   */
  export type TarifaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarifa
     */
    select?: TarifaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarifa
     */
    omit?: TarifaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarifaInclude<ExtArgs> | null
    /**
     * The data needed to create a Tarifa.
     */
    data: XOR<TarifaCreateInput, TarifaUncheckedCreateInput>
  }

  /**
   * Tarifa createMany
   */
  export type TarifaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tarifas.
     */
    data: TarifaCreateManyInput | TarifaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tarifa createManyAndReturn
   */
  export type TarifaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarifa
     */
    select?: TarifaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tarifa
     */
    omit?: TarifaOmit<ExtArgs> | null
    /**
     * The data used to create many Tarifas.
     */
    data: TarifaCreateManyInput | TarifaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarifaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tarifa update
   */
  export type TarifaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarifa
     */
    select?: TarifaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarifa
     */
    omit?: TarifaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarifaInclude<ExtArgs> | null
    /**
     * The data needed to update a Tarifa.
     */
    data: XOR<TarifaUpdateInput, TarifaUncheckedUpdateInput>
    /**
     * Choose, which Tarifa to update.
     */
    where: TarifaWhereUniqueInput
  }

  /**
   * Tarifa updateMany
   */
  export type TarifaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tarifas.
     */
    data: XOR<TarifaUpdateManyMutationInput, TarifaUncheckedUpdateManyInput>
    /**
     * Filter which Tarifas to update
     */
    where?: TarifaWhereInput
    /**
     * Limit how many Tarifas to update.
     */
    limit?: number
  }

  /**
   * Tarifa updateManyAndReturn
   */
  export type TarifaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarifa
     */
    select?: TarifaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tarifa
     */
    omit?: TarifaOmit<ExtArgs> | null
    /**
     * The data used to update Tarifas.
     */
    data: XOR<TarifaUpdateManyMutationInput, TarifaUncheckedUpdateManyInput>
    /**
     * Filter which Tarifas to update
     */
    where?: TarifaWhereInput
    /**
     * Limit how many Tarifas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarifaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tarifa upsert
   */
  export type TarifaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarifa
     */
    select?: TarifaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarifa
     */
    omit?: TarifaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarifaInclude<ExtArgs> | null
    /**
     * The filter to search for the Tarifa to update in case it exists.
     */
    where: TarifaWhereUniqueInput
    /**
     * In case the Tarifa found by the `where` argument doesn't exist, create a new Tarifa with this data.
     */
    create: XOR<TarifaCreateInput, TarifaUncheckedCreateInput>
    /**
     * In case the Tarifa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TarifaUpdateInput, TarifaUncheckedUpdateInput>
  }

  /**
   * Tarifa delete
   */
  export type TarifaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarifa
     */
    select?: TarifaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarifa
     */
    omit?: TarifaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarifaInclude<ExtArgs> | null
    /**
     * Filter which Tarifa to delete.
     */
    where: TarifaWhereUniqueInput
  }

  /**
   * Tarifa deleteMany
   */
  export type TarifaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tarifas to delete
     */
    where?: TarifaWhereInput
    /**
     * Limit how many Tarifas to delete.
     */
    limit?: number
  }

  /**
   * Tarifa.ingresos
   */
  export type Tarifa$ingresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingreso
     */
    select?: IngresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingreso
     */
    omit?: IngresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngresoInclude<ExtArgs> | null
    where?: IngresoWhereInput
    orderBy?: IngresoOrderByWithRelationInput | IngresoOrderByWithRelationInput[]
    cursor?: IngresoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngresoScalarFieldEnum | IngresoScalarFieldEnum[]
  }

  /**
   * Tarifa without action
   */
  export type TarifaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarifa
     */
    select?: TarifaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarifa
     */
    omit?: TarifaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarifaInclude<ExtArgs> | null
  }


  /**
   * Model Habitacion
   */

  export type AggregateHabitacion = {
    _count: HabitacionCountAggregateOutputType | null
    _avg: HabitacionAvgAggregateOutputType | null
    _sum: HabitacionSumAggregateOutputType | null
    _min: HabitacionMinAggregateOutputType | null
    _max: HabitacionMaxAggregateOutputType | null
  }

  export type HabitacionAvgAggregateOutputType = {
    id_habitacion: number | null
    fk_tipo_habitacion: number | null
  }

  export type HabitacionSumAggregateOutputType = {
    id_habitacion: number | null
    fk_tipo_habitacion: number | null
  }

  export type HabitacionMinAggregateOutputType = {
    id_habitacion: number | null
    numero: string | null
    fk_tipo_habitacion: number | null
    piso: string | null
    estado: string | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HabitacionMaxAggregateOutputType = {
    id_habitacion: number | null
    numero: string | null
    fk_tipo_habitacion: number | null
    piso: string | null
    estado: string | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HabitacionCountAggregateOutputType = {
    id_habitacion: number
    numero: number
    fk_tipo_habitacion: number
    piso: number
    estado: number
    activo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type HabitacionAvgAggregateInputType = {
    id_habitacion?: true
    fk_tipo_habitacion?: true
  }

  export type HabitacionSumAggregateInputType = {
    id_habitacion?: true
    fk_tipo_habitacion?: true
  }

  export type HabitacionMinAggregateInputType = {
    id_habitacion?: true
    numero?: true
    fk_tipo_habitacion?: true
    piso?: true
    estado?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type HabitacionMaxAggregateInputType = {
    id_habitacion?: true
    numero?: true
    fk_tipo_habitacion?: true
    piso?: true
    estado?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type HabitacionCountAggregateInputType = {
    id_habitacion?: true
    numero?: true
    fk_tipo_habitacion?: true
    piso?: true
    estado?: true
    activo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type HabitacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habitacion to aggregate.
     */
    where?: HabitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habitacions to fetch.
     */
    orderBy?: HabitacionOrderByWithRelationInput | HabitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habitacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Habitacions
    **/
    _count?: true | HabitacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HabitacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HabitacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitacionMaxAggregateInputType
  }

  export type GetHabitacionAggregateType<T extends HabitacionAggregateArgs> = {
        [P in keyof T & keyof AggregateHabitacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabitacion[P]>
      : GetScalarType<T[P], AggregateHabitacion[P]>
  }




  export type HabitacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitacionWhereInput
    orderBy?: HabitacionOrderByWithAggregationInput | HabitacionOrderByWithAggregationInput[]
    by: HabitacionScalarFieldEnum[] | HabitacionScalarFieldEnum
    having?: HabitacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitacionCountAggregateInputType | true
    _avg?: HabitacionAvgAggregateInputType
    _sum?: HabitacionSumAggregateInputType
    _min?: HabitacionMinAggregateInputType
    _max?: HabitacionMaxAggregateInputType
  }

  export type HabitacionGroupByOutputType = {
    id_habitacion: number
    numero: string
    fk_tipo_habitacion: number
    piso: string
    estado: string
    activo: boolean
    created_at: Date
    updated_at: Date
    _count: HabitacionCountAggregateOutputType | null
    _avg: HabitacionAvgAggregateOutputType | null
    _sum: HabitacionSumAggregateOutputType | null
    _min: HabitacionMinAggregateOutputType | null
    _max: HabitacionMaxAggregateOutputType | null
  }

  type GetHabitacionGroupByPayload<T extends HabitacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitacionGroupByOutputType[P]>
            : GetScalarType<T[P], HabitacionGroupByOutputType[P]>
        }
      >
    >


  export type HabitacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_habitacion?: boolean
    numero?: boolean
    fk_tipo_habitacion?: boolean
    piso?: boolean
    estado?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    tipoHabitacion?: boolean | TipoHabitacionDefaultArgs<ExtArgs>
    ingresos?: boolean | Habitacion$ingresosArgs<ExtArgs>
    _count?: boolean | HabitacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitacion"]>

  export type HabitacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_habitacion?: boolean
    numero?: boolean
    fk_tipo_habitacion?: boolean
    piso?: boolean
    estado?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    tipoHabitacion?: boolean | TipoHabitacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitacion"]>

  export type HabitacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_habitacion?: boolean
    numero?: boolean
    fk_tipo_habitacion?: boolean
    piso?: boolean
    estado?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    tipoHabitacion?: boolean | TipoHabitacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitacion"]>

  export type HabitacionSelectScalar = {
    id_habitacion?: boolean
    numero?: boolean
    fk_tipo_habitacion?: boolean
    piso?: boolean
    estado?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type HabitacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_habitacion" | "numero" | "fk_tipo_habitacion" | "piso" | "estado" | "activo" | "created_at" | "updated_at", ExtArgs["result"]["habitacion"]>
  export type HabitacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoHabitacion?: boolean | TipoHabitacionDefaultArgs<ExtArgs>
    ingresos?: boolean | Habitacion$ingresosArgs<ExtArgs>
    _count?: boolean | HabitacionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HabitacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoHabitacion?: boolean | TipoHabitacionDefaultArgs<ExtArgs>
  }
  export type HabitacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoHabitacion?: boolean | TipoHabitacionDefaultArgs<ExtArgs>
  }

  export type $HabitacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Habitacion"
    objects: {
      tipoHabitacion: Prisma.$TipoHabitacionPayload<ExtArgs>
      ingresos: Prisma.$IngresoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_habitacion: number
      numero: string
      fk_tipo_habitacion: number
      piso: string
      estado: string
      activo: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["habitacion"]>
    composites: {}
  }

  type HabitacionGetPayload<S extends boolean | null | undefined | HabitacionDefaultArgs> = $Result.GetResult<Prisma.$HabitacionPayload, S>

  type HabitacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HabitacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HabitacionCountAggregateInputType | true
    }

  export interface HabitacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Habitacion'], meta: { name: 'Habitacion' } }
    /**
     * Find zero or one Habitacion that matches the filter.
     * @param {HabitacionFindUniqueArgs} args - Arguments to find a Habitacion
     * @example
     * // Get one Habitacion
     * const habitacion = await prisma.habitacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitacionFindUniqueArgs>(args: SelectSubset<T, HabitacionFindUniqueArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Habitacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HabitacionFindUniqueOrThrowArgs} args - Arguments to find a Habitacion
     * @example
     * // Get one Habitacion
     * const habitacion = await prisma.habitacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitacionFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habitacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitacionFindFirstArgs} args - Arguments to find a Habitacion
     * @example
     * // Get one Habitacion
     * const habitacion = await prisma.habitacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitacionFindFirstArgs>(args?: SelectSubset<T, HabitacionFindFirstArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habitacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitacionFindFirstOrThrowArgs} args - Arguments to find a Habitacion
     * @example
     * // Get one Habitacion
     * const habitacion = await prisma.habitacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitacionFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Habitacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Habitacions
     * const habitacions = await prisma.habitacion.findMany()
     * 
     * // Get first 10 Habitacions
     * const habitacions = await prisma.habitacion.findMany({ take: 10 })
     * 
     * // Only select the `id_habitacion`
     * const habitacionWithId_habitacionOnly = await prisma.habitacion.findMany({ select: { id_habitacion: true } })
     * 
     */
    findMany<T extends HabitacionFindManyArgs>(args?: SelectSubset<T, HabitacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Habitacion.
     * @param {HabitacionCreateArgs} args - Arguments to create a Habitacion.
     * @example
     * // Create one Habitacion
     * const Habitacion = await prisma.habitacion.create({
     *   data: {
     *     // ... data to create a Habitacion
     *   }
     * })
     * 
     */
    create<T extends HabitacionCreateArgs>(args: SelectSubset<T, HabitacionCreateArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Habitacions.
     * @param {HabitacionCreateManyArgs} args - Arguments to create many Habitacions.
     * @example
     * // Create many Habitacions
     * const habitacion = await prisma.habitacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitacionCreateManyArgs>(args?: SelectSubset<T, HabitacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Habitacions and returns the data saved in the database.
     * @param {HabitacionCreateManyAndReturnArgs} args - Arguments to create many Habitacions.
     * @example
     * // Create many Habitacions
     * const habitacion = await prisma.habitacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Habitacions and only return the `id_habitacion`
     * const habitacionWithId_habitacionOnly = await prisma.habitacion.createManyAndReturn({
     *   select: { id_habitacion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HabitacionCreateManyAndReturnArgs>(args?: SelectSubset<T, HabitacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Habitacion.
     * @param {HabitacionDeleteArgs} args - Arguments to delete one Habitacion.
     * @example
     * // Delete one Habitacion
     * const Habitacion = await prisma.habitacion.delete({
     *   where: {
     *     // ... filter to delete one Habitacion
     *   }
     * })
     * 
     */
    delete<T extends HabitacionDeleteArgs>(args: SelectSubset<T, HabitacionDeleteArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Habitacion.
     * @param {HabitacionUpdateArgs} args - Arguments to update one Habitacion.
     * @example
     * // Update one Habitacion
     * const habitacion = await prisma.habitacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitacionUpdateArgs>(args: SelectSubset<T, HabitacionUpdateArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Habitacions.
     * @param {HabitacionDeleteManyArgs} args - Arguments to filter Habitacions to delete.
     * @example
     * // Delete a few Habitacions
     * const { count } = await prisma.habitacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitacionDeleteManyArgs>(args?: SelectSubset<T, HabitacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habitacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Habitacions
     * const habitacion = await prisma.habitacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitacionUpdateManyArgs>(args: SelectSubset<T, HabitacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habitacions and returns the data updated in the database.
     * @param {HabitacionUpdateManyAndReturnArgs} args - Arguments to update many Habitacions.
     * @example
     * // Update many Habitacions
     * const habitacion = await prisma.habitacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Habitacions and only return the `id_habitacion`
     * const habitacionWithId_habitacionOnly = await prisma.habitacion.updateManyAndReturn({
     *   select: { id_habitacion: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HabitacionUpdateManyAndReturnArgs>(args: SelectSubset<T, HabitacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Habitacion.
     * @param {HabitacionUpsertArgs} args - Arguments to update or create a Habitacion.
     * @example
     * // Update or create a Habitacion
     * const habitacion = await prisma.habitacion.upsert({
     *   create: {
     *     // ... data to create a Habitacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Habitacion we want to update
     *   }
     * })
     */
    upsert<T extends HabitacionUpsertArgs>(args: SelectSubset<T, HabitacionUpsertArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Habitacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitacionCountArgs} args - Arguments to filter Habitacions to count.
     * @example
     * // Count the number of Habitacions
     * const count = await prisma.habitacion.count({
     *   where: {
     *     // ... the filter for the Habitacions we want to count
     *   }
     * })
    **/
    count<T extends HabitacionCountArgs>(
      args?: Subset<T, HabitacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Habitacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HabitacionAggregateArgs>(args: Subset<T, HabitacionAggregateArgs>): Prisma.PrismaPromise<GetHabitacionAggregateType<T>>

    /**
     * Group by Habitacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HabitacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitacionGroupByArgs['orderBy'] }
        : { orderBy?: HabitacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HabitacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Habitacion model
   */
  readonly fields: HabitacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Habitacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipoHabitacion<T extends TipoHabitacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoHabitacionDefaultArgs<ExtArgs>>): Prisma__TipoHabitacionClient<$Result.GetResult<Prisma.$TipoHabitacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingresos<T extends Habitacion$ingresosArgs<ExtArgs> = {}>(args?: Subset<T, Habitacion$ingresosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Habitacion model
   */
  interface HabitacionFieldRefs {
    readonly id_habitacion: FieldRef<"Habitacion", 'Int'>
    readonly numero: FieldRef<"Habitacion", 'String'>
    readonly fk_tipo_habitacion: FieldRef<"Habitacion", 'Int'>
    readonly piso: FieldRef<"Habitacion", 'String'>
    readonly estado: FieldRef<"Habitacion", 'String'>
    readonly activo: FieldRef<"Habitacion", 'Boolean'>
    readonly created_at: FieldRef<"Habitacion", 'DateTime'>
    readonly updated_at: FieldRef<"Habitacion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Habitacion findUnique
   */
  export type HabitacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    /**
     * Filter, which Habitacion to fetch.
     */
    where: HabitacionWhereUniqueInput
  }

  /**
   * Habitacion findUniqueOrThrow
   */
  export type HabitacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    /**
     * Filter, which Habitacion to fetch.
     */
    where: HabitacionWhereUniqueInput
  }

  /**
   * Habitacion findFirst
   */
  export type HabitacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    /**
     * Filter, which Habitacion to fetch.
     */
    where?: HabitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habitacions to fetch.
     */
    orderBy?: HabitacionOrderByWithRelationInput | HabitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habitacions.
     */
    cursor?: HabitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habitacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habitacions.
     */
    distinct?: HabitacionScalarFieldEnum | HabitacionScalarFieldEnum[]
  }

  /**
   * Habitacion findFirstOrThrow
   */
  export type HabitacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    /**
     * Filter, which Habitacion to fetch.
     */
    where?: HabitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habitacions to fetch.
     */
    orderBy?: HabitacionOrderByWithRelationInput | HabitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habitacions.
     */
    cursor?: HabitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habitacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habitacions.
     */
    distinct?: HabitacionScalarFieldEnum | HabitacionScalarFieldEnum[]
  }

  /**
   * Habitacion findMany
   */
  export type HabitacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    /**
     * Filter, which Habitacions to fetch.
     */
    where?: HabitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habitacions to fetch.
     */
    orderBy?: HabitacionOrderByWithRelationInput | HabitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Habitacions.
     */
    cursor?: HabitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habitacions.
     */
    skip?: number
    distinct?: HabitacionScalarFieldEnum | HabitacionScalarFieldEnum[]
  }

  /**
   * Habitacion create
   */
  export type HabitacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Habitacion.
     */
    data: XOR<HabitacionCreateInput, HabitacionUncheckedCreateInput>
  }

  /**
   * Habitacion createMany
   */
  export type HabitacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Habitacions.
     */
    data: HabitacionCreateManyInput | HabitacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Habitacion createManyAndReturn
   */
  export type HabitacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * The data used to create many Habitacions.
     */
    data: HabitacionCreateManyInput | HabitacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Habitacion update
   */
  export type HabitacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Habitacion.
     */
    data: XOR<HabitacionUpdateInput, HabitacionUncheckedUpdateInput>
    /**
     * Choose, which Habitacion to update.
     */
    where: HabitacionWhereUniqueInput
  }

  /**
   * Habitacion updateMany
   */
  export type HabitacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Habitacions.
     */
    data: XOR<HabitacionUpdateManyMutationInput, HabitacionUncheckedUpdateManyInput>
    /**
     * Filter which Habitacions to update
     */
    where?: HabitacionWhereInput
    /**
     * Limit how many Habitacions to update.
     */
    limit?: number
  }

  /**
   * Habitacion updateManyAndReturn
   */
  export type HabitacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * The data used to update Habitacions.
     */
    data: XOR<HabitacionUpdateManyMutationInput, HabitacionUncheckedUpdateManyInput>
    /**
     * Filter which Habitacions to update
     */
    where?: HabitacionWhereInput
    /**
     * Limit how many Habitacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Habitacion upsert
   */
  export type HabitacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Habitacion to update in case it exists.
     */
    where: HabitacionWhereUniqueInput
    /**
     * In case the Habitacion found by the `where` argument doesn't exist, create a new Habitacion with this data.
     */
    create: XOR<HabitacionCreateInput, HabitacionUncheckedCreateInput>
    /**
     * In case the Habitacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitacionUpdateInput, HabitacionUncheckedUpdateInput>
  }

  /**
   * Habitacion delete
   */
  export type HabitacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    /**
     * Filter which Habitacion to delete.
     */
    where: HabitacionWhereUniqueInput
  }

  /**
   * Habitacion deleteMany
   */
  export type HabitacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habitacions to delete
     */
    where?: HabitacionWhereInput
    /**
     * Limit how many Habitacions to delete.
     */
    limit?: number
  }

  /**
   * Habitacion.ingresos
   */
  export type Habitacion$ingresosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingreso
     */
    select?: IngresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingreso
     */
    omit?: IngresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngresoInclude<ExtArgs> | null
    where?: IngresoWhereInput
    orderBy?: IngresoOrderByWithRelationInput | IngresoOrderByWithRelationInput[]
    cursor?: IngresoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngresoScalarFieldEnum | IngresoScalarFieldEnum[]
  }

  /**
   * Habitacion without action
   */
  export type HabitacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
  }


  /**
   * Model Reserva
   */

  export type AggregateReserva = {
    _count: ReservaCountAggregateOutputType | null
    _avg: ReservaAvgAggregateOutputType | null
    _sum: ReservaSumAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  export type ReservaAvgAggregateOutputType = {
    id_reserva: number | null
    fk_huesped: number | null
    fk_tipo_habitacion: number | null
    fk_usuario: number | null
  }

  export type ReservaSumAggregateOutputType = {
    id_reserva: number | null
    fk_huesped: number | null
    fk_tipo_habitacion: number | null
    fk_usuario: number | null
  }

  export type ReservaMinAggregateOutputType = {
    id_reserva: number | null
    fk_huesped: number | null
    fk_tipo_habitacion: number | null
    check_in: Date | null
    check_out: Date | null
    estado: string | null
    fk_usuario: number | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReservaMaxAggregateOutputType = {
    id_reserva: number | null
    fk_huesped: number | null
    fk_tipo_habitacion: number | null
    check_in: Date | null
    check_out: Date | null
    estado: string | null
    fk_usuario: number | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReservaCountAggregateOutputType = {
    id_reserva: number
    fk_huesped: number
    fk_tipo_habitacion: number
    check_in: number
    check_out: number
    estado: number
    fk_usuario: number
    activo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ReservaAvgAggregateInputType = {
    id_reserva?: true
    fk_huesped?: true
    fk_tipo_habitacion?: true
    fk_usuario?: true
  }

  export type ReservaSumAggregateInputType = {
    id_reserva?: true
    fk_huesped?: true
    fk_tipo_habitacion?: true
    fk_usuario?: true
  }

  export type ReservaMinAggregateInputType = {
    id_reserva?: true
    fk_huesped?: true
    fk_tipo_habitacion?: true
    check_in?: true
    check_out?: true
    estado?: true
    fk_usuario?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type ReservaMaxAggregateInputType = {
    id_reserva?: true
    fk_huesped?: true
    fk_tipo_habitacion?: true
    check_in?: true
    check_out?: true
    estado?: true
    fk_usuario?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type ReservaCountAggregateInputType = {
    id_reserva?: true
    fk_huesped?: true
    fk_tipo_habitacion?: true
    check_in?: true
    check_out?: true
    estado?: true
    fk_usuario?: true
    activo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ReservaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reserva to aggregate.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservas
    **/
    _count?: true | ReservaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservaMaxAggregateInputType
  }

  export type GetReservaAggregateType<T extends ReservaAggregateArgs> = {
        [P in keyof T & keyof AggregateReserva]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReserva[P]>
      : GetScalarType<T[P], AggregateReserva[P]>
  }




  export type ReservaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithAggregationInput | ReservaOrderByWithAggregationInput[]
    by: ReservaScalarFieldEnum[] | ReservaScalarFieldEnum
    having?: ReservaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservaCountAggregateInputType | true
    _avg?: ReservaAvgAggregateInputType
    _sum?: ReservaSumAggregateInputType
    _min?: ReservaMinAggregateInputType
    _max?: ReservaMaxAggregateInputType
  }

  export type ReservaGroupByOutputType = {
    id_reserva: number
    fk_huesped: number
    fk_tipo_habitacion: number
    check_in: Date
    check_out: Date
    estado: string
    fk_usuario: number
    activo: boolean
    created_at: Date
    updated_at: Date
    _count: ReservaCountAggregateOutputType | null
    _avg: ReservaAvgAggregateOutputType | null
    _sum: ReservaSumAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  type GetReservaGroupByPayload<T extends ReservaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservaGroupByOutputType[P]>
            : GetScalarType<T[P], ReservaGroupByOutputType[P]>
        }
      >
    >


  export type ReservaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reserva?: boolean
    fk_huesped?: boolean
    fk_tipo_habitacion?: boolean
    check_in?: boolean
    check_out?: boolean
    estado?: boolean
    fk_usuario?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    huesped?: boolean | HuespedDefaultArgs<ExtArgs>
    tipoHabitacion?: boolean | TipoHabitacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ingreso?: boolean | Reserva$ingresoArgs<ExtArgs>
    _count?: boolean | ReservaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type ReservaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reserva?: boolean
    fk_huesped?: boolean
    fk_tipo_habitacion?: boolean
    check_in?: boolean
    check_out?: boolean
    estado?: boolean
    fk_usuario?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    huesped?: boolean | HuespedDefaultArgs<ExtArgs>
    tipoHabitacion?: boolean | TipoHabitacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type ReservaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reserva?: boolean
    fk_huesped?: boolean
    fk_tipo_habitacion?: boolean
    check_in?: boolean
    check_out?: boolean
    estado?: boolean
    fk_usuario?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    huesped?: boolean | HuespedDefaultArgs<ExtArgs>
    tipoHabitacion?: boolean | TipoHabitacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type ReservaSelectScalar = {
    id_reserva?: boolean
    fk_huesped?: boolean
    fk_tipo_habitacion?: boolean
    check_in?: boolean
    check_out?: boolean
    estado?: boolean
    fk_usuario?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ReservaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_reserva" | "fk_huesped" | "fk_tipo_habitacion" | "check_in" | "check_out" | "estado" | "fk_usuario" | "activo" | "created_at" | "updated_at", ExtArgs["result"]["reserva"]>
  export type ReservaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    huesped?: boolean | HuespedDefaultArgs<ExtArgs>
    tipoHabitacion?: boolean | TipoHabitacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ingreso?: boolean | Reserva$ingresoArgs<ExtArgs>
    _count?: boolean | ReservaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReservaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    huesped?: boolean | HuespedDefaultArgs<ExtArgs>
    tipoHabitacion?: boolean | TipoHabitacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ReservaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    huesped?: boolean | HuespedDefaultArgs<ExtArgs>
    tipoHabitacion?: boolean | TipoHabitacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ReservaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reserva"
    objects: {
      huesped: Prisma.$HuespedPayload<ExtArgs>
      tipoHabitacion: Prisma.$TipoHabitacionPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      ingreso: Prisma.$IngresoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_reserva: number
      fk_huesped: number
      fk_tipo_habitacion: number
      check_in: Date
      check_out: Date
      estado: string
      fk_usuario: number
      activo: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["reserva"]>
    composites: {}
  }

  type ReservaGetPayload<S extends boolean | null | undefined | ReservaDefaultArgs> = $Result.GetResult<Prisma.$ReservaPayload, S>

  type ReservaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservaCountAggregateInputType | true
    }

  export interface ReservaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reserva'], meta: { name: 'Reserva' } }
    /**
     * Find zero or one Reserva that matches the filter.
     * @param {ReservaFindUniqueArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservaFindUniqueArgs>(args: SelectSubset<T, ReservaFindUniqueArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reserva that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservaFindUniqueOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservaFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindFirstArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservaFindFirstArgs>(args?: SelectSubset<T, ReservaFindFirstArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindFirstOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservaFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservas
     * const reservas = await prisma.reserva.findMany()
     * 
     * // Get first 10 Reservas
     * const reservas = await prisma.reserva.findMany({ take: 10 })
     * 
     * // Only select the `id_reserva`
     * const reservaWithId_reservaOnly = await prisma.reserva.findMany({ select: { id_reserva: true } })
     * 
     */
    findMany<T extends ReservaFindManyArgs>(args?: SelectSubset<T, ReservaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reserva.
     * @param {ReservaCreateArgs} args - Arguments to create a Reserva.
     * @example
     * // Create one Reserva
     * const Reserva = await prisma.reserva.create({
     *   data: {
     *     // ... data to create a Reserva
     *   }
     * })
     * 
     */
    create<T extends ReservaCreateArgs>(args: SelectSubset<T, ReservaCreateArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservas.
     * @param {ReservaCreateManyArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reserva = await prisma.reserva.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservaCreateManyArgs>(args?: SelectSubset<T, ReservaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservas and returns the data saved in the database.
     * @param {ReservaCreateManyAndReturnArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reserva = await prisma.reserva.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservas and only return the `id_reserva`
     * const reservaWithId_reservaOnly = await prisma.reserva.createManyAndReturn({
     *   select: { id_reserva: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservaCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reserva.
     * @param {ReservaDeleteArgs} args - Arguments to delete one Reserva.
     * @example
     * // Delete one Reserva
     * const Reserva = await prisma.reserva.delete({
     *   where: {
     *     // ... filter to delete one Reserva
     *   }
     * })
     * 
     */
    delete<T extends ReservaDeleteArgs>(args: SelectSubset<T, ReservaDeleteArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reserva.
     * @param {ReservaUpdateArgs} args - Arguments to update one Reserva.
     * @example
     * // Update one Reserva
     * const reserva = await prisma.reserva.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservaUpdateArgs>(args: SelectSubset<T, ReservaUpdateArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservas.
     * @param {ReservaDeleteManyArgs} args - Arguments to filter Reservas to delete.
     * @example
     * // Delete a few Reservas
     * const { count } = await prisma.reserva.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservaDeleteManyArgs>(args?: SelectSubset<T, ReservaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservas
     * const reserva = await prisma.reserva.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservaUpdateManyArgs>(args: SelectSubset<T, ReservaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas and returns the data updated in the database.
     * @param {ReservaUpdateManyAndReturnArgs} args - Arguments to update many Reservas.
     * @example
     * // Update many Reservas
     * const reserva = await prisma.reserva.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservas and only return the `id_reserva`
     * const reservaWithId_reservaOnly = await prisma.reserva.updateManyAndReturn({
     *   select: { id_reserva: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReservaUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reserva.
     * @param {ReservaUpsertArgs} args - Arguments to update or create a Reserva.
     * @example
     * // Update or create a Reserva
     * const reserva = await prisma.reserva.upsert({
     *   create: {
     *     // ... data to create a Reserva
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reserva we want to update
     *   }
     * })
     */
    upsert<T extends ReservaUpsertArgs>(args: SelectSubset<T, ReservaUpsertArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaCountArgs} args - Arguments to filter Reservas to count.
     * @example
     * // Count the number of Reservas
     * const count = await prisma.reserva.count({
     *   where: {
     *     // ... the filter for the Reservas we want to count
     *   }
     * })
    **/
    count<T extends ReservaCountArgs>(
      args?: Subset<T, ReservaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservaAggregateArgs>(args: Subset<T, ReservaAggregateArgs>): Prisma.PrismaPromise<GetReservaAggregateType<T>>

    /**
     * Group by Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservaGroupByArgs['orderBy'] }
        : { orderBy?: ReservaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reserva model
   */
  readonly fields: ReservaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reserva.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    huesped<T extends HuespedDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HuespedDefaultArgs<ExtArgs>>): Prisma__HuespedClient<$Result.GetResult<Prisma.$HuespedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tipoHabitacion<T extends TipoHabitacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoHabitacionDefaultArgs<ExtArgs>>): Prisma__TipoHabitacionClient<$Result.GetResult<Prisma.$TipoHabitacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingreso<T extends Reserva$ingresoArgs<ExtArgs> = {}>(args?: Subset<T, Reserva$ingresoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reserva model
   */
  interface ReservaFieldRefs {
    readonly id_reserva: FieldRef<"Reserva", 'Int'>
    readonly fk_huesped: FieldRef<"Reserva", 'Int'>
    readonly fk_tipo_habitacion: FieldRef<"Reserva", 'Int'>
    readonly check_in: FieldRef<"Reserva", 'DateTime'>
    readonly check_out: FieldRef<"Reserva", 'DateTime'>
    readonly estado: FieldRef<"Reserva", 'String'>
    readonly fk_usuario: FieldRef<"Reserva", 'Int'>
    readonly activo: FieldRef<"Reserva", 'Boolean'>
    readonly created_at: FieldRef<"Reserva", 'DateTime'>
    readonly updated_at: FieldRef<"Reserva", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reserva findUnique
   */
  export type ReservaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva findUniqueOrThrow
   */
  export type ReservaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva findFirst
   */
  export type ReservaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva findFirstOrThrow
   */
  export type ReservaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva findMany
   */
  export type ReservaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reservas to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva create
   */
  export type ReservaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The data needed to create a Reserva.
     */
    data: XOR<ReservaCreateInput, ReservaUncheckedCreateInput>
  }

  /**
   * Reserva createMany
   */
  export type ReservaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservas.
     */
    data: ReservaCreateManyInput | ReservaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reserva createManyAndReturn
   */
  export type ReservaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * The data used to create many Reservas.
     */
    data: ReservaCreateManyInput | ReservaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reserva update
   */
  export type ReservaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The data needed to update a Reserva.
     */
    data: XOR<ReservaUpdateInput, ReservaUncheckedUpdateInput>
    /**
     * Choose, which Reserva to update.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva updateMany
   */
  export type ReservaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservas.
     */
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyInput>
    /**
     * Filter which Reservas to update
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to update.
     */
    limit?: number
  }

  /**
   * Reserva updateManyAndReturn
   */
  export type ReservaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * The data used to update Reservas.
     */
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyInput>
    /**
     * Filter which Reservas to update
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reserva upsert
   */
  export type ReservaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The filter to search for the Reserva to update in case it exists.
     */
    where: ReservaWhereUniqueInput
    /**
     * In case the Reserva found by the `where` argument doesn't exist, create a new Reserva with this data.
     */
    create: XOR<ReservaCreateInput, ReservaUncheckedCreateInput>
    /**
     * In case the Reserva was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservaUpdateInput, ReservaUncheckedUpdateInput>
  }

  /**
   * Reserva delete
   */
  export type ReservaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter which Reserva to delete.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva deleteMany
   */
  export type ReservaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservas to delete
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to delete.
     */
    limit?: number
  }

  /**
   * Reserva.ingreso
   */
  export type Reserva$ingresoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingreso
     */
    select?: IngresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingreso
     */
    omit?: IngresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngresoInclude<ExtArgs> | null
    where?: IngresoWhereInput
    orderBy?: IngresoOrderByWithRelationInput | IngresoOrderByWithRelationInput[]
    cursor?: IngresoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngresoScalarFieldEnum | IngresoScalarFieldEnum[]
  }

  /**
   * Reserva without action
   */
  export type ReservaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
  }


  /**
   * Model Ingreso
   */

  export type AggregateIngreso = {
    _count: IngresoCountAggregateOutputType | null
    _avg: IngresoAvgAggregateOutputType | null
    _sum: IngresoSumAggregateOutputType | null
    _min: IngresoMinAggregateOutputType | null
    _max: IngresoMaxAggregateOutputType | null
  }

  export type IngresoAvgAggregateOutputType = {
    id_ingreso: number | null
    fk_reserva: number | null
    fk_habitacion: number | null
    fk_huesped: number | null
    fk_tarifa: number | null
    fk_usuario: number | null
  }

  export type IngresoSumAggregateOutputType = {
    id_ingreso: number | null
    fk_reserva: number | null
    fk_habitacion: number | null
    fk_huesped: number | null
    fk_tarifa: number | null
    fk_usuario: number | null
  }

  export type IngresoMinAggregateOutputType = {
    id_ingreso: number | null
    fk_reserva: number | null
    fk_habitacion: number | null
    fk_huesped: number | null
    fk_tarifa: number | null
    fecha_ingreso: Date | null
    estado: string | null
    fk_usuario: number | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type IngresoMaxAggregateOutputType = {
    id_ingreso: number | null
    fk_reserva: number | null
    fk_habitacion: number | null
    fk_huesped: number | null
    fk_tarifa: number | null
    fecha_ingreso: Date | null
    estado: string | null
    fk_usuario: number | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type IngresoCountAggregateOutputType = {
    id_ingreso: number
    fk_reserva: number
    fk_habitacion: number
    fk_huesped: number
    fk_tarifa: number
    fecha_ingreso: number
    estado: number
    fk_usuario: number
    activo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type IngresoAvgAggregateInputType = {
    id_ingreso?: true
    fk_reserva?: true
    fk_habitacion?: true
    fk_huesped?: true
    fk_tarifa?: true
    fk_usuario?: true
  }

  export type IngresoSumAggregateInputType = {
    id_ingreso?: true
    fk_reserva?: true
    fk_habitacion?: true
    fk_huesped?: true
    fk_tarifa?: true
    fk_usuario?: true
  }

  export type IngresoMinAggregateInputType = {
    id_ingreso?: true
    fk_reserva?: true
    fk_habitacion?: true
    fk_huesped?: true
    fk_tarifa?: true
    fecha_ingreso?: true
    estado?: true
    fk_usuario?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type IngresoMaxAggregateInputType = {
    id_ingreso?: true
    fk_reserva?: true
    fk_habitacion?: true
    fk_huesped?: true
    fk_tarifa?: true
    fecha_ingreso?: true
    estado?: true
    fk_usuario?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type IngresoCountAggregateInputType = {
    id_ingreso?: true
    fk_reserva?: true
    fk_habitacion?: true
    fk_huesped?: true
    fk_tarifa?: true
    fecha_ingreso?: true
    estado?: true
    fk_usuario?: true
    activo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type IngresoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingreso to aggregate.
     */
    where?: IngresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingresos to fetch.
     */
    orderBy?: IngresoOrderByWithRelationInput | IngresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingresos
    **/
    _count?: true | IngresoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngresoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngresoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngresoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngresoMaxAggregateInputType
  }

  export type GetIngresoAggregateType<T extends IngresoAggregateArgs> = {
        [P in keyof T & keyof AggregateIngreso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngreso[P]>
      : GetScalarType<T[P], AggregateIngreso[P]>
  }




  export type IngresoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngresoWhereInput
    orderBy?: IngresoOrderByWithAggregationInput | IngresoOrderByWithAggregationInput[]
    by: IngresoScalarFieldEnum[] | IngresoScalarFieldEnum
    having?: IngresoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngresoCountAggregateInputType | true
    _avg?: IngresoAvgAggregateInputType
    _sum?: IngresoSumAggregateInputType
    _min?: IngresoMinAggregateInputType
    _max?: IngresoMaxAggregateInputType
  }

  export type IngresoGroupByOutputType = {
    id_ingreso: number
    fk_reserva: number | null
    fk_habitacion: number
    fk_huesped: number
    fk_tarifa: number
    fecha_ingreso: Date
    estado: string
    fk_usuario: number
    activo: boolean
    created_at: Date
    updated_at: Date
    _count: IngresoCountAggregateOutputType | null
    _avg: IngresoAvgAggregateOutputType | null
    _sum: IngresoSumAggregateOutputType | null
    _min: IngresoMinAggregateOutputType | null
    _max: IngresoMaxAggregateOutputType | null
  }

  type GetIngresoGroupByPayload<T extends IngresoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngresoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngresoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngresoGroupByOutputType[P]>
            : GetScalarType<T[P], IngresoGroupByOutputType[P]>
        }
      >
    >


  export type IngresoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ingreso?: boolean
    fk_reserva?: boolean
    fk_habitacion?: boolean
    fk_huesped?: boolean
    fk_tarifa?: boolean
    fecha_ingreso?: boolean
    estado?: boolean
    fk_usuario?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    reserva?: boolean | Ingreso$reservaArgs<ExtArgs>
    habitacion?: boolean | HabitacionDefaultArgs<ExtArgs>
    huesped?: boolean | HuespedDefaultArgs<ExtArgs>
    tarifa?: boolean | TarifaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    huespedesHabitaciones?: boolean | Ingreso$huespedesHabitacionesArgs<ExtArgs>
    cuenta?: boolean | Ingreso$cuentaArgs<ExtArgs>
    _count?: boolean | IngresoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingreso"]>

  export type IngresoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ingreso?: boolean
    fk_reserva?: boolean
    fk_habitacion?: boolean
    fk_huesped?: boolean
    fk_tarifa?: boolean
    fecha_ingreso?: boolean
    estado?: boolean
    fk_usuario?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    reserva?: boolean | Ingreso$reservaArgs<ExtArgs>
    habitacion?: boolean | HabitacionDefaultArgs<ExtArgs>
    huesped?: boolean | HuespedDefaultArgs<ExtArgs>
    tarifa?: boolean | TarifaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingreso"]>

  export type IngresoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ingreso?: boolean
    fk_reserva?: boolean
    fk_habitacion?: boolean
    fk_huesped?: boolean
    fk_tarifa?: boolean
    fecha_ingreso?: boolean
    estado?: boolean
    fk_usuario?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    reserva?: boolean | Ingreso$reservaArgs<ExtArgs>
    habitacion?: boolean | HabitacionDefaultArgs<ExtArgs>
    huesped?: boolean | HuespedDefaultArgs<ExtArgs>
    tarifa?: boolean | TarifaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingreso"]>

  export type IngresoSelectScalar = {
    id_ingreso?: boolean
    fk_reserva?: boolean
    fk_habitacion?: boolean
    fk_huesped?: boolean
    fk_tarifa?: boolean
    fecha_ingreso?: boolean
    estado?: boolean
    fk_usuario?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type IngresoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_ingreso" | "fk_reserva" | "fk_habitacion" | "fk_huesped" | "fk_tarifa" | "fecha_ingreso" | "estado" | "fk_usuario" | "activo" | "created_at" | "updated_at", ExtArgs["result"]["ingreso"]>
  export type IngresoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | Ingreso$reservaArgs<ExtArgs>
    habitacion?: boolean | HabitacionDefaultArgs<ExtArgs>
    huesped?: boolean | HuespedDefaultArgs<ExtArgs>
    tarifa?: boolean | TarifaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    huespedesHabitaciones?: boolean | Ingreso$huespedesHabitacionesArgs<ExtArgs>
    cuenta?: boolean | Ingreso$cuentaArgs<ExtArgs>
    _count?: boolean | IngresoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IngresoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | Ingreso$reservaArgs<ExtArgs>
    habitacion?: boolean | HabitacionDefaultArgs<ExtArgs>
    huesped?: boolean | HuespedDefaultArgs<ExtArgs>
    tarifa?: boolean | TarifaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type IngresoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | Ingreso$reservaArgs<ExtArgs>
    habitacion?: boolean | HabitacionDefaultArgs<ExtArgs>
    huesped?: boolean | HuespedDefaultArgs<ExtArgs>
    tarifa?: boolean | TarifaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $IngresoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingreso"
    objects: {
      reserva: Prisma.$ReservaPayload<ExtArgs> | null
      habitacion: Prisma.$HabitacionPayload<ExtArgs>
      huesped: Prisma.$HuespedPayload<ExtArgs>
      tarifa: Prisma.$TarifaPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      huespedesHabitaciones: Prisma.$HuespedHabitacionPayload<ExtArgs>[]
      cuenta: Prisma.$CuentaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_ingreso: number
      fk_reserva: number | null
      fk_habitacion: number
      fk_huesped: number
      fk_tarifa: number
      fecha_ingreso: Date
      estado: string
      fk_usuario: number
      activo: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["ingreso"]>
    composites: {}
  }

  type IngresoGetPayload<S extends boolean | null | undefined | IngresoDefaultArgs> = $Result.GetResult<Prisma.$IngresoPayload, S>

  type IngresoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngresoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngresoCountAggregateInputType | true
    }

  export interface IngresoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingreso'], meta: { name: 'Ingreso' } }
    /**
     * Find zero or one Ingreso that matches the filter.
     * @param {IngresoFindUniqueArgs} args - Arguments to find a Ingreso
     * @example
     * // Get one Ingreso
     * const ingreso = await prisma.ingreso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngresoFindUniqueArgs>(args: SelectSubset<T, IngresoFindUniqueArgs<ExtArgs>>): Prisma__IngresoClient<$Result.GetResult<Prisma.$IngresoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingreso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngresoFindUniqueOrThrowArgs} args - Arguments to find a Ingreso
     * @example
     * // Get one Ingreso
     * const ingreso = await prisma.ingreso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngresoFindUniqueOrThrowArgs>(args: SelectSubset<T, IngresoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngresoClient<$Result.GetResult<Prisma.$IngresoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingreso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngresoFindFirstArgs} args - Arguments to find a Ingreso
     * @example
     * // Get one Ingreso
     * const ingreso = await prisma.ingreso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngresoFindFirstArgs>(args?: SelectSubset<T, IngresoFindFirstArgs<ExtArgs>>): Prisma__IngresoClient<$Result.GetResult<Prisma.$IngresoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingreso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngresoFindFirstOrThrowArgs} args - Arguments to find a Ingreso
     * @example
     * // Get one Ingreso
     * const ingreso = await prisma.ingreso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngresoFindFirstOrThrowArgs>(args?: SelectSubset<T, IngresoFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngresoClient<$Result.GetResult<Prisma.$IngresoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingresos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngresoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingresos
     * const ingresos = await prisma.ingreso.findMany()
     * 
     * // Get first 10 Ingresos
     * const ingresos = await prisma.ingreso.findMany({ take: 10 })
     * 
     * // Only select the `id_ingreso`
     * const ingresoWithId_ingresoOnly = await prisma.ingreso.findMany({ select: { id_ingreso: true } })
     * 
     */
    findMany<T extends IngresoFindManyArgs>(args?: SelectSubset<T, IngresoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingreso.
     * @param {IngresoCreateArgs} args - Arguments to create a Ingreso.
     * @example
     * // Create one Ingreso
     * const Ingreso = await prisma.ingreso.create({
     *   data: {
     *     // ... data to create a Ingreso
     *   }
     * })
     * 
     */
    create<T extends IngresoCreateArgs>(args: SelectSubset<T, IngresoCreateArgs<ExtArgs>>): Prisma__IngresoClient<$Result.GetResult<Prisma.$IngresoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingresos.
     * @param {IngresoCreateManyArgs} args - Arguments to create many Ingresos.
     * @example
     * // Create many Ingresos
     * const ingreso = await prisma.ingreso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngresoCreateManyArgs>(args?: SelectSubset<T, IngresoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingresos and returns the data saved in the database.
     * @param {IngresoCreateManyAndReturnArgs} args - Arguments to create many Ingresos.
     * @example
     * // Create many Ingresos
     * const ingreso = await prisma.ingreso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingresos and only return the `id_ingreso`
     * const ingresoWithId_ingresoOnly = await prisma.ingreso.createManyAndReturn({
     *   select: { id_ingreso: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngresoCreateManyAndReturnArgs>(args?: SelectSubset<T, IngresoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngresoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingreso.
     * @param {IngresoDeleteArgs} args - Arguments to delete one Ingreso.
     * @example
     * // Delete one Ingreso
     * const Ingreso = await prisma.ingreso.delete({
     *   where: {
     *     // ... filter to delete one Ingreso
     *   }
     * })
     * 
     */
    delete<T extends IngresoDeleteArgs>(args: SelectSubset<T, IngresoDeleteArgs<ExtArgs>>): Prisma__IngresoClient<$Result.GetResult<Prisma.$IngresoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingreso.
     * @param {IngresoUpdateArgs} args - Arguments to update one Ingreso.
     * @example
     * // Update one Ingreso
     * const ingreso = await prisma.ingreso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngresoUpdateArgs>(args: SelectSubset<T, IngresoUpdateArgs<ExtArgs>>): Prisma__IngresoClient<$Result.GetResult<Prisma.$IngresoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingresos.
     * @param {IngresoDeleteManyArgs} args - Arguments to filter Ingresos to delete.
     * @example
     * // Delete a few Ingresos
     * const { count } = await prisma.ingreso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngresoDeleteManyArgs>(args?: SelectSubset<T, IngresoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingresos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngresoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingresos
     * const ingreso = await prisma.ingreso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngresoUpdateManyArgs>(args: SelectSubset<T, IngresoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingresos and returns the data updated in the database.
     * @param {IngresoUpdateManyAndReturnArgs} args - Arguments to update many Ingresos.
     * @example
     * // Update many Ingresos
     * const ingreso = await prisma.ingreso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingresos and only return the `id_ingreso`
     * const ingresoWithId_ingresoOnly = await prisma.ingreso.updateManyAndReturn({
     *   select: { id_ingreso: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IngresoUpdateManyAndReturnArgs>(args: SelectSubset<T, IngresoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngresoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingreso.
     * @param {IngresoUpsertArgs} args - Arguments to update or create a Ingreso.
     * @example
     * // Update or create a Ingreso
     * const ingreso = await prisma.ingreso.upsert({
     *   create: {
     *     // ... data to create a Ingreso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingreso we want to update
     *   }
     * })
     */
    upsert<T extends IngresoUpsertArgs>(args: SelectSubset<T, IngresoUpsertArgs<ExtArgs>>): Prisma__IngresoClient<$Result.GetResult<Prisma.$IngresoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingresos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngresoCountArgs} args - Arguments to filter Ingresos to count.
     * @example
     * // Count the number of Ingresos
     * const count = await prisma.ingreso.count({
     *   where: {
     *     // ... the filter for the Ingresos we want to count
     *   }
     * })
    **/
    count<T extends IngresoCountArgs>(
      args?: Subset<T, IngresoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngresoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingreso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngresoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IngresoAggregateArgs>(args: Subset<T, IngresoAggregateArgs>): Prisma.PrismaPromise<GetIngresoAggregateType<T>>

    /**
     * Group by Ingreso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngresoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IngresoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngresoGroupByArgs['orderBy'] }
        : { orderBy?: IngresoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IngresoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngresoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingreso model
   */
  readonly fields: IngresoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingreso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngresoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reserva<T extends Ingreso$reservaArgs<ExtArgs> = {}>(args?: Subset<T, Ingreso$reservaArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    habitacion<T extends HabitacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HabitacionDefaultArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    huesped<T extends HuespedDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HuespedDefaultArgs<ExtArgs>>): Prisma__HuespedClient<$Result.GetResult<Prisma.$HuespedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tarifa<T extends TarifaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TarifaDefaultArgs<ExtArgs>>): Prisma__TarifaClient<$Result.GetResult<Prisma.$TarifaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    huespedesHabitaciones<T extends Ingreso$huespedesHabitacionesArgs<ExtArgs> = {}>(args?: Subset<T, Ingreso$huespedesHabitacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HuespedHabitacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cuenta<T extends Ingreso$cuentaArgs<ExtArgs> = {}>(args?: Subset<T, Ingreso$cuentaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ingreso model
   */
  interface IngresoFieldRefs {
    readonly id_ingreso: FieldRef<"Ingreso", 'Int'>
    readonly fk_reserva: FieldRef<"Ingreso", 'Int'>
    readonly fk_habitacion: FieldRef<"Ingreso", 'Int'>
    readonly fk_huesped: FieldRef<"Ingreso", 'Int'>
    readonly fk_tarifa: FieldRef<"Ingreso", 'Int'>
    readonly fecha_ingreso: FieldRef<"Ingreso", 'DateTime'>
    readonly estado: FieldRef<"Ingreso", 'String'>
    readonly fk_usuario: FieldRef<"Ingreso", 'Int'>
    readonly activo: FieldRef<"Ingreso", 'Boolean'>
    readonly created_at: FieldRef<"Ingreso", 'DateTime'>
    readonly updated_at: FieldRef<"Ingreso", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ingreso findUnique
   */
  export type IngresoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingreso
     */
    select?: IngresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingreso
     */
    omit?: IngresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngresoInclude<ExtArgs> | null
    /**
     * Filter, which Ingreso to fetch.
     */
    where: IngresoWhereUniqueInput
  }

  /**
   * Ingreso findUniqueOrThrow
   */
  export type IngresoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingreso
     */
    select?: IngresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingreso
     */
    omit?: IngresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngresoInclude<ExtArgs> | null
    /**
     * Filter, which Ingreso to fetch.
     */
    where: IngresoWhereUniqueInput
  }

  /**
   * Ingreso findFirst
   */
  export type IngresoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingreso
     */
    select?: IngresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingreso
     */
    omit?: IngresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngresoInclude<ExtArgs> | null
    /**
     * Filter, which Ingreso to fetch.
     */
    where?: IngresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingresos to fetch.
     */
    orderBy?: IngresoOrderByWithRelationInput | IngresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingresos.
     */
    cursor?: IngresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingresos.
     */
    distinct?: IngresoScalarFieldEnum | IngresoScalarFieldEnum[]
  }

  /**
   * Ingreso findFirstOrThrow
   */
  export type IngresoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingreso
     */
    select?: IngresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingreso
     */
    omit?: IngresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngresoInclude<ExtArgs> | null
    /**
     * Filter, which Ingreso to fetch.
     */
    where?: IngresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingresos to fetch.
     */
    orderBy?: IngresoOrderByWithRelationInput | IngresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingresos.
     */
    cursor?: IngresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingresos.
     */
    distinct?: IngresoScalarFieldEnum | IngresoScalarFieldEnum[]
  }

  /**
   * Ingreso findMany
   */
  export type IngresoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingreso
     */
    select?: IngresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingreso
     */
    omit?: IngresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngresoInclude<ExtArgs> | null
    /**
     * Filter, which Ingresos to fetch.
     */
    where?: IngresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingresos to fetch.
     */
    orderBy?: IngresoOrderByWithRelationInput | IngresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingresos.
     */
    cursor?: IngresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingresos.
     */
    skip?: number
    distinct?: IngresoScalarFieldEnum | IngresoScalarFieldEnum[]
  }

  /**
   * Ingreso create
   */
  export type IngresoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingreso
     */
    select?: IngresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingreso
     */
    omit?: IngresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngresoInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingreso.
     */
    data: XOR<IngresoCreateInput, IngresoUncheckedCreateInput>
  }

  /**
   * Ingreso createMany
   */
  export type IngresoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingresos.
     */
    data: IngresoCreateManyInput | IngresoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingreso createManyAndReturn
   */
  export type IngresoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingreso
     */
    select?: IngresoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingreso
     */
    omit?: IngresoOmit<ExtArgs> | null
    /**
     * The data used to create many Ingresos.
     */
    data: IngresoCreateManyInput | IngresoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngresoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ingreso update
   */
  export type IngresoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingreso
     */
    select?: IngresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingreso
     */
    omit?: IngresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngresoInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingreso.
     */
    data: XOR<IngresoUpdateInput, IngresoUncheckedUpdateInput>
    /**
     * Choose, which Ingreso to update.
     */
    where: IngresoWhereUniqueInput
  }

  /**
   * Ingreso updateMany
   */
  export type IngresoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingresos.
     */
    data: XOR<IngresoUpdateManyMutationInput, IngresoUncheckedUpdateManyInput>
    /**
     * Filter which Ingresos to update
     */
    where?: IngresoWhereInput
    /**
     * Limit how many Ingresos to update.
     */
    limit?: number
  }

  /**
   * Ingreso updateManyAndReturn
   */
  export type IngresoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingreso
     */
    select?: IngresoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingreso
     */
    omit?: IngresoOmit<ExtArgs> | null
    /**
     * The data used to update Ingresos.
     */
    data: XOR<IngresoUpdateManyMutationInput, IngresoUncheckedUpdateManyInput>
    /**
     * Filter which Ingresos to update
     */
    where?: IngresoWhereInput
    /**
     * Limit how many Ingresos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngresoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ingreso upsert
   */
  export type IngresoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingreso
     */
    select?: IngresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingreso
     */
    omit?: IngresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngresoInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingreso to update in case it exists.
     */
    where: IngresoWhereUniqueInput
    /**
     * In case the Ingreso found by the `where` argument doesn't exist, create a new Ingreso with this data.
     */
    create: XOR<IngresoCreateInput, IngresoUncheckedCreateInput>
    /**
     * In case the Ingreso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngresoUpdateInput, IngresoUncheckedUpdateInput>
  }

  /**
   * Ingreso delete
   */
  export type IngresoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingreso
     */
    select?: IngresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingreso
     */
    omit?: IngresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngresoInclude<ExtArgs> | null
    /**
     * Filter which Ingreso to delete.
     */
    where: IngresoWhereUniqueInput
  }

  /**
   * Ingreso deleteMany
   */
  export type IngresoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingresos to delete
     */
    where?: IngresoWhereInput
    /**
     * Limit how many Ingresos to delete.
     */
    limit?: number
  }

  /**
   * Ingreso.reserva
   */
  export type Ingreso$reservaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
  }

  /**
   * Ingreso.huespedesHabitaciones
   */
  export type Ingreso$huespedesHabitacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuespedHabitacion
     */
    select?: HuespedHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HuespedHabitacion
     */
    omit?: HuespedHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HuespedHabitacionInclude<ExtArgs> | null
    where?: HuespedHabitacionWhereInput
    orderBy?: HuespedHabitacionOrderByWithRelationInput | HuespedHabitacionOrderByWithRelationInput[]
    cursor?: HuespedHabitacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HuespedHabitacionScalarFieldEnum | HuespedHabitacionScalarFieldEnum[]
  }

  /**
   * Ingreso.cuenta
   */
  export type Ingreso$cuentaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuenta
     */
    omit?: CuentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null
    where?: CuentaWhereInput
    orderBy?: CuentaOrderByWithRelationInput | CuentaOrderByWithRelationInput[]
    cursor?: CuentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CuentaScalarFieldEnum | CuentaScalarFieldEnum[]
  }

  /**
   * Ingreso without action
   */
  export type IngresoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingreso
     */
    select?: IngresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingreso
     */
    omit?: IngresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngresoInclude<ExtArgs> | null
  }


  /**
   * Model HuespedHabitacion
   */

  export type AggregateHuespedHabitacion = {
    _count: HuespedHabitacionCountAggregateOutputType | null
    _avg: HuespedHabitacionAvgAggregateOutputType | null
    _sum: HuespedHabitacionSumAggregateOutputType | null
    _min: HuespedHabitacionMinAggregateOutputType | null
    _max: HuespedHabitacionMaxAggregateOutputType | null
  }

  export type HuespedHabitacionAvgAggregateOutputType = {
    id_huesped_habitacion: number | null
    fk_huesped: number | null
    fk_ingreso: number | null
  }

  export type HuespedHabitacionSumAggregateOutputType = {
    id_huesped_habitacion: number | null
    fk_huesped: number | null
    fk_ingreso: number | null
  }

  export type HuespedHabitacionMinAggregateOutputType = {
    id_huesped_habitacion: number | null
    fk_huesped: number | null
    fk_ingreso: number | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HuespedHabitacionMaxAggregateOutputType = {
    id_huesped_habitacion: number | null
    fk_huesped: number | null
    fk_ingreso: number | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HuespedHabitacionCountAggregateOutputType = {
    id_huesped_habitacion: number
    fk_huesped: number
    fk_ingreso: number
    activo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type HuespedHabitacionAvgAggregateInputType = {
    id_huesped_habitacion?: true
    fk_huesped?: true
    fk_ingreso?: true
  }

  export type HuespedHabitacionSumAggregateInputType = {
    id_huesped_habitacion?: true
    fk_huesped?: true
    fk_ingreso?: true
  }

  export type HuespedHabitacionMinAggregateInputType = {
    id_huesped_habitacion?: true
    fk_huesped?: true
    fk_ingreso?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type HuespedHabitacionMaxAggregateInputType = {
    id_huesped_habitacion?: true
    fk_huesped?: true
    fk_ingreso?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type HuespedHabitacionCountAggregateInputType = {
    id_huesped_habitacion?: true
    fk_huesped?: true
    fk_ingreso?: true
    activo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type HuespedHabitacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HuespedHabitacion to aggregate.
     */
    where?: HuespedHabitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HuespedHabitacions to fetch.
     */
    orderBy?: HuespedHabitacionOrderByWithRelationInput | HuespedHabitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HuespedHabitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HuespedHabitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HuespedHabitacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HuespedHabitacions
    **/
    _count?: true | HuespedHabitacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HuespedHabitacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HuespedHabitacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HuespedHabitacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HuespedHabitacionMaxAggregateInputType
  }

  export type GetHuespedHabitacionAggregateType<T extends HuespedHabitacionAggregateArgs> = {
        [P in keyof T & keyof AggregateHuespedHabitacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHuespedHabitacion[P]>
      : GetScalarType<T[P], AggregateHuespedHabitacion[P]>
  }




  export type HuespedHabitacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HuespedHabitacionWhereInput
    orderBy?: HuespedHabitacionOrderByWithAggregationInput | HuespedHabitacionOrderByWithAggregationInput[]
    by: HuespedHabitacionScalarFieldEnum[] | HuespedHabitacionScalarFieldEnum
    having?: HuespedHabitacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HuespedHabitacionCountAggregateInputType | true
    _avg?: HuespedHabitacionAvgAggregateInputType
    _sum?: HuespedHabitacionSumAggregateInputType
    _min?: HuespedHabitacionMinAggregateInputType
    _max?: HuespedHabitacionMaxAggregateInputType
  }

  export type HuespedHabitacionGroupByOutputType = {
    id_huesped_habitacion: number
    fk_huesped: number
    fk_ingreso: number
    activo: boolean
    created_at: Date
    updated_at: Date
    _count: HuespedHabitacionCountAggregateOutputType | null
    _avg: HuespedHabitacionAvgAggregateOutputType | null
    _sum: HuespedHabitacionSumAggregateOutputType | null
    _min: HuespedHabitacionMinAggregateOutputType | null
    _max: HuespedHabitacionMaxAggregateOutputType | null
  }

  type GetHuespedHabitacionGroupByPayload<T extends HuespedHabitacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HuespedHabitacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HuespedHabitacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HuespedHabitacionGroupByOutputType[P]>
            : GetScalarType<T[P], HuespedHabitacionGroupByOutputType[P]>
        }
      >
    >


  export type HuespedHabitacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_huesped_habitacion?: boolean
    fk_huesped?: boolean
    fk_ingreso?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    huesped?: boolean | HuespedDefaultArgs<ExtArgs>
    ingreso?: boolean | IngresoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["huespedHabitacion"]>

  export type HuespedHabitacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_huesped_habitacion?: boolean
    fk_huesped?: boolean
    fk_ingreso?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    huesped?: boolean | HuespedDefaultArgs<ExtArgs>
    ingreso?: boolean | IngresoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["huespedHabitacion"]>

  export type HuespedHabitacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_huesped_habitacion?: boolean
    fk_huesped?: boolean
    fk_ingreso?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    huesped?: boolean | HuespedDefaultArgs<ExtArgs>
    ingreso?: boolean | IngresoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["huespedHabitacion"]>

  export type HuespedHabitacionSelectScalar = {
    id_huesped_habitacion?: boolean
    fk_huesped?: boolean
    fk_ingreso?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type HuespedHabitacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_huesped_habitacion" | "fk_huesped" | "fk_ingreso" | "activo" | "created_at" | "updated_at", ExtArgs["result"]["huespedHabitacion"]>
  export type HuespedHabitacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    huesped?: boolean | HuespedDefaultArgs<ExtArgs>
    ingreso?: boolean | IngresoDefaultArgs<ExtArgs>
  }
  export type HuespedHabitacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    huesped?: boolean | HuespedDefaultArgs<ExtArgs>
    ingreso?: boolean | IngresoDefaultArgs<ExtArgs>
  }
  export type HuespedHabitacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    huesped?: boolean | HuespedDefaultArgs<ExtArgs>
    ingreso?: boolean | IngresoDefaultArgs<ExtArgs>
  }

  export type $HuespedHabitacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HuespedHabitacion"
    objects: {
      huesped: Prisma.$HuespedPayload<ExtArgs>
      ingreso: Prisma.$IngresoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_huesped_habitacion: number
      fk_huesped: number
      fk_ingreso: number
      activo: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["huespedHabitacion"]>
    composites: {}
  }

  type HuespedHabitacionGetPayload<S extends boolean | null | undefined | HuespedHabitacionDefaultArgs> = $Result.GetResult<Prisma.$HuespedHabitacionPayload, S>

  type HuespedHabitacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HuespedHabitacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HuespedHabitacionCountAggregateInputType | true
    }

  export interface HuespedHabitacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HuespedHabitacion'], meta: { name: 'HuespedHabitacion' } }
    /**
     * Find zero or one HuespedHabitacion that matches the filter.
     * @param {HuespedHabitacionFindUniqueArgs} args - Arguments to find a HuespedHabitacion
     * @example
     * // Get one HuespedHabitacion
     * const huespedHabitacion = await prisma.huespedHabitacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HuespedHabitacionFindUniqueArgs>(args: SelectSubset<T, HuespedHabitacionFindUniqueArgs<ExtArgs>>): Prisma__HuespedHabitacionClient<$Result.GetResult<Prisma.$HuespedHabitacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HuespedHabitacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HuespedHabitacionFindUniqueOrThrowArgs} args - Arguments to find a HuespedHabitacion
     * @example
     * // Get one HuespedHabitacion
     * const huespedHabitacion = await prisma.huespedHabitacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HuespedHabitacionFindUniqueOrThrowArgs>(args: SelectSubset<T, HuespedHabitacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HuespedHabitacionClient<$Result.GetResult<Prisma.$HuespedHabitacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HuespedHabitacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuespedHabitacionFindFirstArgs} args - Arguments to find a HuespedHabitacion
     * @example
     * // Get one HuespedHabitacion
     * const huespedHabitacion = await prisma.huespedHabitacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HuespedHabitacionFindFirstArgs>(args?: SelectSubset<T, HuespedHabitacionFindFirstArgs<ExtArgs>>): Prisma__HuespedHabitacionClient<$Result.GetResult<Prisma.$HuespedHabitacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HuespedHabitacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuespedHabitacionFindFirstOrThrowArgs} args - Arguments to find a HuespedHabitacion
     * @example
     * // Get one HuespedHabitacion
     * const huespedHabitacion = await prisma.huespedHabitacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HuespedHabitacionFindFirstOrThrowArgs>(args?: SelectSubset<T, HuespedHabitacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__HuespedHabitacionClient<$Result.GetResult<Prisma.$HuespedHabitacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HuespedHabitacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuespedHabitacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HuespedHabitacions
     * const huespedHabitacions = await prisma.huespedHabitacion.findMany()
     * 
     * // Get first 10 HuespedHabitacions
     * const huespedHabitacions = await prisma.huespedHabitacion.findMany({ take: 10 })
     * 
     * // Only select the `id_huesped_habitacion`
     * const huespedHabitacionWithId_huesped_habitacionOnly = await prisma.huespedHabitacion.findMany({ select: { id_huesped_habitacion: true } })
     * 
     */
    findMany<T extends HuespedHabitacionFindManyArgs>(args?: SelectSubset<T, HuespedHabitacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HuespedHabitacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HuespedHabitacion.
     * @param {HuespedHabitacionCreateArgs} args - Arguments to create a HuespedHabitacion.
     * @example
     * // Create one HuespedHabitacion
     * const HuespedHabitacion = await prisma.huespedHabitacion.create({
     *   data: {
     *     // ... data to create a HuespedHabitacion
     *   }
     * })
     * 
     */
    create<T extends HuespedHabitacionCreateArgs>(args: SelectSubset<T, HuespedHabitacionCreateArgs<ExtArgs>>): Prisma__HuespedHabitacionClient<$Result.GetResult<Prisma.$HuespedHabitacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HuespedHabitacions.
     * @param {HuespedHabitacionCreateManyArgs} args - Arguments to create many HuespedHabitacions.
     * @example
     * // Create many HuespedHabitacions
     * const huespedHabitacion = await prisma.huespedHabitacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HuespedHabitacionCreateManyArgs>(args?: SelectSubset<T, HuespedHabitacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HuespedHabitacions and returns the data saved in the database.
     * @param {HuespedHabitacionCreateManyAndReturnArgs} args - Arguments to create many HuespedHabitacions.
     * @example
     * // Create many HuespedHabitacions
     * const huespedHabitacion = await prisma.huespedHabitacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HuespedHabitacions and only return the `id_huesped_habitacion`
     * const huespedHabitacionWithId_huesped_habitacionOnly = await prisma.huespedHabitacion.createManyAndReturn({
     *   select: { id_huesped_habitacion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HuespedHabitacionCreateManyAndReturnArgs>(args?: SelectSubset<T, HuespedHabitacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HuespedHabitacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HuespedHabitacion.
     * @param {HuespedHabitacionDeleteArgs} args - Arguments to delete one HuespedHabitacion.
     * @example
     * // Delete one HuespedHabitacion
     * const HuespedHabitacion = await prisma.huespedHabitacion.delete({
     *   where: {
     *     // ... filter to delete one HuespedHabitacion
     *   }
     * })
     * 
     */
    delete<T extends HuespedHabitacionDeleteArgs>(args: SelectSubset<T, HuespedHabitacionDeleteArgs<ExtArgs>>): Prisma__HuespedHabitacionClient<$Result.GetResult<Prisma.$HuespedHabitacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HuespedHabitacion.
     * @param {HuespedHabitacionUpdateArgs} args - Arguments to update one HuespedHabitacion.
     * @example
     * // Update one HuespedHabitacion
     * const huespedHabitacion = await prisma.huespedHabitacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HuespedHabitacionUpdateArgs>(args: SelectSubset<T, HuespedHabitacionUpdateArgs<ExtArgs>>): Prisma__HuespedHabitacionClient<$Result.GetResult<Prisma.$HuespedHabitacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HuespedHabitacions.
     * @param {HuespedHabitacionDeleteManyArgs} args - Arguments to filter HuespedHabitacions to delete.
     * @example
     * // Delete a few HuespedHabitacions
     * const { count } = await prisma.huespedHabitacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HuespedHabitacionDeleteManyArgs>(args?: SelectSubset<T, HuespedHabitacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HuespedHabitacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuespedHabitacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HuespedHabitacions
     * const huespedHabitacion = await prisma.huespedHabitacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HuespedHabitacionUpdateManyArgs>(args: SelectSubset<T, HuespedHabitacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HuespedHabitacions and returns the data updated in the database.
     * @param {HuespedHabitacionUpdateManyAndReturnArgs} args - Arguments to update many HuespedHabitacions.
     * @example
     * // Update many HuespedHabitacions
     * const huespedHabitacion = await prisma.huespedHabitacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HuespedHabitacions and only return the `id_huesped_habitacion`
     * const huespedHabitacionWithId_huesped_habitacionOnly = await prisma.huespedHabitacion.updateManyAndReturn({
     *   select: { id_huesped_habitacion: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HuespedHabitacionUpdateManyAndReturnArgs>(args: SelectSubset<T, HuespedHabitacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HuespedHabitacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HuespedHabitacion.
     * @param {HuespedHabitacionUpsertArgs} args - Arguments to update or create a HuespedHabitacion.
     * @example
     * // Update or create a HuespedHabitacion
     * const huespedHabitacion = await prisma.huespedHabitacion.upsert({
     *   create: {
     *     // ... data to create a HuespedHabitacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HuespedHabitacion we want to update
     *   }
     * })
     */
    upsert<T extends HuespedHabitacionUpsertArgs>(args: SelectSubset<T, HuespedHabitacionUpsertArgs<ExtArgs>>): Prisma__HuespedHabitacionClient<$Result.GetResult<Prisma.$HuespedHabitacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HuespedHabitacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuespedHabitacionCountArgs} args - Arguments to filter HuespedHabitacions to count.
     * @example
     * // Count the number of HuespedHabitacions
     * const count = await prisma.huespedHabitacion.count({
     *   where: {
     *     // ... the filter for the HuespedHabitacions we want to count
     *   }
     * })
    **/
    count<T extends HuespedHabitacionCountArgs>(
      args?: Subset<T, HuespedHabitacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HuespedHabitacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HuespedHabitacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuespedHabitacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HuespedHabitacionAggregateArgs>(args: Subset<T, HuespedHabitacionAggregateArgs>): Prisma.PrismaPromise<GetHuespedHabitacionAggregateType<T>>

    /**
     * Group by HuespedHabitacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HuespedHabitacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HuespedHabitacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HuespedHabitacionGroupByArgs['orderBy'] }
        : { orderBy?: HuespedHabitacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HuespedHabitacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHuespedHabitacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HuespedHabitacion model
   */
  readonly fields: HuespedHabitacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HuespedHabitacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HuespedHabitacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    huesped<T extends HuespedDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HuespedDefaultArgs<ExtArgs>>): Prisma__HuespedClient<$Result.GetResult<Prisma.$HuespedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingreso<T extends IngresoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngresoDefaultArgs<ExtArgs>>): Prisma__IngresoClient<$Result.GetResult<Prisma.$IngresoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HuespedHabitacion model
   */
  interface HuespedHabitacionFieldRefs {
    readonly id_huesped_habitacion: FieldRef<"HuespedHabitacion", 'Int'>
    readonly fk_huesped: FieldRef<"HuespedHabitacion", 'Int'>
    readonly fk_ingreso: FieldRef<"HuespedHabitacion", 'Int'>
    readonly activo: FieldRef<"HuespedHabitacion", 'Boolean'>
    readonly created_at: FieldRef<"HuespedHabitacion", 'DateTime'>
    readonly updated_at: FieldRef<"HuespedHabitacion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HuespedHabitacion findUnique
   */
  export type HuespedHabitacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuespedHabitacion
     */
    select?: HuespedHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HuespedHabitacion
     */
    omit?: HuespedHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HuespedHabitacionInclude<ExtArgs> | null
    /**
     * Filter, which HuespedHabitacion to fetch.
     */
    where: HuespedHabitacionWhereUniqueInput
  }

  /**
   * HuespedHabitacion findUniqueOrThrow
   */
  export type HuespedHabitacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuespedHabitacion
     */
    select?: HuespedHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HuespedHabitacion
     */
    omit?: HuespedHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HuespedHabitacionInclude<ExtArgs> | null
    /**
     * Filter, which HuespedHabitacion to fetch.
     */
    where: HuespedHabitacionWhereUniqueInput
  }

  /**
   * HuespedHabitacion findFirst
   */
  export type HuespedHabitacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuespedHabitacion
     */
    select?: HuespedHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HuespedHabitacion
     */
    omit?: HuespedHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HuespedHabitacionInclude<ExtArgs> | null
    /**
     * Filter, which HuespedHabitacion to fetch.
     */
    where?: HuespedHabitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HuespedHabitacions to fetch.
     */
    orderBy?: HuespedHabitacionOrderByWithRelationInput | HuespedHabitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HuespedHabitacions.
     */
    cursor?: HuespedHabitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HuespedHabitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HuespedHabitacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HuespedHabitacions.
     */
    distinct?: HuespedHabitacionScalarFieldEnum | HuespedHabitacionScalarFieldEnum[]
  }

  /**
   * HuespedHabitacion findFirstOrThrow
   */
  export type HuespedHabitacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuespedHabitacion
     */
    select?: HuespedHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HuespedHabitacion
     */
    omit?: HuespedHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HuespedHabitacionInclude<ExtArgs> | null
    /**
     * Filter, which HuespedHabitacion to fetch.
     */
    where?: HuespedHabitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HuespedHabitacions to fetch.
     */
    orderBy?: HuespedHabitacionOrderByWithRelationInput | HuespedHabitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HuespedHabitacions.
     */
    cursor?: HuespedHabitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HuespedHabitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HuespedHabitacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HuespedHabitacions.
     */
    distinct?: HuespedHabitacionScalarFieldEnum | HuespedHabitacionScalarFieldEnum[]
  }

  /**
   * HuespedHabitacion findMany
   */
  export type HuespedHabitacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuespedHabitacion
     */
    select?: HuespedHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HuespedHabitacion
     */
    omit?: HuespedHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HuespedHabitacionInclude<ExtArgs> | null
    /**
     * Filter, which HuespedHabitacions to fetch.
     */
    where?: HuespedHabitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HuespedHabitacions to fetch.
     */
    orderBy?: HuespedHabitacionOrderByWithRelationInput | HuespedHabitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HuespedHabitacions.
     */
    cursor?: HuespedHabitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HuespedHabitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HuespedHabitacions.
     */
    skip?: number
    distinct?: HuespedHabitacionScalarFieldEnum | HuespedHabitacionScalarFieldEnum[]
  }

  /**
   * HuespedHabitacion create
   */
  export type HuespedHabitacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuespedHabitacion
     */
    select?: HuespedHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HuespedHabitacion
     */
    omit?: HuespedHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HuespedHabitacionInclude<ExtArgs> | null
    /**
     * The data needed to create a HuespedHabitacion.
     */
    data: XOR<HuespedHabitacionCreateInput, HuespedHabitacionUncheckedCreateInput>
  }

  /**
   * HuespedHabitacion createMany
   */
  export type HuespedHabitacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HuespedHabitacions.
     */
    data: HuespedHabitacionCreateManyInput | HuespedHabitacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HuespedHabitacion createManyAndReturn
   */
  export type HuespedHabitacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuespedHabitacion
     */
    select?: HuespedHabitacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HuespedHabitacion
     */
    omit?: HuespedHabitacionOmit<ExtArgs> | null
    /**
     * The data used to create many HuespedHabitacions.
     */
    data: HuespedHabitacionCreateManyInput | HuespedHabitacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HuespedHabitacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HuespedHabitacion update
   */
  export type HuespedHabitacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuespedHabitacion
     */
    select?: HuespedHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HuespedHabitacion
     */
    omit?: HuespedHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HuespedHabitacionInclude<ExtArgs> | null
    /**
     * The data needed to update a HuespedHabitacion.
     */
    data: XOR<HuespedHabitacionUpdateInput, HuespedHabitacionUncheckedUpdateInput>
    /**
     * Choose, which HuespedHabitacion to update.
     */
    where: HuespedHabitacionWhereUniqueInput
  }

  /**
   * HuespedHabitacion updateMany
   */
  export type HuespedHabitacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HuespedHabitacions.
     */
    data: XOR<HuespedHabitacionUpdateManyMutationInput, HuespedHabitacionUncheckedUpdateManyInput>
    /**
     * Filter which HuespedHabitacions to update
     */
    where?: HuespedHabitacionWhereInput
    /**
     * Limit how many HuespedHabitacions to update.
     */
    limit?: number
  }

  /**
   * HuespedHabitacion updateManyAndReturn
   */
  export type HuespedHabitacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuespedHabitacion
     */
    select?: HuespedHabitacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HuespedHabitacion
     */
    omit?: HuespedHabitacionOmit<ExtArgs> | null
    /**
     * The data used to update HuespedHabitacions.
     */
    data: XOR<HuespedHabitacionUpdateManyMutationInput, HuespedHabitacionUncheckedUpdateManyInput>
    /**
     * Filter which HuespedHabitacions to update
     */
    where?: HuespedHabitacionWhereInput
    /**
     * Limit how many HuespedHabitacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HuespedHabitacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HuespedHabitacion upsert
   */
  export type HuespedHabitacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuespedHabitacion
     */
    select?: HuespedHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HuespedHabitacion
     */
    omit?: HuespedHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HuespedHabitacionInclude<ExtArgs> | null
    /**
     * The filter to search for the HuespedHabitacion to update in case it exists.
     */
    where: HuespedHabitacionWhereUniqueInput
    /**
     * In case the HuespedHabitacion found by the `where` argument doesn't exist, create a new HuespedHabitacion with this data.
     */
    create: XOR<HuespedHabitacionCreateInput, HuespedHabitacionUncheckedCreateInput>
    /**
     * In case the HuespedHabitacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HuespedHabitacionUpdateInput, HuespedHabitacionUncheckedUpdateInput>
  }

  /**
   * HuespedHabitacion delete
   */
  export type HuespedHabitacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuespedHabitacion
     */
    select?: HuespedHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HuespedHabitacion
     */
    omit?: HuespedHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HuespedHabitacionInclude<ExtArgs> | null
    /**
     * Filter which HuespedHabitacion to delete.
     */
    where: HuespedHabitacionWhereUniqueInput
  }

  /**
   * HuespedHabitacion deleteMany
   */
  export type HuespedHabitacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HuespedHabitacions to delete
     */
    where?: HuespedHabitacionWhereInput
    /**
     * Limit how many HuespedHabitacions to delete.
     */
    limit?: number
  }

  /**
   * HuespedHabitacion without action
   */
  export type HuespedHabitacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HuespedHabitacion
     */
    select?: HuespedHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HuespedHabitacion
     */
    omit?: HuespedHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HuespedHabitacionInclude<ExtArgs> | null
  }


  /**
   * Model Cuenta
   */

  export type AggregateCuenta = {
    _count: CuentaCountAggregateOutputType | null
    _avg: CuentaAvgAggregateOutputType | null
    _sum: CuentaSumAggregateOutputType | null
    _min: CuentaMinAggregateOutputType | null
    _max: CuentaMaxAggregateOutputType | null
  }

  export type CuentaAvgAggregateOutputType = {
    id_cuenta: number | null
    fk_ingreso: number | null
  }

  export type CuentaSumAggregateOutputType = {
    id_cuenta: number | null
    fk_ingreso: number | null
  }

  export type CuentaMinAggregateOutputType = {
    id_cuenta: number | null
    fk_ingreso: number | null
    estado: string | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CuentaMaxAggregateOutputType = {
    id_cuenta: number | null
    fk_ingreso: number | null
    estado: string | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CuentaCountAggregateOutputType = {
    id_cuenta: number
    fk_ingreso: number
    estado: number
    activo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CuentaAvgAggregateInputType = {
    id_cuenta?: true
    fk_ingreso?: true
  }

  export type CuentaSumAggregateInputType = {
    id_cuenta?: true
    fk_ingreso?: true
  }

  export type CuentaMinAggregateInputType = {
    id_cuenta?: true
    fk_ingreso?: true
    estado?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type CuentaMaxAggregateInputType = {
    id_cuenta?: true
    fk_ingreso?: true
    estado?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type CuentaCountAggregateInputType = {
    id_cuenta?: true
    fk_ingreso?: true
    estado?: true
    activo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CuentaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cuenta to aggregate.
     */
    where?: CuentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuentas to fetch.
     */
    orderBy?: CuentaOrderByWithRelationInput | CuentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CuentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cuentas
    **/
    _count?: true | CuentaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CuentaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CuentaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CuentaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CuentaMaxAggregateInputType
  }

  export type GetCuentaAggregateType<T extends CuentaAggregateArgs> = {
        [P in keyof T & keyof AggregateCuenta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCuenta[P]>
      : GetScalarType<T[P], AggregateCuenta[P]>
  }




  export type CuentaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CuentaWhereInput
    orderBy?: CuentaOrderByWithAggregationInput | CuentaOrderByWithAggregationInput[]
    by: CuentaScalarFieldEnum[] | CuentaScalarFieldEnum
    having?: CuentaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CuentaCountAggregateInputType | true
    _avg?: CuentaAvgAggregateInputType
    _sum?: CuentaSumAggregateInputType
    _min?: CuentaMinAggregateInputType
    _max?: CuentaMaxAggregateInputType
  }

  export type CuentaGroupByOutputType = {
    id_cuenta: number
    fk_ingreso: number
    estado: string
    activo: boolean
    created_at: Date
    updated_at: Date
    _count: CuentaCountAggregateOutputType | null
    _avg: CuentaAvgAggregateOutputType | null
    _sum: CuentaSumAggregateOutputType | null
    _min: CuentaMinAggregateOutputType | null
    _max: CuentaMaxAggregateOutputType | null
  }

  type GetCuentaGroupByPayload<T extends CuentaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CuentaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CuentaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CuentaGroupByOutputType[P]>
            : GetScalarType<T[P], CuentaGroupByOutputType[P]>
        }
      >
    >


  export type CuentaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cuenta?: boolean
    fk_ingreso?: boolean
    estado?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    ingreso?: boolean | IngresoDefaultArgs<ExtArgs>
    consumos?: boolean | Cuenta$consumosArgs<ExtArgs>
    factura?: boolean | Cuenta$facturaArgs<ExtArgs>
    _count?: boolean | CuentaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cuenta"]>

  export type CuentaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cuenta?: boolean
    fk_ingreso?: boolean
    estado?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    ingreso?: boolean | IngresoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cuenta"]>

  export type CuentaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cuenta?: boolean
    fk_ingreso?: boolean
    estado?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    ingreso?: boolean | IngresoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cuenta"]>

  export type CuentaSelectScalar = {
    id_cuenta?: boolean
    fk_ingreso?: boolean
    estado?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CuentaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_cuenta" | "fk_ingreso" | "estado" | "activo" | "created_at" | "updated_at", ExtArgs["result"]["cuenta"]>
  export type CuentaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingreso?: boolean | IngresoDefaultArgs<ExtArgs>
    consumos?: boolean | Cuenta$consumosArgs<ExtArgs>
    factura?: boolean | Cuenta$facturaArgs<ExtArgs>
    _count?: boolean | CuentaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CuentaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingreso?: boolean | IngresoDefaultArgs<ExtArgs>
  }
  export type CuentaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingreso?: boolean | IngresoDefaultArgs<ExtArgs>
  }

  export type $CuentaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cuenta"
    objects: {
      ingreso: Prisma.$IngresoPayload<ExtArgs>
      consumos: Prisma.$ConsumoPayload<ExtArgs>[]
      factura: Prisma.$FacturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_cuenta: number
      fk_ingreso: number
      estado: string
      activo: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["cuenta"]>
    composites: {}
  }

  type CuentaGetPayload<S extends boolean | null | undefined | CuentaDefaultArgs> = $Result.GetResult<Prisma.$CuentaPayload, S>

  type CuentaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CuentaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CuentaCountAggregateInputType | true
    }

  export interface CuentaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cuenta'], meta: { name: 'Cuenta' } }
    /**
     * Find zero or one Cuenta that matches the filter.
     * @param {CuentaFindUniqueArgs} args - Arguments to find a Cuenta
     * @example
     * // Get one Cuenta
     * const cuenta = await prisma.cuenta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CuentaFindUniqueArgs>(args: SelectSubset<T, CuentaFindUniqueArgs<ExtArgs>>): Prisma__CuentaClient<$Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cuenta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CuentaFindUniqueOrThrowArgs} args - Arguments to find a Cuenta
     * @example
     * // Get one Cuenta
     * const cuenta = await prisma.cuenta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CuentaFindUniqueOrThrowArgs>(args: SelectSubset<T, CuentaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CuentaClient<$Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cuenta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuentaFindFirstArgs} args - Arguments to find a Cuenta
     * @example
     * // Get one Cuenta
     * const cuenta = await prisma.cuenta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CuentaFindFirstArgs>(args?: SelectSubset<T, CuentaFindFirstArgs<ExtArgs>>): Prisma__CuentaClient<$Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cuenta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuentaFindFirstOrThrowArgs} args - Arguments to find a Cuenta
     * @example
     * // Get one Cuenta
     * const cuenta = await prisma.cuenta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CuentaFindFirstOrThrowArgs>(args?: SelectSubset<T, CuentaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CuentaClient<$Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cuentas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuentaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cuentas
     * const cuentas = await prisma.cuenta.findMany()
     * 
     * // Get first 10 Cuentas
     * const cuentas = await prisma.cuenta.findMany({ take: 10 })
     * 
     * // Only select the `id_cuenta`
     * const cuentaWithId_cuentaOnly = await prisma.cuenta.findMany({ select: { id_cuenta: true } })
     * 
     */
    findMany<T extends CuentaFindManyArgs>(args?: SelectSubset<T, CuentaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cuenta.
     * @param {CuentaCreateArgs} args - Arguments to create a Cuenta.
     * @example
     * // Create one Cuenta
     * const Cuenta = await prisma.cuenta.create({
     *   data: {
     *     // ... data to create a Cuenta
     *   }
     * })
     * 
     */
    create<T extends CuentaCreateArgs>(args: SelectSubset<T, CuentaCreateArgs<ExtArgs>>): Prisma__CuentaClient<$Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cuentas.
     * @param {CuentaCreateManyArgs} args - Arguments to create many Cuentas.
     * @example
     * // Create many Cuentas
     * const cuenta = await prisma.cuenta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CuentaCreateManyArgs>(args?: SelectSubset<T, CuentaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cuentas and returns the data saved in the database.
     * @param {CuentaCreateManyAndReturnArgs} args - Arguments to create many Cuentas.
     * @example
     * // Create many Cuentas
     * const cuenta = await prisma.cuenta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cuentas and only return the `id_cuenta`
     * const cuentaWithId_cuentaOnly = await prisma.cuenta.createManyAndReturn({
     *   select: { id_cuenta: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CuentaCreateManyAndReturnArgs>(args?: SelectSubset<T, CuentaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cuenta.
     * @param {CuentaDeleteArgs} args - Arguments to delete one Cuenta.
     * @example
     * // Delete one Cuenta
     * const Cuenta = await prisma.cuenta.delete({
     *   where: {
     *     // ... filter to delete one Cuenta
     *   }
     * })
     * 
     */
    delete<T extends CuentaDeleteArgs>(args: SelectSubset<T, CuentaDeleteArgs<ExtArgs>>): Prisma__CuentaClient<$Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cuenta.
     * @param {CuentaUpdateArgs} args - Arguments to update one Cuenta.
     * @example
     * // Update one Cuenta
     * const cuenta = await prisma.cuenta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CuentaUpdateArgs>(args: SelectSubset<T, CuentaUpdateArgs<ExtArgs>>): Prisma__CuentaClient<$Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cuentas.
     * @param {CuentaDeleteManyArgs} args - Arguments to filter Cuentas to delete.
     * @example
     * // Delete a few Cuentas
     * const { count } = await prisma.cuenta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CuentaDeleteManyArgs>(args?: SelectSubset<T, CuentaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cuentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuentaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cuentas
     * const cuenta = await prisma.cuenta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CuentaUpdateManyArgs>(args: SelectSubset<T, CuentaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cuentas and returns the data updated in the database.
     * @param {CuentaUpdateManyAndReturnArgs} args - Arguments to update many Cuentas.
     * @example
     * // Update many Cuentas
     * const cuenta = await prisma.cuenta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cuentas and only return the `id_cuenta`
     * const cuentaWithId_cuentaOnly = await prisma.cuenta.updateManyAndReturn({
     *   select: { id_cuenta: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CuentaUpdateManyAndReturnArgs>(args: SelectSubset<T, CuentaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cuenta.
     * @param {CuentaUpsertArgs} args - Arguments to update or create a Cuenta.
     * @example
     * // Update or create a Cuenta
     * const cuenta = await prisma.cuenta.upsert({
     *   create: {
     *     // ... data to create a Cuenta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cuenta we want to update
     *   }
     * })
     */
    upsert<T extends CuentaUpsertArgs>(args: SelectSubset<T, CuentaUpsertArgs<ExtArgs>>): Prisma__CuentaClient<$Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cuentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuentaCountArgs} args - Arguments to filter Cuentas to count.
     * @example
     * // Count the number of Cuentas
     * const count = await prisma.cuenta.count({
     *   where: {
     *     // ... the filter for the Cuentas we want to count
     *   }
     * })
    **/
    count<T extends CuentaCountArgs>(
      args?: Subset<T, CuentaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CuentaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cuenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuentaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CuentaAggregateArgs>(args: Subset<T, CuentaAggregateArgs>): Prisma.PrismaPromise<GetCuentaAggregateType<T>>

    /**
     * Group by Cuenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuentaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CuentaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CuentaGroupByArgs['orderBy'] }
        : { orderBy?: CuentaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CuentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCuentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cuenta model
   */
  readonly fields: CuentaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cuenta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CuentaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingreso<T extends IngresoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngresoDefaultArgs<ExtArgs>>): Prisma__IngresoClient<$Result.GetResult<Prisma.$IngresoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    consumos<T extends Cuenta$consumosArgs<ExtArgs> = {}>(args?: Subset<T, Cuenta$consumosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsumoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    factura<T extends Cuenta$facturaArgs<ExtArgs> = {}>(args?: Subset<T, Cuenta$facturaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cuenta model
   */
  interface CuentaFieldRefs {
    readonly id_cuenta: FieldRef<"Cuenta", 'Int'>
    readonly fk_ingreso: FieldRef<"Cuenta", 'Int'>
    readonly estado: FieldRef<"Cuenta", 'String'>
    readonly activo: FieldRef<"Cuenta", 'Boolean'>
    readonly created_at: FieldRef<"Cuenta", 'DateTime'>
    readonly updated_at: FieldRef<"Cuenta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cuenta findUnique
   */
  export type CuentaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuenta
     */
    omit?: CuentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null
    /**
     * Filter, which Cuenta to fetch.
     */
    where: CuentaWhereUniqueInput
  }

  /**
   * Cuenta findUniqueOrThrow
   */
  export type CuentaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuenta
     */
    omit?: CuentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null
    /**
     * Filter, which Cuenta to fetch.
     */
    where: CuentaWhereUniqueInput
  }

  /**
   * Cuenta findFirst
   */
  export type CuentaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuenta
     */
    omit?: CuentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null
    /**
     * Filter, which Cuenta to fetch.
     */
    where?: CuentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuentas to fetch.
     */
    orderBy?: CuentaOrderByWithRelationInput | CuentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cuentas.
     */
    cursor?: CuentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cuentas.
     */
    distinct?: CuentaScalarFieldEnum | CuentaScalarFieldEnum[]
  }

  /**
   * Cuenta findFirstOrThrow
   */
  export type CuentaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuenta
     */
    omit?: CuentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null
    /**
     * Filter, which Cuenta to fetch.
     */
    where?: CuentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuentas to fetch.
     */
    orderBy?: CuentaOrderByWithRelationInput | CuentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cuentas.
     */
    cursor?: CuentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cuentas.
     */
    distinct?: CuentaScalarFieldEnum | CuentaScalarFieldEnum[]
  }

  /**
   * Cuenta findMany
   */
  export type CuentaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuenta
     */
    omit?: CuentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null
    /**
     * Filter, which Cuentas to fetch.
     */
    where?: CuentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuentas to fetch.
     */
    orderBy?: CuentaOrderByWithRelationInput | CuentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cuentas.
     */
    cursor?: CuentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuentas.
     */
    skip?: number
    distinct?: CuentaScalarFieldEnum | CuentaScalarFieldEnum[]
  }

  /**
   * Cuenta create
   */
  export type CuentaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuenta
     */
    omit?: CuentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null
    /**
     * The data needed to create a Cuenta.
     */
    data: XOR<CuentaCreateInput, CuentaUncheckedCreateInput>
  }

  /**
   * Cuenta createMany
   */
  export type CuentaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cuentas.
     */
    data: CuentaCreateManyInput | CuentaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cuenta createManyAndReturn
   */
  export type CuentaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cuenta
     */
    omit?: CuentaOmit<ExtArgs> | null
    /**
     * The data used to create many Cuentas.
     */
    data: CuentaCreateManyInput | CuentaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cuenta update
   */
  export type CuentaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuenta
     */
    omit?: CuentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null
    /**
     * The data needed to update a Cuenta.
     */
    data: XOR<CuentaUpdateInput, CuentaUncheckedUpdateInput>
    /**
     * Choose, which Cuenta to update.
     */
    where: CuentaWhereUniqueInput
  }

  /**
   * Cuenta updateMany
   */
  export type CuentaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cuentas.
     */
    data: XOR<CuentaUpdateManyMutationInput, CuentaUncheckedUpdateManyInput>
    /**
     * Filter which Cuentas to update
     */
    where?: CuentaWhereInput
    /**
     * Limit how many Cuentas to update.
     */
    limit?: number
  }

  /**
   * Cuenta updateManyAndReturn
   */
  export type CuentaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cuenta
     */
    omit?: CuentaOmit<ExtArgs> | null
    /**
     * The data used to update Cuentas.
     */
    data: XOR<CuentaUpdateManyMutationInput, CuentaUncheckedUpdateManyInput>
    /**
     * Filter which Cuentas to update
     */
    where?: CuentaWhereInput
    /**
     * Limit how many Cuentas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cuenta upsert
   */
  export type CuentaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuenta
     */
    omit?: CuentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null
    /**
     * The filter to search for the Cuenta to update in case it exists.
     */
    where: CuentaWhereUniqueInput
    /**
     * In case the Cuenta found by the `where` argument doesn't exist, create a new Cuenta with this data.
     */
    create: XOR<CuentaCreateInput, CuentaUncheckedCreateInput>
    /**
     * In case the Cuenta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CuentaUpdateInput, CuentaUncheckedUpdateInput>
  }

  /**
   * Cuenta delete
   */
  export type CuentaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuenta
     */
    omit?: CuentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null
    /**
     * Filter which Cuenta to delete.
     */
    where: CuentaWhereUniqueInput
  }

  /**
   * Cuenta deleteMany
   */
  export type CuentaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cuentas to delete
     */
    where?: CuentaWhereInput
    /**
     * Limit how many Cuentas to delete.
     */
    limit?: number
  }

  /**
   * Cuenta.consumos
   */
  export type Cuenta$consumosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumo
     */
    select?: ConsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumo
     */
    omit?: ConsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumoInclude<ExtArgs> | null
    where?: ConsumoWhereInput
    orderBy?: ConsumoOrderByWithRelationInput | ConsumoOrderByWithRelationInput[]
    cursor?: ConsumoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsumoScalarFieldEnum | ConsumoScalarFieldEnum[]
  }

  /**
   * Cuenta.factura
   */
  export type Cuenta$facturaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    where?: FacturaWhereInput
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    cursor?: FacturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Cuenta without action
   */
  export type CuentaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuenta
     */
    omit?: CuentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null
  }


  /**
   * Model Consumo
   */

  export type AggregateConsumo = {
    _count: ConsumoCountAggregateOutputType | null
    _avg: ConsumoAvgAggregateOutputType | null
    _sum: ConsumoSumAggregateOutputType | null
    _min: ConsumoMinAggregateOutputType | null
    _max: ConsumoMaxAggregateOutputType | null
  }

  export type ConsumoAvgAggregateOutputType = {
    id_consumo: number | null
    fk_cuenta: number | null
    cantidad: number | null
    monto: number | null
    fk_usuario: number | null
  }

  export type ConsumoSumAggregateOutputType = {
    id_consumo: number | null
    fk_cuenta: number | null
    cantidad: number | null
    monto: number | null
    fk_usuario: number | null
  }

  export type ConsumoMinAggregateOutputType = {
    id_consumo: number | null
    fk_cuenta: number | null
    descripcion: string | null
    cantidad: number | null
    monto: number | null
    fk_usuario: number | null
    activo: boolean | null
  }

  export type ConsumoMaxAggregateOutputType = {
    id_consumo: number | null
    fk_cuenta: number | null
    descripcion: string | null
    cantidad: number | null
    monto: number | null
    fk_usuario: number | null
    activo: boolean | null
  }

  export type ConsumoCountAggregateOutputType = {
    id_consumo: number
    fk_cuenta: number
    descripcion: number
    cantidad: number
    monto: number
    fk_usuario: number
    activo: number
    _all: number
  }


  export type ConsumoAvgAggregateInputType = {
    id_consumo?: true
    fk_cuenta?: true
    cantidad?: true
    monto?: true
    fk_usuario?: true
  }

  export type ConsumoSumAggregateInputType = {
    id_consumo?: true
    fk_cuenta?: true
    cantidad?: true
    monto?: true
    fk_usuario?: true
  }

  export type ConsumoMinAggregateInputType = {
    id_consumo?: true
    fk_cuenta?: true
    descripcion?: true
    cantidad?: true
    monto?: true
    fk_usuario?: true
    activo?: true
  }

  export type ConsumoMaxAggregateInputType = {
    id_consumo?: true
    fk_cuenta?: true
    descripcion?: true
    cantidad?: true
    monto?: true
    fk_usuario?: true
    activo?: true
  }

  export type ConsumoCountAggregateInputType = {
    id_consumo?: true
    fk_cuenta?: true
    descripcion?: true
    cantidad?: true
    monto?: true
    fk_usuario?: true
    activo?: true
    _all?: true
  }

  export type ConsumoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consumo to aggregate.
     */
    where?: ConsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consumos to fetch.
     */
    orderBy?: ConsumoOrderByWithRelationInput | ConsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consumos
    **/
    _count?: true | ConsumoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsumoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsumoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsumoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsumoMaxAggregateInputType
  }

  export type GetConsumoAggregateType<T extends ConsumoAggregateArgs> = {
        [P in keyof T & keyof AggregateConsumo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsumo[P]>
      : GetScalarType<T[P], AggregateConsumo[P]>
  }




  export type ConsumoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsumoWhereInput
    orderBy?: ConsumoOrderByWithAggregationInput | ConsumoOrderByWithAggregationInput[]
    by: ConsumoScalarFieldEnum[] | ConsumoScalarFieldEnum
    having?: ConsumoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsumoCountAggregateInputType | true
    _avg?: ConsumoAvgAggregateInputType
    _sum?: ConsumoSumAggregateInputType
    _min?: ConsumoMinAggregateInputType
    _max?: ConsumoMaxAggregateInputType
  }

  export type ConsumoGroupByOutputType = {
    id_consumo: number
    fk_cuenta: number
    descripcion: string
    cantidad: number
    monto: number
    fk_usuario: number
    activo: boolean
    _count: ConsumoCountAggregateOutputType | null
    _avg: ConsumoAvgAggregateOutputType | null
    _sum: ConsumoSumAggregateOutputType | null
    _min: ConsumoMinAggregateOutputType | null
    _max: ConsumoMaxAggregateOutputType | null
  }

  type GetConsumoGroupByPayload<T extends ConsumoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsumoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsumoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsumoGroupByOutputType[P]>
            : GetScalarType<T[P], ConsumoGroupByOutputType[P]>
        }
      >
    >


  export type ConsumoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_consumo?: boolean
    fk_cuenta?: boolean
    descripcion?: boolean
    cantidad?: boolean
    monto?: boolean
    fk_usuario?: boolean
    activo?: boolean
    cuenta?: boolean | CuentaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consumo"]>

  export type ConsumoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_consumo?: boolean
    fk_cuenta?: boolean
    descripcion?: boolean
    cantidad?: boolean
    monto?: boolean
    fk_usuario?: boolean
    activo?: boolean
    cuenta?: boolean | CuentaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consumo"]>

  export type ConsumoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_consumo?: boolean
    fk_cuenta?: boolean
    descripcion?: boolean
    cantidad?: boolean
    monto?: boolean
    fk_usuario?: boolean
    activo?: boolean
    cuenta?: boolean | CuentaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consumo"]>

  export type ConsumoSelectScalar = {
    id_consumo?: boolean
    fk_cuenta?: boolean
    descripcion?: boolean
    cantidad?: boolean
    monto?: boolean
    fk_usuario?: boolean
    activo?: boolean
  }

  export type ConsumoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_consumo" | "fk_cuenta" | "descripcion" | "cantidad" | "monto" | "fk_usuario" | "activo", ExtArgs["result"]["consumo"]>
  export type ConsumoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuenta?: boolean | CuentaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ConsumoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuenta?: boolean | CuentaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ConsumoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuenta?: boolean | CuentaDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ConsumoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consumo"
    objects: {
      cuenta: Prisma.$CuentaPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_consumo: number
      fk_cuenta: number
      descripcion: string
      cantidad: number
      monto: number
      fk_usuario: number
      activo: boolean
    }, ExtArgs["result"]["consumo"]>
    composites: {}
  }

  type ConsumoGetPayload<S extends boolean | null | undefined | ConsumoDefaultArgs> = $Result.GetResult<Prisma.$ConsumoPayload, S>

  type ConsumoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsumoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsumoCountAggregateInputType | true
    }

  export interface ConsumoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consumo'], meta: { name: 'Consumo' } }
    /**
     * Find zero or one Consumo that matches the filter.
     * @param {ConsumoFindUniqueArgs} args - Arguments to find a Consumo
     * @example
     * // Get one Consumo
     * const consumo = await prisma.consumo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsumoFindUniqueArgs>(args: SelectSubset<T, ConsumoFindUniqueArgs<ExtArgs>>): Prisma__ConsumoClient<$Result.GetResult<Prisma.$ConsumoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Consumo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsumoFindUniqueOrThrowArgs} args - Arguments to find a Consumo
     * @example
     * // Get one Consumo
     * const consumo = await prisma.consumo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsumoFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsumoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsumoClient<$Result.GetResult<Prisma.$ConsumoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consumo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumoFindFirstArgs} args - Arguments to find a Consumo
     * @example
     * // Get one Consumo
     * const consumo = await prisma.consumo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsumoFindFirstArgs>(args?: SelectSubset<T, ConsumoFindFirstArgs<ExtArgs>>): Prisma__ConsumoClient<$Result.GetResult<Prisma.$ConsumoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consumo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumoFindFirstOrThrowArgs} args - Arguments to find a Consumo
     * @example
     * // Get one Consumo
     * const consumo = await prisma.consumo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsumoFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsumoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsumoClient<$Result.GetResult<Prisma.$ConsumoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consumos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consumos
     * const consumos = await prisma.consumo.findMany()
     * 
     * // Get first 10 Consumos
     * const consumos = await prisma.consumo.findMany({ take: 10 })
     * 
     * // Only select the `id_consumo`
     * const consumoWithId_consumoOnly = await prisma.consumo.findMany({ select: { id_consumo: true } })
     * 
     */
    findMany<T extends ConsumoFindManyArgs>(args?: SelectSubset<T, ConsumoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsumoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Consumo.
     * @param {ConsumoCreateArgs} args - Arguments to create a Consumo.
     * @example
     * // Create one Consumo
     * const Consumo = await prisma.consumo.create({
     *   data: {
     *     // ... data to create a Consumo
     *   }
     * })
     * 
     */
    create<T extends ConsumoCreateArgs>(args: SelectSubset<T, ConsumoCreateArgs<ExtArgs>>): Prisma__ConsumoClient<$Result.GetResult<Prisma.$ConsumoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consumos.
     * @param {ConsumoCreateManyArgs} args - Arguments to create many Consumos.
     * @example
     * // Create many Consumos
     * const consumo = await prisma.consumo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsumoCreateManyArgs>(args?: SelectSubset<T, ConsumoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Consumos and returns the data saved in the database.
     * @param {ConsumoCreateManyAndReturnArgs} args - Arguments to create many Consumos.
     * @example
     * // Create many Consumos
     * const consumo = await prisma.consumo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Consumos and only return the `id_consumo`
     * const consumoWithId_consumoOnly = await prisma.consumo.createManyAndReturn({
     *   select: { id_consumo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsumoCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsumoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsumoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Consumo.
     * @param {ConsumoDeleteArgs} args - Arguments to delete one Consumo.
     * @example
     * // Delete one Consumo
     * const Consumo = await prisma.consumo.delete({
     *   where: {
     *     // ... filter to delete one Consumo
     *   }
     * })
     * 
     */
    delete<T extends ConsumoDeleteArgs>(args: SelectSubset<T, ConsumoDeleteArgs<ExtArgs>>): Prisma__ConsumoClient<$Result.GetResult<Prisma.$ConsumoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Consumo.
     * @param {ConsumoUpdateArgs} args - Arguments to update one Consumo.
     * @example
     * // Update one Consumo
     * const consumo = await prisma.consumo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsumoUpdateArgs>(args: SelectSubset<T, ConsumoUpdateArgs<ExtArgs>>): Prisma__ConsumoClient<$Result.GetResult<Prisma.$ConsumoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consumos.
     * @param {ConsumoDeleteManyArgs} args - Arguments to filter Consumos to delete.
     * @example
     * // Delete a few Consumos
     * const { count } = await prisma.consumo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsumoDeleteManyArgs>(args?: SelectSubset<T, ConsumoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consumos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consumos
     * const consumo = await prisma.consumo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsumoUpdateManyArgs>(args: SelectSubset<T, ConsumoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consumos and returns the data updated in the database.
     * @param {ConsumoUpdateManyAndReturnArgs} args - Arguments to update many Consumos.
     * @example
     * // Update many Consumos
     * const consumo = await prisma.consumo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Consumos and only return the `id_consumo`
     * const consumoWithId_consumoOnly = await prisma.consumo.updateManyAndReturn({
     *   select: { id_consumo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConsumoUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsumoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsumoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Consumo.
     * @param {ConsumoUpsertArgs} args - Arguments to update or create a Consumo.
     * @example
     * // Update or create a Consumo
     * const consumo = await prisma.consumo.upsert({
     *   create: {
     *     // ... data to create a Consumo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consumo we want to update
     *   }
     * })
     */
    upsert<T extends ConsumoUpsertArgs>(args: SelectSubset<T, ConsumoUpsertArgs<ExtArgs>>): Prisma__ConsumoClient<$Result.GetResult<Prisma.$ConsumoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Consumos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumoCountArgs} args - Arguments to filter Consumos to count.
     * @example
     * // Count the number of Consumos
     * const count = await prisma.consumo.count({
     *   where: {
     *     // ... the filter for the Consumos we want to count
     *   }
     * })
    **/
    count<T extends ConsumoCountArgs>(
      args?: Subset<T, ConsumoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsumoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consumo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsumoAggregateArgs>(args: Subset<T, ConsumoAggregateArgs>): Prisma.PrismaPromise<GetConsumoAggregateType<T>>

    /**
     * Group by Consumo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConsumoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsumoGroupByArgs['orderBy'] }
        : { orderBy?: ConsumoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConsumoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsumoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consumo model
   */
  readonly fields: ConsumoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consumo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsumoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cuenta<T extends CuentaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CuentaDefaultArgs<ExtArgs>>): Prisma__CuentaClient<$Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Consumo model
   */
  interface ConsumoFieldRefs {
    readonly id_consumo: FieldRef<"Consumo", 'Int'>
    readonly fk_cuenta: FieldRef<"Consumo", 'Int'>
    readonly descripcion: FieldRef<"Consumo", 'String'>
    readonly cantidad: FieldRef<"Consumo", 'Int'>
    readonly monto: FieldRef<"Consumo", 'Int'>
    readonly fk_usuario: FieldRef<"Consumo", 'Int'>
    readonly activo: FieldRef<"Consumo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Consumo findUnique
   */
  export type ConsumoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumo
     */
    select?: ConsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumo
     */
    omit?: ConsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumoInclude<ExtArgs> | null
    /**
     * Filter, which Consumo to fetch.
     */
    where: ConsumoWhereUniqueInput
  }

  /**
   * Consumo findUniqueOrThrow
   */
  export type ConsumoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumo
     */
    select?: ConsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumo
     */
    omit?: ConsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumoInclude<ExtArgs> | null
    /**
     * Filter, which Consumo to fetch.
     */
    where: ConsumoWhereUniqueInput
  }

  /**
   * Consumo findFirst
   */
  export type ConsumoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumo
     */
    select?: ConsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumo
     */
    omit?: ConsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumoInclude<ExtArgs> | null
    /**
     * Filter, which Consumo to fetch.
     */
    where?: ConsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consumos to fetch.
     */
    orderBy?: ConsumoOrderByWithRelationInput | ConsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consumos.
     */
    cursor?: ConsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consumos.
     */
    distinct?: ConsumoScalarFieldEnum | ConsumoScalarFieldEnum[]
  }

  /**
   * Consumo findFirstOrThrow
   */
  export type ConsumoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumo
     */
    select?: ConsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumo
     */
    omit?: ConsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumoInclude<ExtArgs> | null
    /**
     * Filter, which Consumo to fetch.
     */
    where?: ConsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consumos to fetch.
     */
    orderBy?: ConsumoOrderByWithRelationInput | ConsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consumos.
     */
    cursor?: ConsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consumos.
     */
    distinct?: ConsumoScalarFieldEnum | ConsumoScalarFieldEnum[]
  }

  /**
   * Consumo findMany
   */
  export type ConsumoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumo
     */
    select?: ConsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumo
     */
    omit?: ConsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumoInclude<ExtArgs> | null
    /**
     * Filter, which Consumos to fetch.
     */
    where?: ConsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consumos to fetch.
     */
    orderBy?: ConsumoOrderByWithRelationInput | ConsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consumos.
     */
    cursor?: ConsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consumos.
     */
    skip?: number
    distinct?: ConsumoScalarFieldEnum | ConsumoScalarFieldEnum[]
  }

  /**
   * Consumo create
   */
  export type ConsumoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumo
     */
    select?: ConsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumo
     */
    omit?: ConsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumoInclude<ExtArgs> | null
    /**
     * The data needed to create a Consumo.
     */
    data: XOR<ConsumoCreateInput, ConsumoUncheckedCreateInput>
  }

  /**
   * Consumo createMany
   */
  export type ConsumoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consumos.
     */
    data: ConsumoCreateManyInput | ConsumoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Consumo createManyAndReturn
   */
  export type ConsumoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumo
     */
    select?: ConsumoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consumo
     */
    omit?: ConsumoOmit<ExtArgs> | null
    /**
     * The data used to create many Consumos.
     */
    data: ConsumoCreateManyInput | ConsumoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consumo update
   */
  export type ConsumoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumo
     */
    select?: ConsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumo
     */
    omit?: ConsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumoInclude<ExtArgs> | null
    /**
     * The data needed to update a Consumo.
     */
    data: XOR<ConsumoUpdateInput, ConsumoUncheckedUpdateInput>
    /**
     * Choose, which Consumo to update.
     */
    where: ConsumoWhereUniqueInput
  }

  /**
   * Consumo updateMany
   */
  export type ConsumoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consumos.
     */
    data: XOR<ConsumoUpdateManyMutationInput, ConsumoUncheckedUpdateManyInput>
    /**
     * Filter which Consumos to update
     */
    where?: ConsumoWhereInput
    /**
     * Limit how many Consumos to update.
     */
    limit?: number
  }

  /**
   * Consumo updateManyAndReturn
   */
  export type ConsumoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumo
     */
    select?: ConsumoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consumo
     */
    omit?: ConsumoOmit<ExtArgs> | null
    /**
     * The data used to update Consumos.
     */
    data: XOR<ConsumoUpdateManyMutationInput, ConsumoUncheckedUpdateManyInput>
    /**
     * Filter which Consumos to update
     */
    where?: ConsumoWhereInput
    /**
     * Limit how many Consumos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consumo upsert
   */
  export type ConsumoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumo
     */
    select?: ConsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumo
     */
    omit?: ConsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumoInclude<ExtArgs> | null
    /**
     * The filter to search for the Consumo to update in case it exists.
     */
    where: ConsumoWhereUniqueInput
    /**
     * In case the Consumo found by the `where` argument doesn't exist, create a new Consumo with this data.
     */
    create: XOR<ConsumoCreateInput, ConsumoUncheckedCreateInput>
    /**
     * In case the Consumo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsumoUpdateInput, ConsumoUncheckedUpdateInput>
  }

  /**
   * Consumo delete
   */
  export type ConsumoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumo
     */
    select?: ConsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumo
     */
    omit?: ConsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumoInclude<ExtArgs> | null
    /**
     * Filter which Consumo to delete.
     */
    where: ConsumoWhereUniqueInput
  }

  /**
   * Consumo deleteMany
   */
  export type ConsumoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consumos to delete
     */
    where?: ConsumoWhereInput
    /**
     * Limit how many Consumos to delete.
     */
    limit?: number
  }

  /**
   * Consumo without action
   */
  export type ConsumoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumo
     */
    select?: ConsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumo
     */
    omit?: ConsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumoInclude<ExtArgs> | null
  }


  /**
   * Model Timbrado
   */

  export type AggregateTimbrado = {
    _count: TimbradoCountAggregateOutputType | null
    _avg: TimbradoAvgAggregateOutputType | null
    _sum: TimbradoSumAggregateOutputType | null
    _min: TimbradoMinAggregateOutputType | null
    _max: TimbradoMaxAggregateOutputType | null
  }

  export type TimbradoAvgAggregateOutputType = {
    id_timbrado: number | null
    codigo_sucursal: number | null
    codigo_punto_facturacion: number | null
    numero_secuencial: number | null
  }

  export type TimbradoSumAggregateOutputType = {
    id_timbrado: number | null
    codigo_sucursal: number | null
    codigo_punto_facturacion: number | null
    numero_secuencial: number | null
  }

  export type TimbradoMinAggregateOutputType = {
    id_timbrado: number | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    codigo_sucursal: number | null
    codigo_punto_facturacion: number | null
    numero_secuencial: number | null
    activo: boolean | null
  }

  export type TimbradoMaxAggregateOutputType = {
    id_timbrado: number | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    codigo_sucursal: number | null
    codigo_punto_facturacion: number | null
    numero_secuencial: number | null
    activo: boolean | null
  }

  export type TimbradoCountAggregateOutputType = {
    id_timbrado: number
    fecha_inicio: number
    fecha_fin: number
    codigo_sucursal: number
    codigo_punto_facturacion: number
    numero_secuencial: number
    activo: number
    _all: number
  }


  export type TimbradoAvgAggregateInputType = {
    id_timbrado?: true
    codigo_sucursal?: true
    codigo_punto_facturacion?: true
    numero_secuencial?: true
  }

  export type TimbradoSumAggregateInputType = {
    id_timbrado?: true
    codigo_sucursal?: true
    codigo_punto_facturacion?: true
    numero_secuencial?: true
  }

  export type TimbradoMinAggregateInputType = {
    id_timbrado?: true
    fecha_inicio?: true
    fecha_fin?: true
    codigo_sucursal?: true
    codigo_punto_facturacion?: true
    numero_secuencial?: true
    activo?: true
  }

  export type TimbradoMaxAggregateInputType = {
    id_timbrado?: true
    fecha_inicio?: true
    fecha_fin?: true
    codigo_sucursal?: true
    codigo_punto_facturacion?: true
    numero_secuencial?: true
    activo?: true
  }

  export type TimbradoCountAggregateInputType = {
    id_timbrado?: true
    fecha_inicio?: true
    fecha_fin?: true
    codigo_sucursal?: true
    codigo_punto_facturacion?: true
    numero_secuencial?: true
    activo?: true
    _all?: true
  }

  export type TimbradoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timbrado to aggregate.
     */
    where?: TimbradoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timbrados to fetch.
     */
    orderBy?: TimbradoOrderByWithRelationInput | TimbradoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimbradoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timbrados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timbrados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Timbrados
    **/
    _count?: true | TimbradoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimbradoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimbradoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimbradoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimbradoMaxAggregateInputType
  }

  export type GetTimbradoAggregateType<T extends TimbradoAggregateArgs> = {
        [P in keyof T & keyof AggregateTimbrado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimbrado[P]>
      : GetScalarType<T[P], AggregateTimbrado[P]>
  }




  export type TimbradoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimbradoWhereInput
    orderBy?: TimbradoOrderByWithAggregationInput | TimbradoOrderByWithAggregationInput[]
    by: TimbradoScalarFieldEnum[] | TimbradoScalarFieldEnum
    having?: TimbradoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimbradoCountAggregateInputType | true
    _avg?: TimbradoAvgAggregateInputType
    _sum?: TimbradoSumAggregateInputType
    _min?: TimbradoMinAggregateInputType
    _max?: TimbradoMaxAggregateInputType
  }

  export type TimbradoGroupByOutputType = {
    id_timbrado: number
    fecha_inicio: Date
    fecha_fin: Date
    codigo_sucursal: number
    codigo_punto_facturacion: number
    numero_secuencial: number
    activo: boolean
    _count: TimbradoCountAggregateOutputType | null
    _avg: TimbradoAvgAggregateOutputType | null
    _sum: TimbradoSumAggregateOutputType | null
    _min: TimbradoMinAggregateOutputType | null
    _max: TimbradoMaxAggregateOutputType | null
  }

  type GetTimbradoGroupByPayload<T extends TimbradoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimbradoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimbradoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimbradoGroupByOutputType[P]>
            : GetScalarType<T[P], TimbradoGroupByOutputType[P]>
        }
      >
    >


  export type TimbradoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_timbrado?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    codigo_sucursal?: boolean
    codigo_punto_facturacion?: boolean
    numero_secuencial?: boolean
    activo?: boolean
    facturas?: boolean | Timbrado$facturasArgs<ExtArgs>
    _count?: boolean | TimbradoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timbrado"]>

  export type TimbradoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_timbrado?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    codigo_sucursal?: boolean
    codigo_punto_facturacion?: boolean
    numero_secuencial?: boolean
    activo?: boolean
  }, ExtArgs["result"]["timbrado"]>

  export type TimbradoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_timbrado?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    codigo_sucursal?: boolean
    codigo_punto_facturacion?: boolean
    numero_secuencial?: boolean
    activo?: boolean
  }, ExtArgs["result"]["timbrado"]>

  export type TimbradoSelectScalar = {
    id_timbrado?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    codigo_sucursal?: boolean
    codigo_punto_facturacion?: boolean
    numero_secuencial?: boolean
    activo?: boolean
  }

  export type TimbradoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_timbrado" | "fecha_inicio" | "fecha_fin" | "codigo_sucursal" | "codigo_punto_facturacion" | "numero_secuencial" | "activo", ExtArgs["result"]["timbrado"]>
  export type TimbradoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facturas?: boolean | Timbrado$facturasArgs<ExtArgs>
    _count?: boolean | TimbradoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TimbradoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TimbradoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TimbradoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Timbrado"
    objects: {
      facturas: Prisma.$FacturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_timbrado: number
      fecha_inicio: Date
      fecha_fin: Date
      codigo_sucursal: number
      codigo_punto_facturacion: number
      numero_secuencial: number
      activo: boolean
    }, ExtArgs["result"]["timbrado"]>
    composites: {}
  }

  type TimbradoGetPayload<S extends boolean | null | undefined | TimbradoDefaultArgs> = $Result.GetResult<Prisma.$TimbradoPayload, S>

  type TimbradoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimbradoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimbradoCountAggregateInputType | true
    }

  export interface TimbradoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Timbrado'], meta: { name: 'Timbrado' } }
    /**
     * Find zero or one Timbrado that matches the filter.
     * @param {TimbradoFindUniqueArgs} args - Arguments to find a Timbrado
     * @example
     * // Get one Timbrado
     * const timbrado = await prisma.timbrado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimbradoFindUniqueArgs>(args: SelectSubset<T, TimbradoFindUniqueArgs<ExtArgs>>): Prisma__TimbradoClient<$Result.GetResult<Prisma.$TimbradoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Timbrado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimbradoFindUniqueOrThrowArgs} args - Arguments to find a Timbrado
     * @example
     * // Get one Timbrado
     * const timbrado = await prisma.timbrado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimbradoFindUniqueOrThrowArgs>(args: SelectSubset<T, TimbradoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimbradoClient<$Result.GetResult<Prisma.$TimbradoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Timbrado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimbradoFindFirstArgs} args - Arguments to find a Timbrado
     * @example
     * // Get one Timbrado
     * const timbrado = await prisma.timbrado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimbradoFindFirstArgs>(args?: SelectSubset<T, TimbradoFindFirstArgs<ExtArgs>>): Prisma__TimbradoClient<$Result.GetResult<Prisma.$TimbradoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Timbrado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimbradoFindFirstOrThrowArgs} args - Arguments to find a Timbrado
     * @example
     * // Get one Timbrado
     * const timbrado = await prisma.timbrado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimbradoFindFirstOrThrowArgs>(args?: SelectSubset<T, TimbradoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimbradoClient<$Result.GetResult<Prisma.$TimbradoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Timbrados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimbradoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Timbrados
     * const timbrados = await prisma.timbrado.findMany()
     * 
     * // Get first 10 Timbrados
     * const timbrados = await prisma.timbrado.findMany({ take: 10 })
     * 
     * // Only select the `id_timbrado`
     * const timbradoWithId_timbradoOnly = await prisma.timbrado.findMany({ select: { id_timbrado: true } })
     * 
     */
    findMany<T extends TimbradoFindManyArgs>(args?: SelectSubset<T, TimbradoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimbradoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Timbrado.
     * @param {TimbradoCreateArgs} args - Arguments to create a Timbrado.
     * @example
     * // Create one Timbrado
     * const Timbrado = await prisma.timbrado.create({
     *   data: {
     *     // ... data to create a Timbrado
     *   }
     * })
     * 
     */
    create<T extends TimbradoCreateArgs>(args: SelectSubset<T, TimbradoCreateArgs<ExtArgs>>): Prisma__TimbradoClient<$Result.GetResult<Prisma.$TimbradoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Timbrados.
     * @param {TimbradoCreateManyArgs} args - Arguments to create many Timbrados.
     * @example
     * // Create many Timbrados
     * const timbrado = await prisma.timbrado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimbradoCreateManyArgs>(args?: SelectSubset<T, TimbradoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Timbrados and returns the data saved in the database.
     * @param {TimbradoCreateManyAndReturnArgs} args - Arguments to create many Timbrados.
     * @example
     * // Create many Timbrados
     * const timbrado = await prisma.timbrado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Timbrados and only return the `id_timbrado`
     * const timbradoWithId_timbradoOnly = await prisma.timbrado.createManyAndReturn({
     *   select: { id_timbrado: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimbradoCreateManyAndReturnArgs>(args?: SelectSubset<T, TimbradoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimbradoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Timbrado.
     * @param {TimbradoDeleteArgs} args - Arguments to delete one Timbrado.
     * @example
     * // Delete one Timbrado
     * const Timbrado = await prisma.timbrado.delete({
     *   where: {
     *     // ... filter to delete one Timbrado
     *   }
     * })
     * 
     */
    delete<T extends TimbradoDeleteArgs>(args: SelectSubset<T, TimbradoDeleteArgs<ExtArgs>>): Prisma__TimbradoClient<$Result.GetResult<Prisma.$TimbradoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Timbrado.
     * @param {TimbradoUpdateArgs} args - Arguments to update one Timbrado.
     * @example
     * // Update one Timbrado
     * const timbrado = await prisma.timbrado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimbradoUpdateArgs>(args: SelectSubset<T, TimbradoUpdateArgs<ExtArgs>>): Prisma__TimbradoClient<$Result.GetResult<Prisma.$TimbradoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Timbrados.
     * @param {TimbradoDeleteManyArgs} args - Arguments to filter Timbrados to delete.
     * @example
     * // Delete a few Timbrados
     * const { count } = await prisma.timbrado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimbradoDeleteManyArgs>(args?: SelectSubset<T, TimbradoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timbrados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimbradoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Timbrados
     * const timbrado = await prisma.timbrado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimbradoUpdateManyArgs>(args: SelectSubset<T, TimbradoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timbrados and returns the data updated in the database.
     * @param {TimbradoUpdateManyAndReturnArgs} args - Arguments to update many Timbrados.
     * @example
     * // Update many Timbrados
     * const timbrado = await prisma.timbrado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Timbrados and only return the `id_timbrado`
     * const timbradoWithId_timbradoOnly = await prisma.timbrado.updateManyAndReturn({
     *   select: { id_timbrado: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TimbradoUpdateManyAndReturnArgs>(args: SelectSubset<T, TimbradoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimbradoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Timbrado.
     * @param {TimbradoUpsertArgs} args - Arguments to update or create a Timbrado.
     * @example
     * // Update or create a Timbrado
     * const timbrado = await prisma.timbrado.upsert({
     *   create: {
     *     // ... data to create a Timbrado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Timbrado we want to update
     *   }
     * })
     */
    upsert<T extends TimbradoUpsertArgs>(args: SelectSubset<T, TimbradoUpsertArgs<ExtArgs>>): Prisma__TimbradoClient<$Result.GetResult<Prisma.$TimbradoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Timbrados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimbradoCountArgs} args - Arguments to filter Timbrados to count.
     * @example
     * // Count the number of Timbrados
     * const count = await prisma.timbrado.count({
     *   where: {
     *     // ... the filter for the Timbrados we want to count
     *   }
     * })
    **/
    count<T extends TimbradoCountArgs>(
      args?: Subset<T, TimbradoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimbradoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Timbrado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimbradoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TimbradoAggregateArgs>(args: Subset<T, TimbradoAggregateArgs>): Prisma.PrismaPromise<GetTimbradoAggregateType<T>>

    /**
     * Group by Timbrado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimbradoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TimbradoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimbradoGroupByArgs['orderBy'] }
        : { orderBy?: TimbradoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TimbradoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimbradoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Timbrado model
   */
  readonly fields: TimbradoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Timbrado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimbradoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facturas<T extends Timbrado$facturasArgs<ExtArgs> = {}>(args?: Subset<T, Timbrado$facturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Timbrado model
   */
  interface TimbradoFieldRefs {
    readonly id_timbrado: FieldRef<"Timbrado", 'Int'>
    readonly fecha_inicio: FieldRef<"Timbrado", 'DateTime'>
    readonly fecha_fin: FieldRef<"Timbrado", 'DateTime'>
    readonly codigo_sucursal: FieldRef<"Timbrado", 'Int'>
    readonly codigo_punto_facturacion: FieldRef<"Timbrado", 'Int'>
    readonly numero_secuencial: FieldRef<"Timbrado", 'Int'>
    readonly activo: FieldRef<"Timbrado", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Timbrado findUnique
   */
  export type TimbradoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timbrado
     */
    select?: TimbradoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timbrado
     */
    omit?: TimbradoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimbradoInclude<ExtArgs> | null
    /**
     * Filter, which Timbrado to fetch.
     */
    where: TimbradoWhereUniqueInput
  }

  /**
   * Timbrado findUniqueOrThrow
   */
  export type TimbradoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timbrado
     */
    select?: TimbradoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timbrado
     */
    omit?: TimbradoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimbradoInclude<ExtArgs> | null
    /**
     * Filter, which Timbrado to fetch.
     */
    where: TimbradoWhereUniqueInput
  }

  /**
   * Timbrado findFirst
   */
  export type TimbradoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timbrado
     */
    select?: TimbradoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timbrado
     */
    omit?: TimbradoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimbradoInclude<ExtArgs> | null
    /**
     * Filter, which Timbrado to fetch.
     */
    where?: TimbradoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timbrados to fetch.
     */
    orderBy?: TimbradoOrderByWithRelationInput | TimbradoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timbrados.
     */
    cursor?: TimbradoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timbrados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timbrados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timbrados.
     */
    distinct?: TimbradoScalarFieldEnum | TimbradoScalarFieldEnum[]
  }

  /**
   * Timbrado findFirstOrThrow
   */
  export type TimbradoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timbrado
     */
    select?: TimbradoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timbrado
     */
    omit?: TimbradoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimbradoInclude<ExtArgs> | null
    /**
     * Filter, which Timbrado to fetch.
     */
    where?: TimbradoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timbrados to fetch.
     */
    orderBy?: TimbradoOrderByWithRelationInput | TimbradoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timbrados.
     */
    cursor?: TimbradoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timbrados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timbrados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timbrados.
     */
    distinct?: TimbradoScalarFieldEnum | TimbradoScalarFieldEnum[]
  }

  /**
   * Timbrado findMany
   */
  export type TimbradoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timbrado
     */
    select?: TimbradoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timbrado
     */
    omit?: TimbradoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimbradoInclude<ExtArgs> | null
    /**
     * Filter, which Timbrados to fetch.
     */
    where?: TimbradoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timbrados to fetch.
     */
    orderBy?: TimbradoOrderByWithRelationInput | TimbradoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Timbrados.
     */
    cursor?: TimbradoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timbrados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timbrados.
     */
    skip?: number
    distinct?: TimbradoScalarFieldEnum | TimbradoScalarFieldEnum[]
  }

  /**
   * Timbrado create
   */
  export type TimbradoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timbrado
     */
    select?: TimbradoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timbrado
     */
    omit?: TimbradoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimbradoInclude<ExtArgs> | null
    /**
     * The data needed to create a Timbrado.
     */
    data: XOR<TimbradoCreateInput, TimbradoUncheckedCreateInput>
  }

  /**
   * Timbrado createMany
   */
  export type TimbradoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Timbrados.
     */
    data: TimbradoCreateManyInput | TimbradoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Timbrado createManyAndReturn
   */
  export type TimbradoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timbrado
     */
    select?: TimbradoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Timbrado
     */
    omit?: TimbradoOmit<ExtArgs> | null
    /**
     * The data used to create many Timbrados.
     */
    data: TimbradoCreateManyInput | TimbradoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Timbrado update
   */
  export type TimbradoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timbrado
     */
    select?: TimbradoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timbrado
     */
    omit?: TimbradoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimbradoInclude<ExtArgs> | null
    /**
     * The data needed to update a Timbrado.
     */
    data: XOR<TimbradoUpdateInput, TimbradoUncheckedUpdateInput>
    /**
     * Choose, which Timbrado to update.
     */
    where: TimbradoWhereUniqueInput
  }

  /**
   * Timbrado updateMany
   */
  export type TimbradoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Timbrados.
     */
    data: XOR<TimbradoUpdateManyMutationInput, TimbradoUncheckedUpdateManyInput>
    /**
     * Filter which Timbrados to update
     */
    where?: TimbradoWhereInput
    /**
     * Limit how many Timbrados to update.
     */
    limit?: number
  }

  /**
   * Timbrado updateManyAndReturn
   */
  export type TimbradoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timbrado
     */
    select?: TimbradoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Timbrado
     */
    omit?: TimbradoOmit<ExtArgs> | null
    /**
     * The data used to update Timbrados.
     */
    data: XOR<TimbradoUpdateManyMutationInput, TimbradoUncheckedUpdateManyInput>
    /**
     * Filter which Timbrados to update
     */
    where?: TimbradoWhereInput
    /**
     * Limit how many Timbrados to update.
     */
    limit?: number
  }

  /**
   * Timbrado upsert
   */
  export type TimbradoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timbrado
     */
    select?: TimbradoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timbrado
     */
    omit?: TimbradoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimbradoInclude<ExtArgs> | null
    /**
     * The filter to search for the Timbrado to update in case it exists.
     */
    where: TimbradoWhereUniqueInput
    /**
     * In case the Timbrado found by the `where` argument doesn't exist, create a new Timbrado with this data.
     */
    create: XOR<TimbradoCreateInput, TimbradoUncheckedCreateInput>
    /**
     * In case the Timbrado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimbradoUpdateInput, TimbradoUncheckedUpdateInput>
  }

  /**
   * Timbrado delete
   */
  export type TimbradoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timbrado
     */
    select?: TimbradoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timbrado
     */
    omit?: TimbradoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimbradoInclude<ExtArgs> | null
    /**
     * Filter which Timbrado to delete.
     */
    where: TimbradoWhereUniqueInput
  }

  /**
   * Timbrado deleteMany
   */
  export type TimbradoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timbrados to delete
     */
    where?: TimbradoWhereInput
    /**
     * Limit how many Timbrados to delete.
     */
    limit?: number
  }

  /**
   * Timbrado.facturas
   */
  export type Timbrado$facturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    where?: FacturaWhereInput
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    cursor?: FacturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Timbrado without action
   */
  export type TimbradoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timbrado
     */
    select?: TimbradoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timbrado
     */
    omit?: TimbradoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimbradoInclude<ExtArgs> | null
  }


  /**
   * Model Factura
   */

  export type AggregateFactura = {
    _count: FacturaCountAggregateOutputType | null
    _avg: FacturaAvgAggregateOutputType | null
    _sum: FacturaSumAggregateOutputType | null
    _min: FacturaMinAggregateOutputType | null
    _max: FacturaMaxAggregateOutputType | null
  }

  export type FacturaAvgAggregateOutputType = {
    id_factura: number | null
    fk_cuenta: number | null
    fk_timbrado: number | null
    total: number | null
    fk_usuario: number | null
  }

  export type FacturaSumAggregateOutputType = {
    id_factura: number | null
    fk_cuenta: number | null
    fk_timbrado: number | null
    total: number | null
    fk_usuario: number | null
  }

  export type FacturaMinAggregateOutputType = {
    id_factura: number | null
    fk_cuenta: number | null
    fk_timbrado: number | null
    fecha_emision: Date | null
    condicion_venta: string | null
    total: number | null
    fk_usuario: number | null
  }

  export type FacturaMaxAggregateOutputType = {
    id_factura: number | null
    fk_cuenta: number | null
    fk_timbrado: number | null
    fecha_emision: Date | null
    condicion_venta: string | null
    total: number | null
    fk_usuario: number | null
  }

  export type FacturaCountAggregateOutputType = {
    id_factura: number
    fk_cuenta: number
    fk_timbrado: number
    fecha_emision: number
    condicion_venta: number
    total: number
    fk_usuario: number
    _all: number
  }


  export type FacturaAvgAggregateInputType = {
    id_factura?: true
    fk_cuenta?: true
    fk_timbrado?: true
    total?: true
    fk_usuario?: true
  }

  export type FacturaSumAggregateInputType = {
    id_factura?: true
    fk_cuenta?: true
    fk_timbrado?: true
    total?: true
    fk_usuario?: true
  }

  export type FacturaMinAggregateInputType = {
    id_factura?: true
    fk_cuenta?: true
    fk_timbrado?: true
    fecha_emision?: true
    condicion_venta?: true
    total?: true
    fk_usuario?: true
  }

  export type FacturaMaxAggregateInputType = {
    id_factura?: true
    fk_cuenta?: true
    fk_timbrado?: true
    fecha_emision?: true
    condicion_venta?: true
    total?: true
    fk_usuario?: true
  }

  export type FacturaCountAggregateInputType = {
    id_factura?: true
    fk_cuenta?: true
    fk_timbrado?: true
    fecha_emision?: true
    condicion_venta?: true
    total?: true
    fk_usuario?: true
    _all?: true
  }

  export type FacturaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Factura to aggregate.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Facturas
    **/
    _count?: true | FacturaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacturaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacturaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacturaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacturaMaxAggregateInputType
  }

  export type GetFacturaAggregateType<T extends FacturaAggregateArgs> = {
        [P in keyof T & keyof AggregateFactura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFactura[P]>
      : GetScalarType<T[P], AggregateFactura[P]>
  }




  export type FacturaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacturaWhereInput
    orderBy?: FacturaOrderByWithAggregationInput | FacturaOrderByWithAggregationInput[]
    by: FacturaScalarFieldEnum[] | FacturaScalarFieldEnum
    having?: FacturaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacturaCountAggregateInputType | true
    _avg?: FacturaAvgAggregateInputType
    _sum?: FacturaSumAggregateInputType
    _min?: FacturaMinAggregateInputType
    _max?: FacturaMaxAggregateInputType
  }

  export type FacturaGroupByOutputType = {
    id_factura: number
    fk_cuenta: number
    fk_timbrado: number
    fecha_emision: Date
    condicion_venta: string
    total: number
    fk_usuario: number
    _count: FacturaCountAggregateOutputType | null
    _avg: FacturaAvgAggregateOutputType | null
    _sum: FacturaSumAggregateOutputType | null
    _min: FacturaMinAggregateOutputType | null
    _max: FacturaMaxAggregateOutputType | null
  }

  type GetFacturaGroupByPayload<T extends FacturaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacturaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacturaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacturaGroupByOutputType[P]>
            : GetScalarType<T[P], FacturaGroupByOutputType[P]>
        }
      >
    >


  export type FacturaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_factura?: boolean
    fk_cuenta?: boolean
    fk_timbrado?: boolean
    fecha_emision?: boolean
    condicion_venta?: boolean
    total?: boolean
    fk_usuario?: boolean
    cuenta?: boolean | Factura$cuentaArgs<ExtArgs>
    timbrado?: boolean | TimbradoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    detalles?: boolean | Factura$detallesArgs<ExtArgs>
    _count?: boolean | FacturaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factura"]>

  export type FacturaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_factura?: boolean
    fk_cuenta?: boolean
    fk_timbrado?: boolean
    fecha_emision?: boolean
    condicion_venta?: boolean
    total?: boolean
    fk_usuario?: boolean
    cuenta?: boolean | Factura$cuentaArgs<ExtArgs>
    timbrado?: boolean | TimbradoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factura"]>

  export type FacturaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_factura?: boolean
    fk_cuenta?: boolean
    fk_timbrado?: boolean
    fecha_emision?: boolean
    condicion_venta?: boolean
    total?: boolean
    fk_usuario?: boolean
    cuenta?: boolean | Factura$cuentaArgs<ExtArgs>
    timbrado?: boolean | TimbradoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factura"]>

  export type FacturaSelectScalar = {
    id_factura?: boolean
    fk_cuenta?: boolean
    fk_timbrado?: boolean
    fecha_emision?: boolean
    condicion_venta?: boolean
    total?: boolean
    fk_usuario?: boolean
  }

  export type FacturaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_factura" | "fk_cuenta" | "fk_timbrado" | "fecha_emision" | "condicion_venta" | "total" | "fk_usuario", ExtArgs["result"]["factura"]>
  export type FacturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuenta?: boolean | Factura$cuentaArgs<ExtArgs>
    timbrado?: boolean | TimbradoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    detalles?: boolean | Factura$detallesArgs<ExtArgs>
    _count?: boolean | FacturaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FacturaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuenta?: boolean | Factura$cuentaArgs<ExtArgs>
    timbrado?: boolean | TimbradoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type FacturaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuenta?: boolean | Factura$cuentaArgs<ExtArgs>
    timbrado?: boolean | TimbradoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $FacturaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Factura"
    objects: {
      cuenta: Prisma.$CuentaPayload<ExtArgs> | null
      timbrado: Prisma.$TimbradoPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      detalles: Prisma.$DetalleFacturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_factura: number
      fk_cuenta: number
      fk_timbrado: number
      fecha_emision: Date
      condicion_venta: string
      total: number
      fk_usuario: number
    }, ExtArgs["result"]["factura"]>
    composites: {}
  }

  type FacturaGetPayload<S extends boolean | null | undefined | FacturaDefaultArgs> = $Result.GetResult<Prisma.$FacturaPayload, S>

  type FacturaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacturaCountAggregateInputType | true
    }

  export interface FacturaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Factura'], meta: { name: 'Factura' } }
    /**
     * Find zero or one Factura that matches the filter.
     * @param {FacturaFindUniqueArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacturaFindUniqueArgs>(args: SelectSubset<T, FacturaFindUniqueArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Factura that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacturaFindUniqueOrThrowArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacturaFindUniqueOrThrowArgs>(args: SelectSubset<T, FacturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Factura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaFindFirstArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacturaFindFirstArgs>(args?: SelectSubset<T, FacturaFindFirstArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Factura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaFindFirstOrThrowArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacturaFindFirstOrThrowArgs>(args?: SelectSubset<T, FacturaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Facturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facturas
     * const facturas = await prisma.factura.findMany()
     * 
     * // Get first 10 Facturas
     * const facturas = await prisma.factura.findMany({ take: 10 })
     * 
     * // Only select the `id_factura`
     * const facturaWithId_facturaOnly = await prisma.factura.findMany({ select: { id_factura: true } })
     * 
     */
    findMany<T extends FacturaFindManyArgs>(args?: SelectSubset<T, FacturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Factura.
     * @param {FacturaCreateArgs} args - Arguments to create a Factura.
     * @example
     * // Create one Factura
     * const Factura = await prisma.factura.create({
     *   data: {
     *     // ... data to create a Factura
     *   }
     * })
     * 
     */
    create<T extends FacturaCreateArgs>(args: SelectSubset<T, FacturaCreateArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Facturas.
     * @param {FacturaCreateManyArgs} args - Arguments to create many Facturas.
     * @example
     * // Create many Facturas
     * const factura = await prisma.factura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacturaCreateManyArgs>(args?: SelectSubset<T, FacturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Facturas and returns the data saved in the database.
     * @param {FacturaCreateManyAndReturnArgs} args - Arguments to create many Facturas.
     * @example
     * // Create many Facturas
     * const factura = await prisma.factura.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Facturas and only return the `id_factura`
     * const facturaWithId_facturaOnly = await prisma.factura.createManyAndReturn({
     *   select: { id_factura: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacturaCreateManyAndReturnArgs>(args?: SelectSubset<T, FacturaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Factura.
     * @param {FacturaDeleteArgs} args - Arguments to delete one Factura.
     * @example
     * // Delete one Factura
     * const Factura = await prisma.factura.delete({
     *   where: {
     *     // ... filter to delete one Factura
     *   }
     * })
     * 
     */
    delete<T extends FacturaDeleteArgs>(args: SelectSubset<T, FacturaDeleteArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Factura.
     * @param {FacturaUpdateArgs} args - Arguments to update one Factura.
     * @example
     * // Update one Factura
     * const factura = await prisma.factura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacturaUpdateArgs>(args: SelectSubset<T, FacturaUpdateArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Facturas.
     * @param {FacturaDeleteManyArgs} args - Arguments to filter Facturas to delete.
     * @example
     * // Delete a few Facturas
     * const { count } = await prisma.factura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacturaDeleteManyArgs>(args?: SelectSubset<T, FacturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facturas
     * const factura = await prisma.factura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacturaUpdateManyArgs>(args: SelectSubset<T, FacturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facturas and returns the data updated in the database.
     * @param {FacturaUpdateManyAndReturnArgs} args - Arguments to update many Facturas.
     * @example
     * // Update many Facturas
     * const factura = await prisma.factura.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Facturas and only return the `id_factura`
     * const facturaWithId_facturaOnly = await prisma.factura.updateManyAndReturn({
     *   select: { id_factura: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FacturaUpdateManyAndReturnArgs>(args: SelectSubset<T, FacturaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Factura.
     * @param {FacturaUpsertArgs} args - Arguments to update or create a Factura.
     * @example
     * // Update or create a Factura
     * const factura = await prisma.factura.upsert({
     *   create: {
     *     // ... data to create a Factura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Factura we want to update
     *   }
     * })
     */
    upsert<T extends FacturaUpsertArgs>(args: SelectSubset<T, FacturaUpsertArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaCountArgs} args - Arguments to filter Facturas to count.
     * @example
     * // Count the number of Facturas
     * const count = await prisma.factura.count({
     *   where: {
     *     // ... the filter for the Facturas we want to count
     *   }
     * })
    **/
    count<T extends FacturaCountArgs>(
      args?: Subset<T, FacturaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacturaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Factura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacturaAggregateArgs>(args: Subset<T, FacturaAggregateArgs>): Prisma.PrismaPromise<GetFacturaAggregateType<T>>

    /**
     * Group by Factura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacturaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacturaGroupByArgs['orderBy'] }
        : { orderBy?: FacturaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Factura model
   */
  readonly fields: FacturaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Factura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacturaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cuenta<T extends Factura$cuentaArgs<ExtArgs> = {}>(args?: Subset<T, Factura$cuentaArgs<ExtArgs>>): Prisma__CuentaClient<$Result.GetResult<Prisma.$CuentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    timbrado<T extends TimbradoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TimbradoDefaultArgs<ExtArgs>>): Prisma__TimbradoClient<$Result.GetResult<Prisma.$TimbradoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    detalles<T extends Factura$detallesArgs<ExtArgs> = {}>(args?: Subset<T, Factura$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Factura model
   */
  interface FacturaFieldRefs {
    readonly id_factura: FieldRef<"Factura", 'Int'>
    readonly fk_cuenta: FieldRef<"Factura", 'Int'>
    readonly fk_timbrado: FieldRef<"Factura", 'Int'>
    readonly fecha_emision: FieldRef<"Factura", 'DateTime'>
    readonly condicion_venta: FieldRef<"Factura", 'String'>
    readonly total: FieldRef<"Factura", 'Int'>
    readonly fk_usuario: FieldRef<"Factura", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Factura findUnique
   */
  export type FacturaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura findUniqueOrThrow
   */
  export type FacturaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura findFirst
   */
  export type FacturaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facturas.
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facturas.
     */
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Factura findFirstOrThrow
   */
  export type FacturaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facturas.
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facturas.
     */
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Factura findMany
   */
  export type FacturaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Facturas to fetch.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Facturas.
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Factura create
   */
  export type FacturaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * The data needed to create a Factura.
     */
    data: XOR<FacturaCreateInput, FacturaUncheckedCreateInput>
  }

  /**
   * Factura createMany
   */
  export type FacturaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Facturas.
     */
    data: FacturaCreateManyInput | FacturaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Factura createManyAndReturn
   */
  export type FacturaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * The data used to create many Facturas.
     */
    data: FacturaCreateManyInput | FacturaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Factura update
   */
  export type FacturaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * The data needed to update a Factura.
     */
    data: XOR<FacturaUpdateInput, FacturaUncheckedUpdateInput>
    /**
     * Choose, which Factura to update.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura updateMany
   */
  export type FacturaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Facturas.
     */
    data: XOR<FacturaUpdateManyMutationInput, FacturaUncheckedUpdateManyInput>
    /**
     * Filter which Facturas to update
     */
    where?: FacturaWhereInput
    /**
     * Limit how many Facturas to update.
     */
    limit?: number
  }

  /**
   * Factura updateManyAndReturn
   */
  export type FacturaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * The data used to update Facturas.
     */
    data: XOR<FacturaUpdateManyMutationInput, FacturaUncheckedUpdateManyInput>
    /**
     * Filter which Facturas to update
     */
    where?: FacturaWhereInput
    /**
     * Limit how many Facturas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Factura upsert
   */
  export type FacturaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * The filter to search for the Factura to update in case it exists.
     */
    where: FacturaWhereUniqueInput
    /**
     * In case the Factura found by the `where` argument doesn't exist, create a new Factura with this data.
     */
    create: XOR<FacturaCreateInput, FacturaUncheckedCreateInput>
    /**
     * In case the Factura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacturaUpdateInput, FacturaUncheckedUpdateInput>
  }

  /**
   * Factura delete
   */
  export type FacturaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter which Factura to delete.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura deleteMany
   */
  export type FacturaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facturas to delete
     */
    where?: FacturaWhereInput
    /**
     * Limit how many Facturas to delete.
     */
    limit?: number
  }

  /**
   * Factura.cuenta
   */
  export type Factura$cuentaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuenta
     */
    select?: CuentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuenta
     */
    omit?: CuentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuentaInclude<ExtArgs> | null
    where?: CuentaWhereInput
  }

  /**
   * Factura.detalles
   */
  export type Factura$detallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    where?: DetalleFacturaWhereInput
    orderBy?: DetalleFacturaOrderByWithRelationInput | DetalleFacturaOrderByWithRelationInput[]
    cursor?: DetalleFacturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleFacturaScalarFieldEnum | DetalleFacturaScalarFieldEnum[]
  }

  /**
   * Factura without action
   */
  export type FacturaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
  }


  /**
   * Model DetalleFactura
   */

  export type AggregateDetalleFactura = {
    _count: DetalleFacturaCountAggregateOutputType | null
    _avg: DetalleFacturaAvgAggregateOutputType | null
    _sum: DetalleFacturaSumAggregateOutputType | null
    _min: DetalleFacturaMinAggregateOutputType | null
    _max: DetalleFacturaMaxAggregateOutputType | null
  }

  export type DetalleFacturaAvgAggregateOutputType = {
    id_detalle_factura: number | null
    fk_factura: number | null
    cantidad: number | null
    precio_unitario: number | null
    descuento: number | null
    porcentaje_iva: number | null
  }

  export type DetalleFacturaSumAggregateOutputType = {
    id_detalle_factura: number | null
    fk_factura: number | null
    cantidad: number | null
    precio_unitario: number | null
    descuento: number | null
    porcentaje_iva: number | null
  }

  export type DetalleFacturaMinAggregateOutputType = {
    id_detalle_factura: number | null
    fk_factura: number | null
    descripcion: string | null
    cantidad: number | null
    precio_unitario: number | null
    descuento: number | null
    porcentaje_iva: number | null
  }

  export type DetalleFacturaMaxAggregateOutputType = {
    id_detalle_factura: number | null
    fk_factura: number | null
    descripcion: string | null
    cantidad: number | null
    precio_unitario: number | null
    descuento: number | null
    porcentaje_iva: number | null
  }

  export type DetalleFacturaCountAggregateOutputType = {
    id_detalle_factura: number
    fk_factura: number
    descripcion: number
    cantidad: number
    precio_unitario: number
    descuento: number
    porcentaje_iva: number
    _all: number
  }


  export type DetalleFacturaAvgAggregateInputType = {
    id_detalle_factura?: true
    fk_factura?: true
    cantidad?: true
    precio_unitario?: true
    descuento?: true
    porcentaje_iva?: true
  }

  export type DetalleFacturaSumAggregateInputType = {
    id_detalle_factura?: true
    fk_factura?: true
    cantidad?: true
    precio_unitario?: true
    descuento?: true
    porcentaje_iva?: true
  }

  export type DetalleFacturaMinAggregateInputType = {
    id_detalle_factura?: true
    fk_factura?: true
    descripcion?: true
    cantidad?: true
    precio_unitario?: true
    descuento?: true
    porcentaje_iva?: true
  }

  export type DetalleFacturaMaxAggregateInputType = {
    id_detalle_factura?: true
    fk_factura?: true
    descripcion?: true
    cantidad?: true
    precio_unitario?: true
    descuento?: true
    porcentaje_iva?: true
  }

  export type DetalleFacturaCountAggregateInputType = {
    id_detalle_factura?: true
    fk_factura?: true
    descripcion?: true
    cantidad?: true
    precio_unitario?: true
    descuento?: true
    porcentaje_iva?: true
    _all?: true
  }

  export type DetalleFacturaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleFactura to aggregate.
     */
    where?: DetalleFacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleFacturas to fetch.
     */
    orderBy?: DetalleFacturaOrderByWithRelationInput | DetalleFacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetalleFacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleFacturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleFacturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetalleFacturas
    **/
    _count?: true | DetalleFacturaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetalleFacturaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetalleFacturaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetalleFacturaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetalleFacturaMaxAggregateInputType
  }

  export type GetDetalleFacturaAggregateType<T extends DetalleFacturaAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalleFactura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalleFactura[P]>
      : GetScalarType<T[P], AggregateDetalleFactura[P]>
  }




  export type DetalleFacturaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleFacturaWhereInput
    orderBy?: DetalleFacturaOrderByWithAggregationInput | DetalleFacturaOrderByWithAggregationInput[]
    by: DetalleFacturaScalarFieldEnum[] | DetalleFacturaScalarFieldEnum
    having?: DetalleFacturaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetalleFacturaCountAggregateInputType | true
    _avg?: DetalleFacturaAvgAggregateInputType
    _sum?: DetalleFacturaSumAggregateInputType
    _min?: DetalleFacturaMinAggregateInputType
    _max?: DetalleFacturaMaxAggregateInputType
  }

  export type DetalleFacturaGroupByOutputType = {
    id_detalle_factura: number
    fk_factura: number
    descripcion: string
    cantidad: number
    precio_unitario: number
    descuento: number
    porcentaje_iva: number
    _count: DetalleFacturaCountAggregateOutputType | null
    _avg: DetalleFacturaAvgAggregateOutputType | null
    _sum: DetalleFacturaSumAggregateOutputType | null
    _min: DetalleFacturaMinAggregateOutputType | null
    _max: DetalleFacturaMaxAggregateOutputType | null
  }

  type GetDetalleFacturaGroupByPayload<T extends DetalleFacturaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetalleFacturaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetalleFacturaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetalleFacturaGroupByOutputType[P]>
            : GetScalarType<T[P], DetalleFacturaGroupByOutputType[P]>
        }
      >
    >


  export type DetalleFacturaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_detalle_factura?: boolean
    fk_factura?: boolean
    descripcion?: boolean
    cantidad?: boolean
    precio_unitario?: boolean
    descuento?: boolean
    porcentaje_iva?: boolean
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleFactura"]>

  export type DetalleFacturaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_detalle_factura?: boolean
    fk_factura?: boolean
    descripcion?: boolean
    cantidad?: boolean
    precio_unitario?: boolean
    descuento?: boolean
    porcentaje_iva?: boolean
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleFactura"]>

  export type DetalleFacturaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_detalle_factura?: boolean
    fk_factura?: boolean
    descripcion?: boolean
    cantidad?: boolean
    precio_unitario?: boolean
    descuento?: boolean
    porcentaje_iva?: boolean
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleFactura"]>

  export type DetalleFacturaSelectScalar = {
    id_detalle_factura?: boolean
    fk_factura?: boolean
    descripcion?: boolean
    cantidad?: boolean
    precio_unitario?: boolean
    descuento?: boolean
    porcentaje_iva?: boolean
  }

  export type DetalleFacturaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_detalle_factura" | "fk_factura" | "descripcion" | "cantidad" | "precio_unitario" | "descuento" | "porcentaje_iva", ExtArgs["result"]["detalleFactura"]>
  export type DetalleFacturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
  }
  export type DetalleFacturaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
  }
  export type DetalleFacturaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
  }

  export type $DetalleFacturaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetalleFactura"
    objects: {
      factura: Prisma.$FacturaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_detalle_factura: number
      fk_factura: number
      descripcion: string
      cantidad: number
      precio_unitario: number
      descuento: number
      porcentaje_iva: number
    }, ExtArgs["result"]["detalleFactura"]>
    composites: {}
  }

  type DetalleFacturaGetPayload<S extends boolean | null | undefined | DetalleFacturaDefaultArgs> = $Result.GetResult<Prisma.$DetalleFacturaPayload, S>

  type DetalleFacturaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetalleFacturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetalleFacturaCountAggregateInputType | true
    }

  export interface DetalleFacturaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetalleFactura'], meta: { name: 'DetalleFactura' } }
    /**
     * Find zero or one DetalleFactura that matches the filter.
     * @param {DetalleFacturaFindUniqueArgs} args - Arguments to find a DetalleFactura
     * @example
     * // Get one DetalleFactura
     * const detalleFactura = await prisma.detalleFactura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetalleFacturaFindUniqueArgs>(args: SelectSubset<T, DetalleFacturaFindUniqueArgs<ExtArgs>>): Prisma__DetalleFacturaClient<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetalleFactura that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetalleFacturaFindUniqueOrThrowArgs} args - Arguments to find a DetalleFactura
     * @example
     * // Get one DetalleFactura
     * const detalleFactura = await prisma.detalleFactura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetalleFacturaFindUniqueOrThrowArgs>(args: SelectSubset<T, DetalleFacturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetalleFacturaClient<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleFactura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleFacturaFindFirstArgs} args - Arguments to find a DetalleFactura
     * @example
     * // Get one DetalleFactura
     * const detalleFactura = await prisma.detalleFactura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetalleFacturaFindFirstArgs>(args?: SelectSubset<T, DetalleFacturaFindFirstArgs<ExtArgs>>): Prisma__DetalleFacturaClient<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleFactura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleFacturaFindFirstOrThrowArgs} args - Arguments to find a DetalleFactura
     * @example
     * // Get one DetalleFactura
     * const detalleFactura = await prisma.detalleFactura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetalleFacturaFindFirstOrThrowArgs>(args?: SelectSubset<T, DetalleFacturaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetalleFacturaClient<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetalleFacturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleFacturaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetalleFacturas
     * const detalleFacturas = await prisma.detalleFactura.findMany()
     * 
     * // Get first 10 DetalleFacturas
     * const detalleFacturas = await prisma.detalleFactura.findMany({ take: 10 })
     * 
     * // Only select the `id_detalle_factura`
     * const detalleFacturaWithId_detalle_facturaOnly = await prisma.detalleFactura.findMany({ select: { id_detalle_factura: true } })
     * 
     */
    findMany<T extends DetalleFacturaFindManyArgs>(args?: SelectSubset<T, DetalleFacturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetalleFactura.
     * @param {DetalleFacturaCreateArgs} args - Arguments to create a DetalleFactura.
     * @example
     * // Create one DetalleFactura
     * const DetalleFactura = await prisma.detalleFactura.create({
     *   data: {
     *     // ... data to create a DetalleFactura
     *   }
     * })
     * 
     */
    create<T extends DetalleFacturaCreateArgs>(args: SelectSubset<T, DetalleFacturaCreateArgs<ExtArgs>>): Prisma__DetalleFacturaClient<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetalleFacturas.
     * @param {DetalleFacturaCreateManyArgs} args - Arguments to create many DetalleFacturas.
     * @example
     * // Create many DetalleFacturas
     * const detalleFactura = await prisma.detalleFactura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetalleFacturaCreateManyArgs>(args?: SelectSubset<T, DetalleFacturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DetalleFacturas and returns the data saved in the database.
     * @param {DetalleFacturaCreateManyAndReturnArgs} args - Arguments to create many DetalleFacturas.
     * @example
     * // Create many DetalleFacturas
     * const detalleFactura = await prisma.detalleFactura.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DetalleFacturas and only return the `id_detalle_factura`
     * const detalleFacturaWithId_detalle_facturaOnly = await prisma.detalleFactura.createManyAndReturn({
     *   select: { id_detalle_factura: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DetalleFacturaCreateManyAndReturnArgs>(args?: SelectSubset<T, DetalleFacturaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DetalleFactura.
     * @param {DetalleFacturaDeleteArgs} args - Arguments to delete one DetalleFactura.
     * @example
     * // Delete one DetalleFactura
     * const DetalleFactura = await prisma.detalleFactura.delete({
     *   where: {
     *     // ... filter to delete one DetalleFactura
     *   }
     * })
     * 
     */
    delete<T extends DetalleFacturaDeleteArgs>(args: SelectSubset<T, DetalleFacturaDeleteArgs<ExtArgs>>): Prisma__DetalleFacturaClient<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetalleFactura.
     * @param {DetalleFacturaUpdateArgs} args - Arguments to update one DetalleFactura.
     * @example
     * // Update one DetalleFactura
     * const detalleFactura = await prisma.detalleFactura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetalleFacturaUpdateArgs>(args: SelectSubset<T, DetalleFacturaUpdateArgs<ExtArgs>>): Prisma__DetalleFacturaClient<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetalleFacturas.
     * @param {DetalleFacturaDeleteManyArgs} args - Arguments to filter DetalleFacturas to delete.
     * @example
     * // Delete a few DetalleFacturas
     * const { count } = await prisma.detalleFactura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetalleFacturaDeleteManyArgs>(args?: SelectSubset<T, DetalleFacturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetalleFacturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleFacturaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetalleFacturas
     * const detalleFactura = await prisma.detalleFactura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetalleFacturaUpdateManyArgs>(args: SelectSubset<T, DetalleFacturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetalleFacturas and returns the data updated in the database.
     * @param {DetalleFacturaUpdateManyAndReturnArgs} args - Arguments to update many DetalleFacturas.
     * @example
     * // Update many DetalleFacturas
     * const detalleFactura = await prisma.detalleFactura.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DetalleFacturas and only return the `id_detalle_factura`
     * const detalleFacturaWithId_detalle_facturaOnly = await prisma.detalleFactura.updateManyAndReturn({
     *   select: { id_detalle_factura: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DetalleFacturaUpdateManyAndReturnArgs>(args: SelectSubset<T, DetalleFacturaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DetalleFactura.
     * @param {DetalleFacturaUpsertArgs} args - Arguments to update or create a DetalleFactura.
     * @example
     * // Update or create a DetalleFactura
     * const detalleFactura = await prisma.detalleFactura.upsert({
     *   create: {
     *     // ... data to create a DetalleFactura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetalleFactura we want to update
     *   }
     * })
     */
    upsert<T extends DetalleFacturaUpsertArgs>(args: SelectSubset<T, DetalleFacturaUpsertArgs<ExtArgs>>): Prisma__DetalleFacturaClient<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetalleFacturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleFacturaCountArgs} args - Arguments to filter DetalleFacturas to count.
     * @example
     * // Count the number of DetalleFacturas
     * const count = await prisma.detalleFactura.count({
     *   where: {
     *     // ... the filter for the DetalleFacturas we want to count
     *   }
     * })
    **/
    count<T extends DetalleFacturaCountArgs>(
      args?: Subset<T, DetalleFacturaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetalleFacturaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetalleFactura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleFacturaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DetalleFacturaAggregateArgs>(args: Subset<T, DetalleFacturaAggregateArgs>): Prisma.PrismaPromise<GetDetalleFacturaAggregateType<T>>

    /**
     * Group by DetalleFactura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleFacturaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DetalleFacturaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetalleFacturaGroupByArgs['orderBy'] }
        : { orderBy?: DetalleFacturaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DetalleFacturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalleFacturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetalleFactura model
   */
  readonly fields: DetalleFacturaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetalleFactura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetalleFacturaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    factura<T extends FacturaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacturaDefaultArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DetalleFactura model
   */
  interface DetalleFacturaFieldRefs {
    readonly id_detalle_factura: FieldRef<"DetalleFactura", 'Int'>
    readonly fk_factura: FieldRef<"DetalleFactura", 'Int'>
    readonly descripcion: FieldRef<"DetalleFactura", 'String'>
    readonly cantidad: FieldRef<"DetalleFactura", 'Int'>
    readonly precio_unitario: FieldRef<"DetalleFactura", 'Int'>
    readonly descuento: FieldRef<"DetalleFactura", 'Int'>
    readonly porcentaje_iva: FieldRef<"DetalleFactura", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DetalleFactura findUnique
   */
  export type DetalleFacturaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleFactura to fetch.
     */
    where: DetalleFacturaWhereUniqueInput
  }

  /**
   * DetalleFactura findUniqueOrThrow
   */
  export type DetalleFacturaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleFactura to fetch.
     */
    where: DetalleFacturaWhereUniqueInput
  }

  /**
   * DetalleFactura findFirst
   */
  export type DetalleFacturaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleFactura to fetch.
     */
    where?: DetalleFacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleFacturas to fetch.
     */
    orderBy?: DetalleFacturaOrderByWithRelationInput | DetalleFacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleFacturas.
     */
    cursor?: DetalleFacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleFacturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleFacturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleFacturas.
     */
    distinct?: DetalleFacturaScalarFieldEnum | DetalleFacturaScalarFieldEnum[]
  }

  /**
   * DetalleFactura findFirstOrThrow
   */
  export type DetalleFacturaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleFactura to fetch.
     */
    where?: DetalleFacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleFacturas to fetch.
     */
    orderBy?: DetalleFacturaOrderByWithRelationInput | DetalleFacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleFacturas.
     */
    cursor?: DetalleFacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleFacturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleFacturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleFacturas.
     */
    distinct?: DetalleFacturaScalarFieldEnum | DetalleFacturaScalarFieldEnum[]
  }

  /**
   * DetalleFactura findMany
   */
  export type DetalleFacturaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleFacturas to fetch.
     */
    where?: DetalleFacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleFacturas to fetch.
     */
    orderBy?: DetalleFacturaOrderByWithRelationInput | DetalleFacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetalleFacturas.
     */
    cursor?: DetalleFacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleFacturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleFacturas.
     */
    skip?: number
    distinct?: DetalleFacturaScalarFieldEnum | DetalleFacturaScalarFieldEnum[]
  }

  /**
   * DetalleFactura create
   */
  export type DetalleFacturaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    /**
     * The data needed to create a DetalleFactura.
     */
    data: XOR<DetalleFacturaCreateInput, DetalleFacturaUncheckedCreateInput>
  }

  /**
   * DetalleFactura createMany
   */
  export type DetalleFacturaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetalleFacturas.
     */
    data: DetalleFacturaCreateManyInput | DetalleFacturaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetalleFactura createManyAndReturn
   */
  export type DetalleFacturaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * The data used to create many DetalleFacturas.
     */
    data: DetalleFacturaCreateManyInput | DetalleFacturaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetalleFactura update
   */
  export type DetalleFacturaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    /**
     * The data needed to update a DetalleFactura.
     */
    data: XOR<DetalleFacturaUpdateInput, DetalleFacturaUncheckedUpdateInput>
    /**
     * Choose, which DetalleFactura to update.
     */
    where: DetalleFacturaWhereUniqueInput
  }

  /**
   * DetalleFactura updateMany
   */
  export type DetalleFacturaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetalleFacturas.
     */
    data: XOR<DetalleFacturaUpdateManyMutationInput, DetalleFacturaUncheckedUpdateManyInput>
    /**
     * Filter which DetalleFacturas to update
     */
    where?: DetalleFacturaWhereInput
    /**
     * Limit how many DetalleFacturas to update.
     */
    limit?: number
  }

  /**
   * DetalleFactura updateManyAndReturn
   */
  export type DetalleFacturaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * The data used to update DetalleFacturas.
     */
    data: XOR<DetalleFacturaUpdateManyMutationInput, DetalleFacturaUncheckedUpdateManyInput>
    /**
     * Filter which DetalleFacturas to update
     */
    where?: DetalleFacturaWhereInput
    /**
     * Limit how many DetalleFacturas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetalleFactura upsert
   */
  export type DetalleFacturaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    /**
     * The filter to search for the DetalleFactura to update in case it exists.
     */
    where: DetalleFacturaWhereUniqueInput
    /**
     * In case the DetalleFactura found by the `where` argument doesn't exist, create a new DetalleFactura with this data.
     */
    create: XOR<DetalleFacturaCreateInput, DetalleFacturaUncheckedCreateInput>
    /**
     * In case the DetalleFactura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetalleFacturaUpdateInput, DetalleFacturaUncheckedUpdateInput>
  }

  /**
   * DetalleFactura delete
   */
  export type DetalleFacturaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    /**
     * Filter which DetalleFactura to delete.
     */
    where: DetalleFacturaWhereUniqueInput
  }

  /**
   * DetalleFactura deleteMany
   */
  export type DetalleFacturaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleFacturas to delete
     */
    where?: DetalleFacturaWhereInput
    /**
     * Limit how many DetalleFacturas to delete.
     */
    limit?: number
  }

  /**
   * DetalleFactura without action
   */
  export type DetalleFacturaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nombre: 'nombre',
    apellido: 'apellido',
    nombre_usuario: 'nombre_usuario',
    contrasena_hash: 'contrasena_hash',
    activo: 'activo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const HuespedScalarFieldEnum: {
    id_huesped: 'id_huesped',
    nombre: 'nombre',
    apellido: 'apellido',
    documento_identidad: 'documento_identidad',
    numero_documento: 'numero_documento',
    ruc: 'ruc',
    nacionalidad: 'nacionalidad',
    telefono: 'telefono',
    email: 'email',
    fecha_nacimiento: 'fecha_nacimiento',
    activo: 'activo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type HuespedScalarFieldEnum = (typeof HuespedScalarFieldEnum)[keyof typeof HuespedScalarFieldEnum]


  export const TipoHabitacionScalarFieldEnum: {
    id_tipo_habitacion: 'id_tipo_habitacion',
    nombre: 'nombre',
    descripcion: 'descripcion',
    capacidad: 'capacidad',
    activo: 'activo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TipoHabitacionScalarFieldEnum = (typeof TipoHabitacionScalarFieldEnum)[keyof typeof TipoHabitacionScalarFieldEnum]


  export const TarifaScalarFieldEnum: {
    id_tarifa: 'id_tarifa',
    fk_tipo_habitacion: 'fk_tipo_habitacion',
    descripcion: 'descripcion',
    precio: 'precio',
    activo: 'activo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TarifaScalarFieldEnum = (typeof TarifaScalarFieldEnum)[keyof typeof TarifaScalarFieldEnum]


  export const HabitacionScalarFieldEnum: {
    id_habitacion: 'id_habitacion',
    numero: 'numero',
    fk_tipo_habitacion: 'fk_tipo_habitacion',
    piso: 'piso',
    estado: 'estado',
    activo: 'activo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type HabitacionScalarFieldEnum = (typeof HabitacionScalarFieldEnum)[keyof typeof HabitacionScalarFieldEnum]


  export const ReservaScalarFieldEnum: {
    id_reserva: 'id_reserva',
    fk_huesped: 'fk_huesped',
    fk_tipo_habitacion: 'fk_tipo_habitacion',
    check_in: 'check_in',
    check_out: 'check_out',
    estado: 'estado',
    fk_usuario: 'fk_usuario',
    activo: 'activo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ReservaScalarFieldEnum = (typeof ReservaScalarFieldEnum)[keyof typeof ReservaScalarFieldEnum]


  export const IngresoScalarFieldEnum: {
    id_ingreso: 'id_ingreso',
    fk_reserva: 'fk_reserva',
    fk_habitacion: 'fk_habitacion',
    fk_huesped: 'fk_huesped',
    fk_tarifa: 'fk_tarifa',
    fecha_ingreso: 'fecha_ingreso',
    estado: 'estado',
    fk_usuario: 'fk_usuario',
    activo: 'activo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type IngresoScalarFieldEnum = (typeof IngresoScalarFieldEnum)[keyof typeof IngresoScalarFieldEnum]


  export const HuespedHabitacionScalarFieldEnum: {
    id_huesped_habitacion: 'id_huesped_habitacion',
    fk_huesped: 'fk_huesped',
    fk_ingreso: 'fk_ingreso',
    activo: 'activo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type HuespedHabitacionScalarFieldEnum = (typeof HuespedHabitacionScalarFieldEnum)[keyof typeof HuespedHabitacionScalarFieldEnum]


  export const CuentaScalarFieldEnum: {
    id_cuenta: 'id_cuenta',
    fk_ingreso: 'fk_ingreso',
    estado: 'estado',
    activo: 'activo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CuentaScalarFieldEnum = (typeof CuentaScalarFieldEnum)[keyof typeof CuentaScalarFieldEnum]


  export const ConsumoScalarFieldEnum: {
    id_consumo: 'id_consumo',
    fk_cuenta: 'fk_cuenta',
    descripcion: 'descripcion',
    cantidad: 'cantidad',
    monto: 'monto',
    fk_usuario: 'fk_usuario',
    activo: 'activo'
  };

  export type ConsumoScalarFieldEnum = (typeof ConsumoScalarFieldEnum)[keyof typeof ConsumoScalarFieldEnum]


  export const TimbradoScalarFieldEnum: {
    id_timbrado: 'id_timbrado',
    fecha_inicio: 'fecha_inicio',
    fecha_fin: 'fecha_fin',
    codigo_sucursal: 'codigo_sucursal',
    codigo_punto_facturacion: 'codigo_punto_facturacion',
    numero_secuencial: 'numero_secuencial',
    activo: 'activo'
  };

  export type TimbradoScalarFieldEnum = (typeof TimbradoScalarFieldEnum)[keyof typeof TimbradoScalarFieldEnum]


  export const FacturaScalarFieldEnum: {
    id_factura: 'id_factura',
    fk_cuenta: 'fk_cuenta',
    fk_timbrado: 'fk_timbrado',
    fecha_emision: 'fecha_emision',
    condicion_venta: 'condicion_venta',
    total: 'total',
    fk_usuario: 'fk_usuario'
  };

  export type FacturaScalarFieldEnum = (typeof FacturaScalarFieldEnum)[keyof typeof FacturaScalarFieldEnum]


  export const DetalleFacturaScalarFieldEnum: {
    id_detalle_factura: 'id_detalle_factura',
    fk_factura: 'fk_factura',
    descripcion: 'descripcion',
    cantidad: 'cantidad',
    precio_unitario: 'precio_unitario',
    descuento: 'descuento',
    porcentaje_iva: 'porcentaje_iva'
  };

  export type DetalleFacturaScalarFieldEnum = (typeof DetalleFacturaScalarFieldEnum)[keyof typeof DetalleFacturaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'DocumentoIdentidad'
   */
  export type EnumDocumentoIdentidadFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentoIdentidad'>
    


  /**
   * Reference to a field of type 'DocumentoIdentidad[]'
   */
  export type ListEnumDocumentoIdentidadFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentoIdentidad[]'>
    


  /**
   * Reference to a field of type 'Nacionalidad'
   */
  export type EnumNacionalidadFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Nacionalidad'>
    


  /**
   * Reference to a field of type 'Nacionalidad[]'
   */
  export type ListEnumNacionalidadFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Nacionalidad[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id_usuario?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    nombre_usuario?: StringFilter<"Usuario"> | string
    contrasena_hash?: StringFilter<"Usuario"> | string
    activo?: BoolFilter<"Usuario"> | boolean
    created_at?: DateTimeFilter<"Usuario"> | Date | string
    updated_at?: DateTimeFilter<"Usuario"> | Date | string
    reservas?: ReservaListRelationFilter
    ingresos?: IngresoListRelationFilter
    consumos?: ConsumoListRelationFilter
    facturas?: FacturaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    nombre_usuario?: SortOrder
    contrasena_hash?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    reservas?: ReservaOrderByRelationAggregateInput
    ingresos?: IngresoOrderByRelationAggregateInput
    consumos?: ConsumoOrderByRelationAggregateInput
    facturas?: FacturaOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    nombre_usuario?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    contrasena_hash?: StringFilter<"Usuario"> | string
    activo?: BoolFilter<"Usuario"> | boolean
    created_at?: DateTimeFilter<"Usuario"> | Date | string
    updated_at?: DateTimeFilter<"Usuario"> | Date | string
    reservas?: ReservaListRelationFilter
    ingresos?: IngresoListRelationFilter
    consumos?: ConsumoListRelationFilter
    facturas?: FacturaListRelationFilter
  }, "id_usuario" | "nombre_usuario">

  export type UsuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    nombre_usuario?: SortOrder
    contrasena_hash?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    apellido?: StringWithAggregatesFilter<"Usuario"> | string
    nombre_usuario?: StringWithAggregatesFilter<"Usuario"> | string
    contrasena_hash?: StringWithAggregatesFilter<"Usuario"> | string
    activo?: BoolWithAggregatesFilter<"Usuario"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type HuespedWhereInput = {
    AND?: HuespedWhereInput | HuespedWhereInput[]
    OR?: HuespedWhereInput[]
    NOT?: HuespedWhereInput | HuespedWhereInput[]
    id_huesped?: IntFilter<"Huesped"> | number
    nombre?: StringFilter<"Huesped"> | string
    apellido?: StringFilter<"Huesped"> | string
    documento_identidad?: EnumDocumentoIdentidadFilter<"Huesped"> | $Enums.DocumentoIdentidad
    numero_documento?: StringFilter<"Huesped"> | string
    ruc?: StringNullableFilter<"Huesped"> | string | null
    nacionalidad?: EnumNacionalidadFilter<"Huesped"> | $Enums.Nacionalidad
    telefono?: StringNullableFilter<"Huesped"> | string | null
    email?: StringNullableFilter<"Huesped"> | string | null
    fecha_nacimiento?: DateTimeFilter<"Huesped"> | Date | string
    activo?: BoolFilter<"Huesped"> | boolean
    created_at?: DateTimeFilter<"Huesped"> | Date | string
    updated_at?: DateTimeFilter<"Huesped"> | Date | string
    reservas?: ReservaListRelationFilter
    ingresos?: IngresoListRelationFilter
    huespedesHabitaciones?: HuespedHabitacionListRelationFilter
  }

  export type HuespedOrderByWithRelationInput = {
    id_huesped?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    documento_identidad?: SortOrder
    numero_documento?: SortOrder
    ruc?: SortOrderInput | SortOrder
    nacionalidad?: SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    fecha_nacimiento?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    reservas?: ReservaOrderByRelationAggregateInput
    ingresos?: IngresoOrderByRelationAggregateInput
    huespedesHabitaciones?: HuespedHabitacionOrderByRelationAggregateInput
  }

  export type HuespedWhereUniqueInput = Prisma.AtLeast<{
    id_huesped?: number
    numero_documento?: string
    AND?: HuespedWhereInput | HuespedWhereInput[]
    OR?: HuespedWhereInput[]
    NOT?: HuespedWhereInput | HuespedWhereInput[]
    nombre?: StringFilter<"Huesped"> | string
    apellido?: StringFilter<"Huesped"> | string
    documento_identidad?: EnumDocumentoIdentidadFilter<"Huesped"> | $Enums.DocumentoIdentidad
    ruc?: StringNullableFilter<"Huesped"> | string | null
    nacionalidad?: EnumNacionalidadFilter<"Huesped"> | $Enums.Nacionalidad
    telefono?: StringNullableFilter<"Huesped"> | string | null
    email?: StringNullableFilter<"Huesped"> | string | null
    fecha_nacimiento?: DateTimeFilter<"Huesped"> | Date | string
    activo?: BoolFilter<"Huesped"> | boolean
    created_at?: DateTimeFilter<"Huesped"> | Date | string
    updated_at?: DateTimeFilter<"Huesped"> | Date | string
    reservas?: ReservaListRelationFilter
    ingresos?: IngresoListRelationFilter
    huespedesHabitaciones?: HuespedHabitacionListRelationFilter
  }, "id_huesped" | "numero_documento">

  export type HuespedOrderByWithAggregationInput = {
    id_huesped?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    documento_identidad?: SortOrder
    numero_documento?: SortOrder
    ruc?: SortOrderInput | SortOrder
    nacionalidad?: SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    fecha_nacimiento?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: HuespedCountOrderByAggregateInput
    _avg?: HuespedAvgOrderByAggregateInput
    _max?: HuespedMaxOrderByAggregateInput
    _min?: HuespedMinOrderByAggregateInput
    _sum?: HuespedSumOrderByAggregateInput
  }

  export type HuespedScalarWhereWithAggregatesInput = {
    AND?: HuespedScalarWhereWithAggregatesInput | HuespedScalarWhereWithAggregatesInput[]
    OR?: HuespedScalarWhereWithAggregatesInput[]
    NOT?: HuespedScalarWhereWithAggregatesInput | HuespedScalarWhereWithAggregatesInput[]
    id_huesped?: IntWithAggregatesFilter<"Huesped"> | number
    nombre?: StringWithAggregatesFilter<"Huesped"> | string
    apellido?: StringWithAggregatesFilter<"Huesped"> | string
    documento_identidad?: EnumDocumentoIdentidadWithAggregatesFilter<"Huesped"> | $Enums.DocumentoIdentidad
    numero_documento?: StringWithAggregatesFilter<"Huesped"> | string
    ruc?: StringNullableWithAggregatesFilter<"Huesped"> | string | null
    nacionalidad?: EnumNacionalidadWithAggregatesFilter<"Huesped"> | $Enums.Nacionalidad
    telefono?: StringNullableWithAggregatesFilter<"Huesped"> | string | null
    email?: StringNullableWithAggregatesFilter<"Huesped"> | string | null
    fecha_nacimiento?: DateTimeWithAggregatesFilter<"Huesped"> | Date | string
    activo?: BoolWithAggregatesFilter<"Huesped"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Huesped"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Huesped"> | Date | string
  }

  export type TipoHabitacionWhereInput = {
    AND?: TipoHabitacionWhereInput | TipoHabitacionWhereInput[]
    OR?: TipoHabitacionWhereInput[]
    NOT?: TipoHabitacionWhereInput | TipoHabitacionWhereInput[]
    id_tipo_habitacion?: IntFilter<"TipoHabitacion"> | number
    nombre?: StringFilter<"TipoHabitacion"> | string
    descripcion?: StringFilter<"TipoHabitacion"> | string
    capacidad?: IntFilter<"TipoHabitacion"> | number
    activo?: BoolFilter<"TipoHabitacion"> | boolean
    created_at?: DateTimeFilter<"TipoHabitacion"> | Date | string
    updated_at?: DateTimeFilter<"TipoHabitacion"> | Date | string
    tarifas?: TarifaListRelationFilter
    habitaciones?: HabitacionListRelationFilter
    reservas?: ReservaListRelationFilter
  }

  export type TipoHabitacionOrderByWithRelationInput = {
    id_tipo_habitacion?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    capacidad?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    tarifas?: TarifaOrderByRelationAggregateInput
    habitaciones?: HabitacionOrderByRelationAggregateInput
    reservas?: ReservaOrderByRelationAggregateInput
  }

  export type TipoHabitacionWhereUniqueInput = Prisma.AtLeast<{
    id_tipo_habitacion?: number
    AND?: TipoHabitacionWhereInput | TipoHabitacionWhereInput[]
    OR?: TipoHabitacionWhereInput[]
    NOT?: TipoHabitacionWhereInput | TipoHabitacionWhereInput[]
    nombre?: StringFilter<"TipoHabitacion"> | string
    descripcion?: StringFilter<"TipoHabitacion"> | string
    capacidad?: IntFilter<"TipoHabitacion"> | number
    activo?: BoolFilter<"TipoHabitacion"> | boolean
    created_at?: DateTimeFilter<"TipoHabitacion"> | Date | string
    updated_at?: DateTimeFilter<"TipoHabitacion"> | Date | string
    tarifas?: TarifaListRelationFilter
    habitaciones?: HabitacionListRelationFilter
    reservas?: ReservaListRelationFilter
  }, "id_tipo_habitacion">

  export type TipoHabitacionOrderByWithAggregationInput = {
    id_tipo_habitacion?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    capacidad?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TipoHabitacionCountOrderByAggregateInput
    _avg?: TipoHabitacionAvgOrderByAggregateInput
    _max?: TipoHabitacionMaxOrderByAggregateInput
    _min?: TipoHabitacionMinOrderByAggregateInput
    _sum?: TipoHabitacionSumOrderByAggregateInput
  }

  export type TipoHabitacionScalarWhereWithAggregatesInput = {
    AND?: TipoHabitacionScalarWhereWithAggregatesInput | TipoHabitacionScalarWhereWithAggregatesInput[]
    OR?: TipoHabitacionScalarWhereWithAggregatesInput[]
    NOT?: TipoHabitacionScalarWhereWithAggregatesInput | TipoHabitacionScalarWhereWithAggregatesInput[]
    id_tipo_habitacion?: IntWithAggregatesFilter<"TipoHabitacion"> | number
    nombre?: StringWithAggregatesFilter<"TipoHabitacion"> | string
    descripcion?: StringWithAggregatesFilter<"TipoHabitacion"> | string
    capacidad?: IntWithAggregatesFilter<"TipoHabitacion"> | number
    activo?: BoolWithAggregatesFilter<"TipoHabitacion"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"TipoHabitacion"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"TipoHabitacion"> | Date | string
  }

  export type TarifaWhereInput = {
    AND?: TarifaWhereInput | TarifaWhereInput[]
    OR?: TarifaWhereInput[]
    NOT?: TarifaWhereInput | TarifaWhereInput[]
    id_tarifa?: IntFilter<"Tarifa"> | number
    fk_tipo_habitacion?: IntFilter<"Tarifa"> | number
    descripcion?: StringFilter<"Tarifa"> | string
    precio?: IntFilter<"Tarifa"> | number
    activo?: BoolFilter<"Tarifa"> | boolean
    created_at?: DateTimeFilter<"Tarifa"> | Date | string
    updated_at?: DateTimeFilter<"Tarifa"> | Date | string
    tipoHabitacion?: XOR<TipoHabitacionScalarRelationFilter, TipoHabitacionWhereInput>
    ingresos?: IngresoListRelationFilter
  }

  export type TarifaOrderByWithRelationInput = {
    id_tarifa?: SortOrder
    fk_tipo_habitacion?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    tipoHabitacion?: TipoHabitacionOrderByWithRelationInput
    ingresos?: IngresoOrderByRelationAggregateInput
  }

  export type TarifaWhereUniqueInput = Prisma.AtLeast<{
    id_tarifa?: number
    AND?: TarifaWhereInput | TarifaWhereInput[]
    OR?: TarifaWhereInput[]
    NOT?: TarifaWhereInput | TarifaWhereInput[]
    fk_tipo_habitacion?: IntFilter<"Tarifa"> | number
    descripcion?: StringFilter<"Tarifa"> | string
    precio?: IntFilter<"Tarifa"> | number
    activo?: BoolFilter<"Tarifa"> | boolean
    created_at?: DateTimeFilter<"Tarifa"> | Date | string
    updated_at?: DateTimeFilter<"Tarifa"> | Date | string
    tipoHabitacion?: XOR<TipoHabitacionScalarRelationFilter, TipoHabitacionWhereInput>
    ingresos?: IngresoListRelationFilter
  }, "id_tarifa">

  export type TarifaOrderByWithAggregationInput = {
    id_tarifa?: SortOrder
    fk_tipo_habitacion?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TarifaCountOrderByAggregateInput
    _avg?: TarifaAvgOrderByAggregateInput
    _max?: TarifaMaxOrderByAggregateInput
    _min?: TarifaMinOrderByAggregateInput
    _sum?: TarifaSumOrderByAggregateInput
  }

  export type TarifaScalarWhereWithAggregatesInput = {
    AND?: TarifaScalarWhereWithAggregatesInput | TarifaScalarWhereWithAggregatesInput[]
    OR?: TarifaScalarWhereWithAggregatesInput[]
    NOT?: TarifaScalarWhereWithAggregatesInput | TarifaScalarWhereWithAggregatesInput[]
    id_tarifa?: IntWithAggregatesFilter<"Tarifa"> | number
    fk_tipo_habitacion?: IntWithAggregatesFilter<"Tarifa"> | number
    descripcion?: StringWithAggregatesFilter<"Tarifa"> | string
    precio?: IntWithAggregatesFilter<"Tarifa"> | number
    activo?: BoolWithAggregatesFilter<"Tarifa"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Tarifa"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Tarifa"> | Date | string
  }

  export type HabitacionWhereInput = {
    AND?: HabitacionWhereInput | HabitacionWhereInput[]
    OR?: HabitacionWhereInput[]
    NOT?: HabitacionWhereInput | HabitacionWhereInput[]
    id_habitacion?: IntFilter<"Habitacion"> | number
    numero?: StringFilter<"Habitacion"> | string
    fk_tipo_habitacion?: IntFilter<"Habitacion"> | number
    piso?: StringFilter<"Habitacion"> | string
    estado?: StringFilter<"Habitacion"> | string
    activo?: BoolFilter<"Habitacion"> | boolean
    created_at?: DateTimeFilter<"Habitacion"> | Date | string
    updated_at?: DateTimeFilter<"Habitacion"> | Date | string
    tipoHabitacion?: XOR<TipoHabitacionScalarRelationFilter, TipoHabitacionWhereInput>
    ingresos?: IngresoListRelationFilter
  }

  export type HabitacionOrderByWithRelationInput = {
    id_habitacion?: SortOrder
    numero?: SortOrder
    fk_tipo_habitacion?: SortOrder
    piso?: SortOrder
    estado?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    tipoHabitacion?: TipoHabitacionOrderByWithRelationInput
    ingresos?: IngresoOrderByRelationAggregateInput
  }

  export type HabitacionWhereUniqueInput = Prisma.AtLeast<{
    id_habitacion?: number
    AND?: HabitacionWhereInput | HabitacionWhereInput[]
    OR?: HabitacionWhereInput[]
    NOT?: HabitacionWhereInput | HabitacionWhereInput[]
    numero?: StringFilter<"Habitacion"> | string
    fk_tipo_habitacion?: IntFilter<"Habitacion"> | number
    piso?: StringFilter<"Habitacion"> | string
    estado?: StringFilter<"Habitacion"> | string
    activo?: BoolFilter<"Habitacion"> | boolean
    created_at?: DateTimeFilter<"Habitacion"> | Date | string
    updated_at?: DateTimeFilter<"Habitacion"> | Date | string
    tipoHabitacion?: XOR<TipoHabitacionScalarRelationFilter, TipoHabitacionWhereInput>
    ingresos?: IngresoListRelationFilter
  }, "id_habitacion">

  export type HabitacionOrderByWithAggregationInput = {
    id_habitacion?: SortOrder
    numero?: SortOrder
    fk_tipo_habitacion?: SortOrder
    piso?: SortOrder
    estado?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: HabitacionCountOrderByAggregateInput
    _avg?: HabitacionAvgOrderByAggregateInput
    _max?: HabitacionMaxOrderByAggregateInput
    _min?: HabitacionMinOrderByAggregateInput
    _sum?: HabitacionSumOrderByAggregateInput
  }

  export type HabitacionScalarWhereWithAggregatesInput = {
    AND?: HabitacionScalarWhereWithAggregatesInput | HabitacionScalarWhereWithAggregatesInput[]
    OR?: HabitacionScalarWhereWithAggregatesInput[]
    NOT?: HabitacionScalarWhereWithAggregatesInput | HabitacionScalarWhereWithAggregatesInput[]
    id_habitacion?: IntWithAggregatesFilter<"Habitacion"> | number
    numero?: StringWithAggregatesFilter<"Habitacion"> | string
    fk_tipo_habitacion?: IntWithAggregatesFilter<"Habitacion"> | number
    piso?: StringWithAggregatesFilter<"Habitacion"> | string
    estado?: StringWithAggregatesFilter<"Habitacion"> | string
    activo?: BoolWithAggregatesFilter<"Habitacion"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Habitacion"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Habitacion"> | Date | string
  }

  export type ReservaWhereInput = {
    AND?: ReservaWhereInput | ReservaWhereInput[]
    OR?: ReservaWhereInput[]
    NOT?: ReservaWhereInput | ReservaWhereInput[]
    id_reserva?: IntFilter<"Reserva"> | number
    fk_huesped?: IntFilter<"Reserva"> | number
    fk_tipo_habitacion?: IntFilter<"Reserva"> | number
    check_in?: DateTimeFilter<"Reserva"> | Date | string
    check_out?: DateTimeFilter<"Reserva"> | Date | string
    estado?: StringFilter<"Reserva"> | string
    fk_usuario?: IntFilter<"Reserva"> | number
    activo?: BoolFilter<"Reserva"> | boolean
    created_at?: DateTimeFilter<"Reserva"> | Date | string
    updated_at?: DateTimeFilter<"Reserva"> | Date | string
    huesped?: XOR<HuespedScalarRelationFilter, HuespedWhereInput>
    tipoHabitacion?: XOR<TipoHabitacionScalarRelationFilter, TipoHabitacionWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    ingreso?: IngresoListRelationFilter
  }

  export type ReservaOrderByWithRelationInput = {
    id_reserva?: SortOrder
    fk_huesped?: SortOrder
    fk_tipo_habitacion?: SortOrder
    check_in?: SortOrder
    check_out?: SortOrder
    estado?: SortOrder
    fk_usuario?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    huesped?: HuespedOrderByWithRelationInput
    tipoHabitacion?: TipoHabitacionOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
    ingreso?: IngresoOrderByRelationAggregateInput
  }

  export type ReservaWhereUniqueInput = Prisma.AtLeast<{
    id_reserva?: number
    AND?: ReservaWhereInput | ReservaWhereInput[]
    OR?: ReservaWhereInput[]
    NOT?: ReservaWhereInput | ReservaWhereInput[]
    fk_huesped?: IntFilter<"Reserva"> | number
    fk_tipo_habitacion?: IntFilter<"Reserva"> | number
    check_in?: DateTimeFilter<"Reserva"> | Date | string
    check_out?: DateTimeFilter<"Reserva"> | Date | string
    estado?: StringFilter<"Reserva"> | string
    fk_usuario?: IntFilter<"Reserva"> | number
    activo?: BoolFilter<"Reserva"> | boolean
    created_at?: DateTimeFilter<"Reserva"> | Date | string
    updated_at?: DateTimeFilter<"Reserva"> | Date | string
    huesped?: XOR<HuespedScalarRelationFilter, HuespedWhereInput>
    tipoHabitacion?: XOR<TipoHabitacionScalarRelationFilter, TipoHabitacionWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    ingreso?: IngresoListRelationFilter
  }, "id_reserva">

  export type ReservaOrderByWithAggregationInput = {
    id_reserva?: SortOrder
    fk_huesped?: SortOrder
    fk_tipo_habitacion?: SortOrder
    check_in?: SortOrder
    check_out?: SortOrder
    estado?: SortOrder
    fk_usuario?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ReservaCountOrderByAggregateInput
    _avg?: ReservaAvgOrderByAggregateInput
    _max?: ReservaMaxOrderByAggregateInput
    _min?: ReservaMinOrderByAggregateInput
    _sum?: ReservaSumOrderByAggregateInput
  }

  export type ReservaScalarWhereWithAggregatesInput = {
    AND?: ReservaScalarWhereWithAggregatesInput | ReservaScalarWhereWithAggregatesInput[]
    OR?: ReservaScalarWhereWithAggregatesInput[]
    NOT?: ReservaScalarWhereWithAggregatesInput | ReservaScalarWhereWithAggregatesInput[]
    id_reserva?: IntWithAggregatesFilter<"Reserva"> | number
    fk_huesped?: IntWithAggregatesFilter<"Reserva"> | number
    fk_tipo_habitacion?: IntWithAggregatesFilter<"Reserva"> | number
    check_in?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
    check_out?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
    estado?: StringWithAggregatesFilter<"Reserva"> | string
    fk_usuario?: IntWithAggregatesFilter<"Reserva"> | number
    activo?: BoolWithAggregatesFilter<"Reserva"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
  }

  export type IngresoWhereInput = {
    AND?: IngresoWhereInput | IngresoWhereInput[]
    OR?: IngresoWhereInput[]
    NOT?: IngresoWhereInput | IngresoWhereInput[]
    id_ingreso?: IntFilter<"Ingreso"> | number
    fk_reserva?: IntNullableFilter<"Ingreso"> | number | null
    fk_habitacion?: IntFilter<"Ingreso"> | number
    fk_huesped?: IntFilter<"Ingreso"> | number
    fk_tarifa?: IntFilter<"Ingreso"> | number
    fecha_ingreso?: DateTimeFilter<"Ingreso"> | Date | string
    estado?: StringFilter<"Ingreso"> | string
    fk_usuario?: IntFilter<"Ingreso"> | number
    activo?: BoolFilter<"Ingreso"> | boolean
    created_at?: DateTimeFilter<"Ingreso"> | Date | string
    updated_at?: DateTimeFilter<"Ingreso"> | Date | string
    reserva?: XOR<ReservaNullableScalarRelationFilter, ReservaWhereInput> | null
    habitacion?: XOR<HabitacionScalarRelationFilter, HabitacionWhereInput>
    huesped?: XOR<HuespedScalarRelationFilter, HuespedWhereInput>
    tarifa?: XOR<TarifaScalarRelationFilter, TarifaWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    huespedesHabitaciones?: HuespedHabitacionListRelationFilter
    cuenta?: CuentaListRelationFilter
  }

  export type IngresoOrderByWithRelationInput = {
    id_ingreso?: SortOrder
    fk_reserva?: SortOrderInput | SortOrder
    fk_habitacion?: SortOrder
    fk_huesped?: SortOrder
    fk_tarifa?: SortOrder
    fecha_ingreso?: SortOrder
    estado?: SortOrder
    fk_usuario?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    reserva?: ReservaOrderByWithRelationInput
    habitacion?: HabitacionOrderByWithRelationInput
    huesped?: HuespedOrderByWithRelationInput
    tarifa?: TarifaOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
    huespedesHabitaciones?: HuespedHabitacionOrderByRelationAggregateInput
    cuenta?: CuentaOrderByRelationAggregateInput
  }

  export type IngresoWhereUniqueInput = Prisma.AtLeast<{
    id_ingreso?: number
    AND?: IngresoWhereInput | IngresoWhereInput[]
    OR?: IngresoWhereInput[]
    NOT?: IngresoWhereInput | IngresoWhereInput[]
    fk_reserva?: IntNullableFilter<"Ingreso"> | number | null
    fk_habitacion?: IntFilter<"Ingreso"> | number
    fk_huesped?: IntFilter<"Ingreso"> | number
    fk_tarifa?: IntFilter<"Ingreso"> | number
    fecha_ingreso?: DateTimeFilter<"Ingreso"> | Date | string
    estado?: StringFilter<"Ingreso"> | string
    fk_usuario?: IntFilter<"Ingreso"> | number
    activo?: BoolFilter<"Ingreso"> | boolean
    created_at?: DateTimeFilter<"Ingreso"> | Date | string
    updated_at?: DateTimeFilter<"Ingreso"> | Date | string
    reserva?: XOR<ReservaNullableScalarRelationFilter, ReservaWhereInput> | null
    habitacion?: XOR<HabitacionScalarRelationFilter, HabitacionWhereInput>
    huesped?: XOR<HuespedScalarRelationFilter, HuespedWhereInput>
    tarifa?: XOR<TarifaScalarRelationFilter, TarifaWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    huespedesHabitaciones?: HuespedHabitacionListRelationFilter
    cuenta?: CuentaListRelationFilter
  }, "id_ingreso">

  export type IngresoOrderByWithAggregationInput = {
    id_ingreso?: SortOrder
    fk_reserva?: SortOrderInput | SortOrder
    fk_habitacion?: SortOrder
    fk_huesped?: SortOrder
    fk_tarifa?: SortOrder
    fecha_ingreso?: SortOrder
    estado?: SortOrder
    fk_usuario?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: IngresoCountOrderByAggregateInput
    _avg?: IngresoAvgOrderByAggregateInput
    _max?: IngresoMaxOrderByAggregateInput
    _min?: IngresoMinOrderByAggregateInput
    _sum?: IngresoSumOrderByAggregateInput
  }

  export type IngresoScalarWhereWithAggregatesInput = {
    AND?: IngresoScalarWhereWithAggregatesInput | IngresoScalarWhereWithAggregatesInput[]
    OR?: IngresoScalarWhereWithAggregatesInput[]
    NOT?: IngresoScalarWhereWithAggregatesInput | IngresoScalarWhereWithAggregatesInput[]
    id_ingreso?: IntWithAggregatesFilter<"Ingreso"> | number
    fk_reserva?: IntNullableWithAggregatesFilter<"Ingreso"> | number | null
    fk_habitacion?: IntWithAggregatesFilter<"Ingreso"> | number
    fk_huesped?: IntWithAggregatesFilter<"Ingreso"> | number
    fk_tarifa?: IntWithAggregatesFilter<"Ingreso"> | number
    fecha_ingreso?: DateTimeWithAggregatesFilter<"Ingreso"> | Date | string
    estado?: StringWithAggregatesFilter<"Ingreso"> | string
    fk_usuario?: IntWithAggregatesFilter<"Ingreso"> | number
    activo?: BoolWithAggregatesFilter<"Ingreso"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Ingreso"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Ingreso"> | Date | string
  }

  export type HuespedHabitacionWhereInput = {
    AND?: HuespedHabitacionWhereInput | HuespedHabitacionWhereInput[]
    OR?: HuespedHabitacionWhereInput[]
    NOT?: HuespedHabitacionWhereInput | HuespedHabitacionWhereInput[]
    id_huesped_habitacion?: IntFilter<"HuespedHabitacion"> | number
    fk_huesped?: IntFilter<"HuespedHabitacion"> | number
    fk_ingreso?: IntFilter<"HuespedHabitacion"> | number
    activo?: BoolFilter<"HuespedHabitacion"> | boolean
    created_at?: DateTimeFilter<"HuespedHabitacion"> | Date | string
    updated_at?: DateTimeFilter<"HuespedHabitacion"> | Date | string
    huesped?: XOR<HuespedScalarRelationFilter, HuespedWhereInput>
    ingreso?: XOR<IngresoScalarRelationFilter, IngresoWhereInput>
  }

  export type HuespedHabitacionOrderByWithRelationInput = {
    id_huesped_habitacion?: SortOrder
    fk_huesped?: SortOrder
    fk_ingreso?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    huesped?: HuespedOrderByWithRelationInput
    ingreso?: IngresoOrderByWithRelationInput
  }

  export type HuespedHabitacionWhereUniqueInput = Prisma.AtLeast<{
    id_huesped_habitacion?: number
    AND?: HuespedHabitacionWhereInput | HuespedHabitacionWhereInput[]
    OR?: HuespedHabitacionWhereInput[]
    NOT?: HuespedHabitacionWhereInput | HuespedHabitacionWhereInput[]
    fk_huesped?: IntFilter<"HuespedHabitacion"> | number
    fk_ingreso?: IntFilter<"HuespedHabitacion"> | number
    activo?: BoolFilter<"HuespedHabitacion"> | boolean
    created_at?: DateTimeFilter<"HuespedHabitacion"> | Date | string
    updated_at?: DateTimeFilter<"HuespedHabitacion"> | Date | string
    huesped?: XOR<HuespedScalarRelationFilter, HuespedWhereInput>
    ingreso?: XOR<IngresoScalarRelationFilter, IngresoWhereInput>
  }, "id_huesped_habitacion">

  export type HuespedHabitacionOrderByWithAggregationInput = {
    id_huesped_habitacion?: SortOrder
    fk_huesped?: SortOrder
    fk_ingreso?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: HuespedHabitacionCountOrderByAggregateInput
    _avg?: HuespedHabitacionAvgOrderByAggregateInput
    _max?: HuespedHabitacionMaxOrderByAggregateInput
    _min?: HuespedHabitacionMinOrderByAggregateInput
    _sum?: HuespedHabitacionSumOrderByAggregateInput
  }

  export type HuespedHabitacionScalarWhereWithAggregatesInput = {
    AND?: HuespedHabitacionScalarWhereWithAggregatesInput | HuespedHabitacionScalarWhereWithAggregatesInput[]
    OR?: HuespedHabitacionScalarWhereWithAggregatesInput[]
    NOT?: HuespedHabitacionScalarWhereWithAggregatesInput | HuespedHabitacionScalarWhereWithAggregatesInput[]
    id_huesped_habitacion?: IntWithAggregatesFilter<"HuespedHabitacion"> | number
    fk_huesped?: IntWithAggregatesFilter<"HuespedHabitacion"> | number
    fk_ingreso?: IntWithAggregatesFilter<"HuespedHabitacion"> | number
    activo?: BoolWithAggregatesFilter<"HuespedHabitacion"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"HuespedHabitacion"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"HuespedHabitacion"> | Date | string
  }

  export type CuentaWhereInput = {
    AND?: CuentaWhereInput | CuentaWhereInput[]
    OR?: CuentaWhereInput[]
    NOT?: CuentaWhereInput | CuentaWhereInput[]
    id_cuenta?: IntFilter<"Cuenta"> | number
    fk_ingreso?: IntFilter<"Cuenta"> | number
    estado?: StringFilter<"Cuenta"> | string
    activo?: BoolFilter<"Cuenta"> | boolean
    created_at?: DateTimeFilter<"Cuenta"> | Date | string
    updated_at?: DateTimeFilter<"Cuenta"> | Date | string
    ingreso?: XOR<IngresoScalarRelationFilter, IngresoWhereInput>
    consumos?: ConsumoListRelationFilter
    factura?: FacturaListRelationFilter
  }

  export type CuentaOrderByWithRelationInput = {
    id_cuenta?: SortOrder
    fk_ingreso?: SortOrder
    estado?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ingreso?: IngresoOrderByWithRelationInput
    consumos?: ConsumoOrderByRelationAggregateInput
    factura?: FacturaOrderByRelationAggregateInput
  }

  export type CuentaWhereUniqueInput = Prisma.AtLeast<{
    id_cuenta?: number
    AND?: CuentaWhereInput | CuentaWhereInput[]
    OR?: CuentaWhereInput[]
    NOT?: CuentaWhereInput | CuentaWhereInput[]
    fk_ingreso?: IntFilter<"Cuenta"> | number
    estado?: StringFilter<"Cuenta"> | string
    activo?: BoolFilter<"Cuenta"> | boolean
    created_at?: DateTimeFilter<"Cuenta"> | Date | string
    updated_at?: DateTimeFilter<"Cuenta"> | Date | string
    ingreso?: XOR<IngresoScalarRelationFilter, IngresoWhereInput>
    consumos?: ConsumoListRelationFilter
    factura?: FacturaListRelationFilter
  }, "id_cuenta">

  export type CuentaOrderByWithAggregationInput = {
    id_cuenta?: SortOrder
    fk_ingreso?: SortOrder
    estado?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CuentaCountOrderByAggregateInput
    _avg?: CuentaAvgOrderByAggregateInput
    _max?: CuentaMaxOrderByAggregateInput
    _min?: CuentaMinOrderByAggregateInput
    _sum?: CuentaSumOrderByAggregateInput
  }

  export type CuentaScalarWhereWithAggregatesInput = {
    AND?: CuentaScalarWhereWithAggregatesInput | CuentaScalarWhereWithAggregatesInput[]
    OR?: CuentaScalarWhereWithAggregatesInput[]
    NOT?: CuentaScalarWhereWithAggregatesInput | CuentaScalarWhereWithAggregatesInput[]
    id_cuenta?: IntWithAggregatesFilter<"Cuenta"> | number
    fk_ingreso?: IntWithAggregatesFilter<"Cuenta"> | number
    estado?: StringWithAggregatesFilter<"Cuenta"> | string
    activo?: BoolWithAggregatesFilter<"Cuenta"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Cuenta"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Cuenta"> | Date | string
  }

  export type ConsumoWhereInput = {
    AND?: ConsumoWhereInput | ConsumoWhereInput[]
    OR?: ConsumoWhereInput[]
    NOT?: ConsumoWhereInput | ConsumoWhereInput[]
    id_consumo?: IntFilter<"Consumo"> | number
    fk_cuenta?: IntFilter<"Consumo"> | number
    descripcion?: StringFilter<"Consumo"> | string
    cantidad?: IntFilter<"Consumo"> | number
    monto?: IntFilter<"Consumo"> | number
    fk_usuario?: IntFilter<"Consumo"> | number
    activo?: BoolFilter<"Consumo"> | boolean
    cuenta?: XOR<CuentaScalarRelationFilter, CuentaWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type ConsumoOrderByWithRelationInput = {
    id_consumo?: SortOrder
    fk_cuenta?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    monto?: SortOrder
    fk_usuario?: SortOrder
    activo?: SortOrder
    cuenta?: CuentaOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type ConsumoWhereUniqueInput = Prisma.AtLeast<{
    id_consumo?: number
    AND?: ConsumoWhereInput | ConsumoWhereInput[]
    OR?: ConsumoWhereInput[]
    NOT?: ConsumoWhereInput | ConsumoWhereInput[]
    fk_cuenta?: IntFilter<"Consumo"> | number
    descripcion?: StringFilter<"Consumo"> | string
    cantidad?: IntFilter<"Consumo"> | number
    monto?: IntFilter<"Consumo"> | number
    fk_usuario?: IntFilter<"Consumo"> | number
    activo?: BoolFilter<"Consumo"> | boolean
    cuenta?: XOR<CuentaScalarRelationFilter, CuentaWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id_consumo">

  export type ConsumoOrderByWithAggregationInput = {
    id_consumo?: SortOrder
    fk_cuenta?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    monto?: SortOrder
    fk_usuario?: SortOrder
    activo?: SortOrder
    _count?: ConsumoCountOrderByAggregateInput
    _avg?: ConsumoAvgOrderByAggregateInput
    _max?: ConsumoMaxOrderByAggregateInput
    _min?: ConsumoMinOrderByAggregateInput
    _sum?: ConsumoSumOrderByAggregateInput
  }

  export type ConsumoScalarWhereWithAggregatesInput = {
    AND?: ConsumoScalarWhereWithAggregatesInput | ConsumoScalarWhereWithAggregatesInput[]
    OR?: ConsumoScalarWhereWithAggregatesInput[]
    NOT?: ConsumoScalarWhereWithAggregatesInput | ConsumoScalarWhereWithAggregatesInput[]
    id_consumo?: IntWithAggregatesFilter<"Consumo"> | number
    fk_cuenta?: IntWithAggregatesFilter<"Consumo"> | number
    descripcion?: StringWithAggregatesFilter<"Consumo"> | string
    cantidad?: IntWithAggregatesFilter<"Consumo"> | number
    monto?: IntWithAggregatesFilter<"Consumo"> | number
    fk_usuario?: IntWithAggregatesFilter<"Consumo"> | number
    activo?: BoolWithAggregatesFilter<"Consumo"> | boolean
  }

  export type TimbradoWhereInput = {
    AND?: TimbradoWhereInput | TimbradoWhereInput[]
    OR?: TimbradoWhereInput[]
    NOT?: TimbradoWhereInput | TimbradoWhereInput[]
    id_timbrado?: IntFilter<"Timbrado"> | number
    fecha_inicio?: DateTimeFilter<"Timbrado"> | Date | string
    fecha_fin?: DateTimeFilter<"Timbrado"> | Date | string
    codigo_sucursal?: IntFilter<"Timbrado"> | number
    codigo_punto_facturacion?: IntFilter<"Timbrado"> | number
    numero_secuencial?: IntFilter<"Timbrado"> | number
    activo?: BoolFilter<"Timbrado"> | boolean
    facturas?: FacturaListRelationFilter
  }

  export type TimbradoOrderByWithRelationInput = {
    id_timbrado?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    codigo_sucursal?: SortOrder
    codigo_punto_facturacion?: SortOrder
    numero_secuencial?: SortOrder
    activo?: SortOrder
    facturas?: FacturaOrderByRelationAggregateInput
  }

  export type TimbradoWhereUniqueInput = Prisma.AtLeast<{
    id_timbrado?: number
    AND?: TimbradoWhereInput | TimbradoWhereInput[]
    OR?: TimbradoWhereInput[]
    NOT?: TimbradoWhereInput | TimbradoWhereInput[]
    fecha_inicio?: DateTimeFilter<"Timbrado"> | Date | string
    fecha_fin?: DateTimeFilter<"Timbrado"> | Date | string
    codigo_sucursal?: IntFilter<"Timbrado"> | number
    codigo_punto_facturacion?: IntFilter<"Timbrado"> | number
    numero_secuencial?: IntFilter<"Timbrado"> | number
    activo?: BoolFilter<"Timbrado"> | boolean
    facturas?: FacturaListRelationFilter
  }, "id_timbrado">

  export type TimbradoOrderByWithAggregationInput = {
    id_timbrado?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    codigo_sucursal?: SortOrder
    codigo_punto_facturacion?: SortOrder
    numero_secuencial?: SortOrder
    activo?: SortOrder
    _count?: TimbradoCountOrderByAggregateInput
    _avg?: TimbradoAvgOrderByAggregateInput
    _max?: TimbradoMaxOrderByAggregateInput
    _min?: TimbradoMinOrderByAggregateInput
    _sum?: TimbradoSumOrderByAggregateInput
  }

  export type TimbradoScalarWhereWithAggregatesInput = {
    AND?: TimbradoScalarWhereWithAggregatesInput | TimbradoScalarWhereWithAggregatesInput[]
    OR?: TimbradoScalarWhereWithAggregatesInput[]
    NOT?: TimbradoScalarWhereWithAggregatesInput | TimbradoScalarWhereWithAggregatesInput[]
    id_timbrado?: IntWithAggregatesFilter<"Timbrado"> | number
    fecha_inicio?: DateTimeWithAggregatesFilter<"Timbrado"> | Date | string
    fecha_fin?: DateTimeWithAggregatesFilter<"Timbrado"> | Date | string
    codigo_sucursal?: IntWithAggregatesFilter<"Timbrado"> | number
    codigo_punto_facturacion?: IntWithAggregatesFilter<"Timbrado"> | number
    numero_secuencial?: IntWithAggregatesFilter<"Timbrado"> | number
    activo?: BoolWithAggregatesFilter<"Timbrado"> | boolean
  }

  export type FacturaWhereInput = {
    AND?: FacturaWhereInput | FacturaWhereInput[]
    OR?: FacturaWhereInput[]
    NOT?: FacturaWhereInput | FacturaWhereInput[]
    id_factura?: IntFilter<"Factura"> | number
    fk_cuenta?: IntFilter<"Factura"> | number
    fk_timbrado?: IntFilter<"Factura"> | number
    fecha_emision?: DateTimeFilter<"Factura"> | Date | string
    condicion_venta?: StringFilter<"Factura"> | string
    total?: IntFilter<"Factura"> | number
    fk_usuario?: IntFilter<"Factura"> | number
    cuenta?: XOR<CuentaNullableScalarRelationFilter, CuentaWhereInput> | null
    timbrado?: XOR<TimbradoScalarRelationFilter, TimbradoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    detalles?: DetalleFacturaListRelationFilter
  }

  export type FacturaOrderByWithRelationInput = {
    id_factura?: SortOrder
    fk_cuenta?: SortOrder
    fk_timbrado?: SortOrder
    fecha_emision?: SortOrder
    condicion_venta?: SortOrder
    total?: SortOrder
    fk_usuario?: SortOrder
    cuenta?: CuentaOrderByWithRelationInput
    timbrado?: TimbradoOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
    detalles?: DetalleFacturaOrderByRelationAggregateInput
  }

  export type FacturaWhereUniqueInput = Prisma.AtLeast<{
    id_factura?: number
    AND?: FacturaWhereInput | FacturaWhereInput[]
    OR?: FacturaWhereInput[]
    NOT?: FacturaWhereInput | FacturaWhereInput[]
    fk_cuenta?: IntFilter<"Factura"> | number
    fk_timbrado?: IntFilter<"Factura"> | number
    fecha_emision?: DateTimeFilter<"Factura"> | Date | string
    condicion_venta?: StringFilter<"Factura"> | string
    total?: IntFilter<"Factura"> | number
    fk_usuario?: IntFilter<"Factura"> | number
    cuenta?: XOR<CuentaNullableScalarRelationFilter, CuentaWhereInput> | null
    timbrado?: XOR<TimbradoScalarRelationFilter, TimbradoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    detalles?: DetalleFacturaListRelationFilter
  }, "id_factura">

  export type FacturaOrderByWithAggregationInput = {
    id_factura?: SortOrder
    fk_cuenta?: SortOrder
    fk_timbrado?: SortOrder
    fecha_emision?: SortOrder
    condicion_venta?: SortOrder
    total?: SortOrder
    fk_usuario?: SortOrder
    _count?: FacturaCountOrderByAggregateInput
    _avg?: FacturaAvgOrderByAggregateInput
    _max?: FacturaMaxOrderByAggregateInput
    _min?: FacturaMinOrderByAggregateInput
    _sum?: FacturaSumOrderByAggregateInput
  }

  export type FacturaScalarWhereWithAggregatesInput = {
    AND?: FacturaScalarWhereWithAggregatesInput | FacturaScalarWhereWithAggregatesInput[]
    OR?: FacturaScalarWhereWithAggregatesInput[]
    NOT?: FacturaScalarWhereWithAggregatesInput | FacturaScalarWhereWithAggregatesInput[]
    id_factura?: IntWithAggregatesFilter<"Factura"> | number
    fk_cuenta?: IntWithAggregatesFilter<"Factura"> | number
    fk_timbrado?: IntWithAggregatesFilter<"Factura"> | number
    fecha_emision?: DateTimeWithAggregatesFilter<"Factura"> | Date | string
    condicion_venta?: StringWithAggregatesFilter<"Factura"> | string
    total?: IntWithAggregatesFilter<"Factura"> | number
    fk_usuario?: IntWithAggregatesFilter<"Factura"> | number
  }

  export type DetalleFacturaWhereInput = {
    AND?: DetalleFacturaWhereInput | DetalleFacturaWhereInput[]
    OR?: DetalleFacturaWhereInput[]
    NOT?: DetalleFacturaWhereInput | DetalleFacturaWhereInput[]
    id_detalle_factura?: IntFilter<"DetalleFactura"> | number
    fk_factura?: IntFilter<"DetalleFactura"> | number
    descripcion?: StringFilter<"DetalleFactura"> | string
    cantidad?: IntFilter<"DetalleFactura"> | number
    precio_unitario?: IntFilter<"DetalleFactura"> | number
    descuento?: IntFilter<"DetalleFactura"> | number
    porcentaje_iva?: IntFilter<"DetalleFactura"> | number
    factura?: XOR<FacturaScalarRelationFilter, FacturaWhereInput>
  }

  export type DetalleFacturaOrderByWithRelationInput = {
    id_detalle_factura?: SortOrder
    fk_factura?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    descuento?: SortOrder
    porcentaje_iva?: SortOrder
    factura?: FacturaOrderByWithRelationInput
  }

  export type DetalleFacturaWhereUniqueInput = Prisma.AtLeast<{
    id_detalle_factura?: number
    AND?: DetalleFacturaWhereInput | DetalleFacturaWhereInput[]
    OR?: DetalleFacturaWhereInput[]
    NOT?: DetalleFacturaWhereInput | DetalleFacturaWhereInput[]
    fk_factura?: IntFilter<"DetalleFactura"> | number
    descripcion?: StringFilter<"DetalleFactura"> | string
    cantidad?: IntFilter<"DetalleFactura"> | number
    precio_unitario?: IntFilter<"DetalleFactura"> | number
    descuento?: IntFilter<"DetalleFactura"> | number
    porcentaje_iva?: IntFilter<"DetalleFactura"> | number
    factura?: XOR<FacturaScalarRelationFilter, FacturaWhereInput>
  }, "id_detalle_factura">

  export type DetalleFacturaOrderByWithAggregationInput = {
    id_detalle_factura?: SortOrder
    fk_factura?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    descuento?: SortOrder
    porcentaje_iva?: SortOrder
    _count?: DetalleFacturaCountOrderByAggregateInput
    _avg?: DetalleFacturaAvgOrderByAggregateInput
    _max?: DetalleFacturaMaxOrderByAggregateInput
    _min?: DetalleFacturaMinOrderByAggregateInput
    _sum?: DetalleFacturaSumOrderByAggregateInput
  }

  export type DetalleFacturaScalarWhereWithAggregatesInput = {
    AND?: DetalleFacturaScalarWhereWithAggregatesInput | DetalleFacturaScalarWhereWithAggregatesInput[]
    OR?: DetalleFacturaScalarWhereWithAggregatesInput[]
    NOT?: DetalleFacturaScalarWhereWithAggregatesInput | DetalleFacturaScalarWhereWithAggregatesInput[]
    id_detalle_factura?: IntWithAggregatesFilter<"DetalleFactura"> | number
    fk_factura?: IntWithAggregatesFilter<"DetalleFactura"> | number
    descripcion?: StringWithAggregatesFilter<"DetalleFactura"> | string
    cantidad?: IntWithAggregatesFilter<"DetalleFactura"> | number
    precio_unitario?: IntWithAggregatesFilter<"DetalleFactura"> | number
    descuento?: IntWithAggregatesFilter<"DetalleFactura"> | number
    porcentaje_iva?: IntWithAggregatesFilter<"DetalleFactura"> | number
  }

  export type UsuarioCreateInput = {
    nombre: string
    apellido: string
    nombre_usuario: string
    contrasena_hash: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reservas?: ReservaCreateNestedManyWithoutUsuarioInput
    ingresos?: IngresoCreateNestedManyWithoutUsuarioInput
    consumos?: ConsumoCreateNestedManyWithoutUsuarioInput
    facturas?: FacturaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    nombre_usuario: string
    contrasena_hash: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reservas?: ReservaUncheckedCreateNestedManyWithoutUsuarioInput
    ingresos?: IngresoUncheckedCreateNestedManyWithoutUsuarioInput
    consumos?: ConsumoUncheckedCreateNestedManyWithoutUsuarioInput
    facturas?: FacturaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    contrasena_hash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUpdateManyWithoutUsuarioNestedInput
    ingresos?: IngresoUpdateManyWithoutUsuarioNestedInput
    consumos?: ConsumoUpdateManyWithoutUsuarioNestedInput
    facturas?: FacturaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    contrasena_hash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUncheckedUpdateManyWithoutUsuarioNestedInput
    ingresos?: IngresoUncheckedUpdateManyWithoutUsuarioNestedInput
    consumos?: ConsumoUncheckedUpdateManyWithoutUsuarioNestedInput
    facturas?: FacturaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    nombre_usuario: string
    contrasena_hash: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    contrasena_hash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    contrasena_hash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HuespedCreateInput = {
    nombre: string
    apellido: string
    documento_identidad: $Enums.DocumentoIdentidad
    numero_documento: string
    ruc?: string | null
    nacionalidad: $Enums.Nacionalidad
    telefono?: string | null
    email?: string | null
    fecha_nacimiento: Date | string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reservas?: ReservaCreateNestedManyWithoutHuespedInput
    ingresos?: IngresoCreateNestedManyWithoutHuespedInput
    huespedesHabitaciones?: HuespedHabitacionCreateNestedManyWithoutHuespedInput
  }

  export type HuespedUncheckedCreateInput = {
    id_huesped?: number
    nombre: string
    apellido: string
    documento_identidad: $Enums.DocumentoIdentidad
    numero_documento: string
    ruc?: string | null
    nacionalidad: $Enums.Nacionalidad
    telefono?: string | null
    email?: string | null
    fecha_nacimiento: Date | string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reservas?: ReservaUncheckedCreateNestedManyWithoutHuespedInput
    ingresos?: IngresoUncheckedCreateNestedManyWithoutHuespedInput
    huespedesHabitaciones?: HuespedHabitacionUncheckedCreateNestedManyWithoutHuespedInput
  }

  export type HuespedUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    documento_identidad?: EnumDocumentoIdentidadFieldUpdateOperationsInput | $Enums.DocumentoIdentidad
    numero_documento?: StringFieldUpdateOperationsInput | string
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    nacionalidad?: EnumNacionalidadFieldUpdateOperationsInput | $Enums.Nacionalidad
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUpdateManyWithoutHuespedNestedInput
    ingresos?: IngresoUpdateManyWithoutHuespedNestedInput
    huespedesHabitaciones?: HuespedHabitacionUpdateManyWithoutHuespedNestedInput
  }

  export type HuespedUncheckedUpdateInput = {
    id_huesped?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    documento_identidad?: EnumDocumentoIdentidadFieldUpdateOperationsInput | $Enums.DocumentoIdentidad
    numero_documento?: StringFieldUpdateOperationsInput | string
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    nacionalidad?: EnumNacionalidadFieldUpdateOperationsInput | $Enums.Nacionalidad
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUncheckedUpdateManyWithoutHuespedNestedInput
    ingresos?: IngresoUncheckedUpdateManyWithoutHuespedNestedInput
    huespedesHabitaciones?: HuespedHabitacionUncheckedUpdateManyWithoutHuespedNestedInput
  }

  export type HuespedCreateManyInput = {
    id_huesped?: number
    nombre: string
    apellido: string
    documento_identidad: $Enums.DocumentoIdentidad
    numero_documento: string
    ruc?: string | null
    nacionalidad: $Enums.Nacionalidad
    telefono?: string | null
    email?: string | null
    fecha_nacimiento: Date | string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HuespedUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    documento_identidad?: EnumDocumentoIdentidadFieldUpdateOperationsInput | $Enums.DocumentoIdentidad
    numero_documento?: StringFieldUpdateOperationsInput | string
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    nacionalidad?: EnumNacionalidadFieldUpdateOperationsInput | $Enums.Nacionalidad
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HuespedUncheckedUpdateManyInput = {
    id_huesped?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    documento_identidad?: EnumDocumentoIdentidadFieldUpdateOperationsInput | $Enums.DocumentoIdentidad
    numero_documento?: StringFieldUpdateOperationsInput | string
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    nacionalidad?: EnumNacionalidadFieldUpdateOperationsInput | $Enums.Nacionalidad
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoHabitacionCreateInput = {
    nombre: string
    descripcion: string
    capacidad: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    tarifas?: TarifaCreateNestedManyWithoutTipoHabitacionInput
    habitaciones?: HabitacionCreateNestedManyWithoutTipoHabitacionInput
    reservas?: ReservaCreateNestedManyWithoutTipoHabitacionInput
  }

  export type TipoHabitacionUncheckedCreateInput = {
    id_tipo_habitacion?: number
    nombre: string
    descripcion: string
    capacidad: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    tarifas?: TarifaUncheckedCreateNestedManyWithoutTipoHabitacionInput
    habitaciones?: HabitacionUncheckedCreateNestedManyWithoutTipoHabitacionInput
    reservas?: ReservaUncheckedCreateNestedManyWithoutTipoHabitacionInput
  }

  export type TipoHabitacionUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tarifas?: TarifaUpdateManyWithoutTipoHabitacionNestedInput
    habitaciones?: HabitacionUpdateManyWithoutTipoHabitacionNestedInput
    reservas?: ReservaUpdateManyWithoutTipoHabitacionNestedInput
  }

  export type TipoHabitacionUncheckedUpdateInput = {
    id_tipo_habitacion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tarifas?: TarifaUncheckedUpdateManyWithoutTipoHabitacionNestedInput
    habitaciones?: HabitacionUncheckedUpdateManyWithoutTipoHabitacionNestedInput
    reservas?: ReservaUncheckedUpdateManyWithoutTipoHabitacionNestedInput
  }

  export type TipoHabitacionCreateManyInput = {
    id_tipo_habitacion?: number
    nombre: string
    descripcion: string
    capacidad: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TipoHabitacionUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoHabitacionUncheckedUpdateManyInput = {
    id_tipo_habitacion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TarifaCreateInput = {
    descripcion: string
    precio: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    tipoHabitacion: TipoHabitacionCreateNestedOneWithoutTarifasInput
    ingresos?: IngresoCreateNestedManyWithoutTarifaInput
  }

  export type TarifaUncheckedCreateInput = {
    id_tarifa?: number
    fk_tipo_habitacion: number
    descripcion: string
    precio: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    ingresos?: IngresoUncheckedCreateNestedManyWithoutTarifaInput
  }

  export type TarifaUpdateInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoHabitacion?: TipoHabitacionUpdateOneRequiredWithoutTarifasNestedInput
    ingresos?: IngresoUpdateManyWithoutTarifaNestedInput
  }

  export type TarifaUncheckedUpdateInput = {
    id_tarifa?: IntFieldUpdateOperationsInput | number
    fk_tipo_habitacion?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingresos?: IngresoUncheckedUpdateManyWithoutTarifaNestedInput
  }

  export type TarifaCreateManyInput = {
    id_tarifa?: number
    fk_tipo_habitacion: number
    descripcion: string
    precio: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TarifaUpdateManyMutationInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TarifaUncheckedUpdateManyInput = {
    id_tarifa?: IntFieldUpdateOperationsInput | number
    fk_tipo_habitacion?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitacionCreateInput = {
    numero: string
    piso: string
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    tipoHabitacion: TipoHabitacionCreateNestedOneWithoutHabitacionesInput
    ingresos?: IngresoCreateNestedManyWithoutHabitacionInput
  }

  export type HabitacionUncheckedCreateInput = {
    id_habitacion?: number
    numero: string
    fk_tipo_habitacion: number
    piso: string
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    ingresos?: IngresoUncheckedCreateNestedManyWithoutHabitacionInput
  }

  export type HabitacionUpdateInput = {
    numero?: StringFieldUpdateOperationsInput | string
    piso?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoHabitacion?: TipoHabitacionUpdateOneRequiredWithoutHabitacionesNestedInput
    ingresos?: IngresoUpdateManyWithoutHabitacionNestedInput
  }

  export type HabitacionUncheckedUpdateInput = {
    id_habitacion?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    fk_tipo_habitacion?: IntFieldUpdateOperationsInput | number
    piso?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingresos?: IngresoUncheckedUpdateManyWithoutHabitacionNestedInput
  }

  export type HabitacionCreateManyInput = {
    id_habitacion?: number
    numero: string
    fk_tipo_habitacion: number
    piso: string
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HabitacionUpdateManyMutationInput = {
    numero?: StringFieldUpdateOperationsInput | string
    piso?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitacionUncheckedUpdateManyInput = {
    id_habitacion?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    fk_tipo_habitacion?: IntFieldUpdateOperationsInput | number
    piso?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaCreateInput = {
    check_in: Date | string
    check_out: Date | string
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    huesped: HuespedCreateNestedOneWithoutReservasInput
    tipoHabitacion: TipoHabitacionCreateNestedOneWithoutReservasInput
    usuario: UsuarioCreateNestedOneWithoutReservasInput
    ingreso?: IngresoCreateNestedManyWithoutReservaInput
  }

  export type ReservaUncheckedCreateInput = {
    id_reserva?: number
    fk_huesped: number
    fk_tipo_habitacion: number
    check_in: Date | string
    check_out: Date | string
    estado: string
    fk_usuario: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    ingreso?: IngresoUncheckedCreateNestedManyWithoutReservaInput
  }

  export type ReservaUpdateInput = {
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    huesped?: HuespedUpdateOneRequiredWithoutReservasNestedInput
    tipoHabitacion?: TipoHabitacionUpdateOneRequiredWithoutReservasNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutReservasNestedInput
    ingreso?: IngresoUpdateManyWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    fk_huesped?: IntFieldUpdateOperationsInput | number
    fk_tipo_habitacion?: IntFieldUpdateOperationsInput | number
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    fk_usuario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingreso?: IngresoUncheckedUpdateManyWithoutReservaNestedInput
  }

  export type ReservaCreateManyInput = {
    id_reserva?: number
    fk_huesped: number
    fk_tipo_habitacion: number
    check_in: Date | string
    check_out: Date | string
    estado: string
    fk_usuario: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReservaUpdateManyMutationInput = {
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaUncheckedUpdateManyInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    fk_huesped?: IntFieldUpdateOperationsInput | number
    fk_tipo_habitacion?: IntFieldUpdateOperationsInput | number
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    fk_usuario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngresoCreateInput = {
    fecha_ingreso: Date | string
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reserva?: ReservaCreateNestedOneWithoutIngresoInput
    habitacion: HabitacionCreateNestedOneWithoutIngresosInput
    huesped: HuespedCreateNestedOneWithoutIngresosInput
    tarifa: TarifaCreateNestedOneWithoutIngresosInput
    usuario: UsuarioCreateNestedOneWithoutIngresosInput
    huespedesHabitaciones?: HuespedHabitacionCreateNestedManyWithoutIngresoInput
    cuenta?: CuentaCreateNestedManyWithoutIngresoInput
  }

  export type IngresoUncheckedCreateInput = {
    id_ingreso?: number
    fk_reserva?: number | null
    fk_habitacion: number
    fk_huesped: number
    fk_tarifa: number
    fecha_ingreso: Date | string
    estado: string
    fk_usuario: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    huespedesHabitaciones?: HuespedHabitacionUncheckedCreateNestedManyWithoutIngresoInput
    cuenta?: CuentaUncheckedCreateNestedManyWithoutIngresoInput
  }

  export type IngresoUpdateInput = {
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reserva?: ReservaUpdateOneWithoutIngresoNestedInput
    habitacion?: HabitacionUpdateOneRequiredWithoutIngresosNestedInput
    huesped?: HuespedUpdateOneRequiredWithoutIngresosNestedInput
    tarifa?: TarifaUpdateOneRequiredWithoutIngresosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutIngresosNestedInput
    huespedesHabitaciones?: HuespedHabitacionUpdateManyWithoutIngresoNestedInput
    cuenta?: CuentaUpdateManyWithoutIngresoNestedInput
  }

  export type IngresoUncheckedUpdateInput = {
    id_ingreso?: IntFieldUpdateOperationsInput | number
    fk_reserva?: NullableIntFieldUpdateOperationsInput | number | null
    fk_habitacion?: IntFieldUpdateOperationsInput | number
    fk_huesped?: IntFieldUpdateOperationsInput | number
    fk_tarifa?: IntFieldUpdateOperationsInput | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    fk_usuario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    huespedesHabitaciones?: HuespedHabitacionUncheckedUpdateManyWithoutIngresoNestedInput
    cuenta?: CuentaUncheckedUpdateManyWithoutIngresoNestedInput
  }

  export type IngresoCreateManyInput = {
    id_ingreso?: number
    fk_reserva?: number | null
    fk_habitacion: number
    fk_huesped: number
    fk_tarifa: number
    fecha_ingreso: Date | string
    estado: string
    fk_usuario: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type IngresoUpdateManyMutationInput = {
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngresoUncheckedUpdateManyInput = {
    id_ingreso?: IntFieldUpdateOperationsInput | number
    fk_reserva?: NullableIntFieldUpdateOperationsInput | number | null
    fk_habitacion?: IntFieldUpdateOperationsInput | number
    fk_huesped?: IntFieldUpdateOperationsInput | number
    fk_tarifa?: IntFieldUpdateOperationsInput | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    fk_usuario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HuespedHabitacionCreateInput = {
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    huesped: HuespedCreateNestedOneWithoutHuespedesHabitacionesInput
    ingreso: IngresoCreateNestedOneWithoutHuespedesHabitacionesInput
  }

  export type HuespedHabitacionUncheckedCreateInput = {
    id_huesped_habitacion?: number
    fk_huesped: number
    fk_ingreso: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HuespedHabitacionUpdateInput = {
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    huesped?: HuespedUpdateOneRequiredWithoutHuespedesHabitacionesNestedInput
    ingreso?: IngresoUpdateOneRequiredWithoutHuespedesHabitacionesNestedInput
  }

  export type HuespedHabitacionUncheckedUpdateInput = {
    id_huesped_habitacion?: IntFieldUpdateOperationsInput | number
    fk_huesped?: IntFieldUpdateOperationsInput | number
    fk_ingreso?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HuespedHabitacionCreateManyInput = {
    id_huesped_habitacion?: number
    fk_huesped: number
    fk_ingreso: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HuespedHabitacionUpdateManyMutationInput = {
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HuespedHabitacionUncheckedUpdateManyInput = {
    id_huesped_habitacion?: IntFieldUpdateOperationsInput | number
    fk_huesped?: IntFieldUpdateOperationsInput | number
    fk_ingreso?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuentaCreateInput = {
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    ingreso: IngresoCreateNestedOneWithoutCuentaInput
    consumos?: ConsumoCreateNestedManyWithoutCuentaInput
    factura?: FacturaCreateNestedManyWithoutCuentaInput
  }

  export type CuentaUncheckedCreateInput = {
    id_cuenta?: number
    fk_ingreso: number
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    consumos?: ConsumoUncheckedCreateNestedManyWithoutCuentaInput
    factura?: FacturaUncheckedCreateNestedManyWithoutCuentaInput
  }

  export type CuentaUpdateInput = {
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingreso?: IngresoUpdateOneRequiredWithoutCuentaNestedInput
    consumos?: ConsumoUpdateManyWithoutCuentaNestedInput
    factura?: FacturaUpdateManyWithoutCuentaNestedInput
  }

  export type CuentaUncheckedUpdateInput = {
    id_cuenta?: IntFieldUpdateOperationsInput | number
    fk_ingreso?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    consumos?: ConsumoUncheckedUpdateManyWithoutCuentaNestedInput
    factura?: FacturaUncheckedUpdateManyWithoutCuentaNestedInput
  }

  export type CuentaCreateManyInput = {
    id_cuenta?: number
    fk_ingreso: number
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CuentaUpdateManyMutationInput = {
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuentaUncheckedUpdateManyInput = {
    id_cuenta?: IntFieldUpdateOperationsInput | number
    fk_ingreso?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsumoCreateInput = {
    descripcion: string
    cantidad: number
    monto: number
    activo?: boolean
    cuenta: CuentaCreateNestedOneWithoutConsumosInput
    usuario: UsuarioCreateNestedOneWithoutConsumosInput
  }

  export type ConsumoUncheckedCreateInput = {
    id_consumo?: number
    fk_cuenta: number
    descripcion: string
    cantidad: number
    monto: number
    fk_usuario: number
    activo?: boolean
  }

  export type ConsumoUpdateInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    monto?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    cuenta?: CuentaUpdateOneRequiredWithoutConsumosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutConsumosNestedInput
  }

  export type ConsumoUncheckedUpdateInput = {
    id_consumo?: IntFieldUpdateOperationsInput | number
    fk_cuenta?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    monto?: IntFieldUpdateOperationsInput | number
    fk_usuario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ConsumoCreateManyInput = {
    id_consumo?: number
    fk_cuenta: number
    descripcion: string
    cantidad: number
    monto: number
    fk_usuario: number
    activo?: boolean
  }

  export type ConsumoUpdateManyMutationInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    monto?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ConsumoUncheckedUpdateManyInput = {
    id_consumo?: IntFieldUpdateOperationsInput | number
    fk_cuenta?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    monto?: IntFieldUpdateOperationsInput | number
    fk_usuario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TimbradoCreateInput = {
    fecha_inicio: Date | string
    fecha_fin: Date | string
    codigo_sucursal: number
    codigo_punto_facturacion: number
    numero_secuencial: number
    activo?: boolean
    facturas?: FacturaCreateNestedManyWithoutTimbradoInput
  }

  export type TimbradoUncheckedCreateInput = {
    id_timbrado?: number
    fecha_inicio: Date | string
    fecha_fin: Date | string
    codigo_sucursal: number
    codigo_punto_facturacion: number
    numero_secuencial: number
    activo?: boolean
    facturas?: FacturaUncheckedCreateNestedManyWithoutTimbradoInput
  }

  export type TimbradoUpdateInput = {
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    codigo_sucursal?: IntFieldUpdateOperationsInput | number
    codigo_punto_facturacion?: IntFieldUpdateOperationsInput | number
    numero_secuencial?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    facturas?: FacturaUpdateManyWithoutTimbradoNestedInput
  }

  export type TimbradoUncheckedUpdateInput = {
    id_timbrado?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    codigo_sucursal?: IntFieldUpdateOperationsInput | number
    codigo_punto_facturacion?: IntFieldUpdateOperationsInput | number
    numero_secuencial?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    facturas?: FacturaUncheckedUpdateManyWithoutTimbradoNestedInput
  }

  export type TimbradoCreateManyInput = {
    id_timbrado?: number
    fecha_inicio: Date | string
    fecha_fin: Date | string
    codigo_sucursal: number
    codigo_punto_facturacion: number
    numero_secuencial: number
    activo?: boolean
  }

  export type TimbradoUpdateManyMutationInput = {
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    codigo_sucursal?: IntFieldUpdateOperationsInput | number
    codigo_punto_facturacion?: IntFieldUpdateOperationsInput | number
    numero_secuencial?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TimbradoUncheckedUpdateManyInput = {
    id_timbrado?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    codigo_sucursal?: IntFieldUpdateOperationsInput | number
    codigo_punto_facturacion?: IntFieldUpdateOperationsInput | number
    numero_secuencial?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FacturaCreateInput = {
    fecha_emision?: Date | string
    condicion_venta: string
    total: number
    cuenta?: CuentaCreateNestedOneWithoutFacturaInput
    timbrado: TimbradoCreateNestedOneWithoutFacturasInput
    usuario: UsuarioCreateNestedOneWithoutFacturasInput
    detalles?: DetalleFacturaCreateNestedManyWithoutFacturaInput
  }

  export type FacturaUncheckedCreateInput = {
    id_factura?: number
    fk_cuenta: number
    fk_timbrado: number
    fecha_emision?: Date | string
    condicion_venta: string
    total: number
    fk_usuario: number
    detalles?: DetalleFacturaUncheckedCreateNestedManyWithoutFacturaInput
  }

  export type FacturaUpdateInput = {
    fecha_emision?: DateTimeFieldUpdateOperationsInput | Date | string
    condicion_venta?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    cuenta?: CuentaUpdateOneWithoutFacturaNestedInput
    timbrado?: TimbradoUpdateOneRequiredWithoutFacturasNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutFacturasNestedInput
    detalles?: DetalleFacturaUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateInput = {
    id_factura?: IntFieldUpdateOperationsInput | number
    fk_cuenta?: IntFieldUpdateOperationsInput | number
    fk_timbrado?: IntFieldUpdateOperationsInput | number
    fecha_emision?: DateTimeFieldUpdateOperationsInput | Date | string
    condicion_venta?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    fk_usuario?: IntFieldUpdateOperationsInput | number
    detalles?: DetalleFacturaUncheckedUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaCreateManyInput = {
    id_factura?: number
    fk_cuenta: number
    fk_timbrado: number
    fecha_emision?: Date | string
    condicion_venta: string
    total: number
    fk_usuario: number
  }

  export type FacturaUpdateManyMutationInput = {
    fecha_emision?: DateTimeFieldUpdateOperationsInput | Date | string
    condicion_venta?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
  }

  export type FacturaUncheckedUpdateManyInput = {
    id_factura?: IntFieldUpdateOperationsInput | number
    fk_cuenta?: IntFieldUpdateOperationsInput | number
    fk_timbrado?: IntFieldUpdateOperationsInput | number
    fecha_emision?: DateTimeFieldUpdateOperationsInput | Date | string
    condicion_venta?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    fk_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleFacturaCreateInput = {
    descripcion: string
    cantidad: number
    precio_unitario: number
    descuento: number
    porcentaje_iva: number
    factura: FacturaCreateNestedOneWithoutDetallesInput
  }

  export type DetalleFacturaUncheckedCreateInput = {
    id_detalle_factura?: number
    fk_factura: number
    descripcion: string
    cantidad: number
    precio_unitario: number
    descuento: number
    porcentaje_iva: number
  }

  export type DetalleFacturaUpdateInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: IntFieldUpdateOperationsInput | number
    descuento?: IntFieldUpdateOperationsInput | number
    porcentaje_iva?: IntFieldUpdateOperationsInput | number
    factura?: FacturaUpdateOneRequiredWithoutDetallesNestedInput
  }

  export type DetalleFacturaUncheckedUpdateInput = {
    id_detalle_factura?: IntFieldUpdateOperationsInput | number
    fk_factura?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: IntFieldUpdateOperationsInput | number
    descuento?: IntFieldUpdateOperationsInput | number
    porcentaje_iva?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleFacturaCreateManyInput = {
    id_detalle_factura?: number
    fk_factura: number
    descripcion: string
    cantidad: number
    precio_unitario: number
    descuento: number
    porcentaje_iva: number
  }

  export type DetalleFacturaUpdateManyMutationInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: IntFieldUpdateOperationsInput | number
    descuento?: IntFieldUpdateOperationsInput | number
    porcentaje_iva?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleFacturaUncheckedUpdateManyInput = {
    id_detalle_factura?: IntFieldUpdateOperationsInput | number
    fk_factura?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: IntFieldUpdateOperationsInput | number
    descuento?: IntFieldUpdateOperationsInput | number
    porcentaje_iva?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ReservaListRelationFilter = {
    every?: ReservaWhereInput
    some?: ReservaWhereInput
    none?: ReservaWhereInput
  }

  export type IngresoListRelationFilter = {
    every?: IngresoWhereInput
    some?: IngresoWhereInput
    none?: IngresoWhereInput
  }

  export type ConsumoListRelationFilter = {
    every?: ConsumoWhereInput
    some?: ConsumoWhereInput
    none?: ConsumoWhereInput
  }

  export type FacturaListRelationFilter = {
    every?: FacturaWhereInput
    some?: FacturaWhereInput
    none?: FacturaWhereInput
  }

  export type ReservaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngresoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConsumoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacturaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    nombre_usuario?: SortOrder
    contrasena_hash?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    nombre_usuario?: SortOrder
    contrasena_hash?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    nombre_usuario?: SortOrder
    contrasena_hash?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumDocumentoIdentidadFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentoIdentidad | EnumDocumentoIdentidadFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentoIdentidad[] | ListEnumDocumentoIdentidadFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentoIdentidad[] | ListEnumDocumentoIdentidadFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentoIdentidadFilter<$PrismaModel> | $Enums.DocumentoIdentidad
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumNacionalidadFilter<$PrismaModel = never> = {
    equals?: $Enums.Nacionalidad | EnumNacionalidadFieldRefInput<$PrismaModel>
    in?: $Enums.Nacionalidad[] | ListEnumNacionalidadFieldRefInput<$PrismaModel>
    notIn?: $Enums.Nacionalidad[] | ListEnumNacionalidadFieldRefInput<$PrismaModel>
    not?: NestedEnumNacionalidadFilter<$PrismaModel> | $Enums.Nacionalidad
  }

  export type HuespedHabitacionListRelationFilter = {
    every?: HuespedHabitacionWhereInput
    some?: HuespedHabitacionWhereInput
    none?: HuespedHabitacionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HuespedHabitacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HuespedCountOrderByAggregateInput = {
    id_huesped?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    documento_identidad?: SortOrder
    numero_documento?: SortOrder
    ruc?: SortOrder
    nacionalidad?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    fecha_nacimiento?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type HuespedAvgOrderByAggregateInput = {
    id_huesped?: SortOrder
  }

  export type HuespedMaxOrderByAggregateInput = {
    id_huesped?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    documento_identidad?: SortOrder
    numero_documento?: SortOrder
    ruc?: SortOrder
    nacionalidad?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    fecha_nacimiento?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type HuespedMinOrderByAggregateInput = {
    id_huesped?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    documento_identidad?: SortOrder
    numero_documento?: SortOrder
    ruc?: SortOrder
    nacionalidad?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    fecha_nacimiento?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type HuespedSumOrderByAggregateInput = {
    id_huesped?: SortOrder
  }

  export type EnumDocumentoIdentidadWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentoIdentidad | EnumDocumentoIdentidadFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentoIdentidad[] | ListEnumDocumentoIdentidadFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentoIdentidad[] | ListEnumDocumentoIdentidadFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentoIdentidadWithAggregatesFilter<$PrismaModel> | $Enums.DocumentoIdentidad
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentoIdentidadFilter<$PrismaModel>
    _max?: NestedEnumDocumentoIdentidadFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumNacionalidadWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Nacionalidad | EnumNacionalidadFieldRefInput<$PrismaModel>
    in?: $Enums.Nacionalidad[] | ListEnumNacionalidadFieldRefInput<$PrismaModel>
    notIn?: $Enums.Nacionalidad[] | ListEnumNacionalidadFieldRefInput<$PrismaModel>
    not?: NestedEnumNacionalidadWithAggregatesFilter<$PrismaModel> | $Enums.Nacionalidad
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNacionalidadFilter<$PrismaModel>
    _max?: NestedEnumNacionalidadFilter<$PrismaModel>
  }

  export type TarifaListRelationFilter = {
    every?: TarifaWhereInput
    some?: TarifaWhereInput
    none?: TarifaWhereInput
  }

  export type HabitacionListRelationFilter = {
    every?: HabitacionWhereInput
    some?: HabitacionWhereInput
    none?: HabitacionWhereInput
  }

  export type TarifaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HabitacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TipoHabitacionCountOrderByAggregateInput = {
    id_tipo_habitacion?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    capacidad?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TipoHabitacionAvgOrderByAggregateInput = {
    id_tipo_habitacion?: SortOrder
    capacidad?: SortOrder
  }

  export type TipoHabitacionMaxOrderByAggregateInput = {
    id_tipo_habitacion?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    capacidad?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TipoHabitacionMinOrderByAggregateInput = {
    id_tipo_habitacion?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    capacidad?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TipoHabitacionSumOrderByAggregateInput = {
    id_tipo_habitacion?: SortOrder
    capacidad?: SortOrder
  }

  export type TipoHabitacionScalarRelationFilter = {
    is?: TipoHabitacionWhereInput
    isNot?: TipoHabitacionWhereInput
  }

  export type TarifaCountOrderByAggregateInput = {
    id_tarifa?: SortOrder
    fk_tipo_habitacion?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TarifaAvgOrderByAggregateInput = {
    id_tarifa?: SortOrder
    fk_tipo_habitacion?: SortOrder
    precio?: SortOrder
  }

  export type TarifaMaxOrderByAggregateInput = {
    id_tarifa?: SortOrder
    fk_tipo_habitacion?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TarifaMinOrderByAggregateInput = {
    id_tarifa?: SortOrder
    fk_tipo_habitacion?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TarifaSumOrderByAggregateInput = {
    id_tarifa?: SortOrder
    fk_tipo_habitacion?: SortOrder
    precio?: SortOrder
  }

  export type HabitacionCountOrderByAggregateInput = {
    id_habitacion?: SortOrder
    numero?: SortOrder
    fk_tipo_habitacion?: SortOrder
    piso?: SortOrder
    estado?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type HabitacionAvgOrderByAggregateInput = {
    id_habitacion?: SortOrder
    fk_tipo_habitacion?: SortOrder
  }

  export type HabitacionMaxOrderByAggregateInput = {
    id_habitacion?: SortOrder
    numero?: SortOrder
    fk_tipo_habitacion?: SortOrder
    piso?: SortOrder
    estado?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type HabitacionMinOrderByAggregateInput = {
    id_habitacion?: SortOrder
    numero?: SortOrder
    fk_tipo_habitacion?: SortOrder
    piso?: SortOrder
    estado?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type HabitacionSumOrderByAggregateInput = {
    id_habitacion?: SortOrder
    fk_tipo_habitacion?: SortOrder
  }

  export type HuespedScalarRelationFilter = {
    is?: HuespedWhereInput
    isNot?: HuespedWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type ReservaCountOrderByAggregateInput = {
    id_reserva?: SortOrder
    fk_huesped?: SortOrder
    fk_tipo_habitacion?: SortOrder
    check_in?: SortOrder
    check_out?: SortOrder
    estado?: SortOrder
    fk_usuario?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReservaAvgOrderByAggregateInput = {
    id_reserva?: SortOrder
    fk_huesped?: SortOrder
    fk_tipo_habitacion?: SortOrder
    fk_usuario?: SortOrder
  }

  export type ReservaMaxOrderByAggregateInput = {
    id_reserva?: SortOrder
    fk_huesped?: SortOrder
    fk_tipo_habitacion?: SortOrder
    check_in?: SortOrder
    check_out?: SortOrder
    estado?: SortOrder
    fk_usuario?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReservaMinOrderByAggregateInput = {
    id_reserva?: SortOrder
    fk_huesped?: SortOrder
    fk_tipo_habitacion?: SortOrder
    check_in?: SortOrder
    check_out?: SortOrder
    estado?: SortOrder
    fk_usuario?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReservaSumOrderByAggregateInput = {
    id_reserva?: SortOrder
    fk_huesped?: SortOrder
    fk_tipo_habitacion?: SortOrder
    fk_usuario?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ReservaNullableScalarRelationFilter = {
    is?: ReservaWhereInput | null
    isNot?: ReservaWhereInput | null
  }

  export type HabitacionScalarRelationFilter = {
    is?: HabitacionWhereInput
    isNot?: HabitacionWhereInput
  }

  export type TarifaScalarRelationFilter = {
    is?: TarifaWhereInput
    isNot?: TarifaWhereInput
  }

  export type CuentaListRelationFilter = {
    every?: CuentaWhereInput
    some?: CuentaWhereInput
    none?: CuentaWhereInput
  }

  export type CuentaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngresoCountOrderByAggregateInput = {
    id_ingreso?: SortOrder
    fk_reserva?: SortOrder
    fk_habitacion?: SortOrder
    fk_huesped?: SortOrder
    fk_tarifa?: SortOrder
    fecha_ingreso?: SortOrder
    estado?: SortOrder
    fk_usuario?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IngresoAvgOrderByAggregateInput = {
    id_ingreso?: SortOrder
    fk_reserva?: SortOrder
    fk_habitacion?: SortOrder
    fk_huesped?: SortOrder
    fk_tarifa?: SortOrder
    fk_usuario?: SortOrder
  }

  export type IngresoMaxOrderByAggregateInput = {
    id_ingreso?: SortOrder
    fk_reserva?: SortOrder
    fk_habitacion?: SortOrder
    fk_huesped?: SortOrder
    fk_tarifa?: SortOrder
    fecha_ingreso?: SortOrder
    estado?: SortOrder
    fk_usuario?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IngresoMinOrderByAggregateInput = {
    id_ingreso?: SortOrder
    fk_reserva?: SortOrder
    fk_habitacion?: SortOrder
    fk_huesped?: SortOrder
    fk_tarifa?: SortOrder
    fecha_ingreso?: SortOrder
    estado?: SortOrder
    fk_usuario?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IngresoSumOrderByAggregateInput = {
    id_ingreso?: SortOrder
    fk_reserva?: SortOrder
    fk_habitacion?: SortOrder
    fk_huesped?: SortOrder
    fk_tarifa?: SortOrder
    fk_usuario?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IngresoScalarRelationFilter = {
    is?: IngresoWhereInput
    isNot?: IngresoWhereInput
  }

  export type HuespedHabitacionCountOrderByAggregateInput = {
    id_huesped_habitacion?: SortOrder
    fk_huesped?: SortOrder
    fk_ingreso?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type HuespedHabitacionAvgOrderByAggregateInput = {
    id_huesped_habitacion?: SortOrder
    fk_huesped?: SortOrder
    fk_ingreso?: SortOrder
  }

  export type HuespedHabitacionMaxOrderByAggregateInput = {
    id_huesped_habitacion?: SortOrder
    fk_huesped?: SortOrder
    fk_ingreso?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type HuespedHabitacionMinOrderByAggregateInput = {
    id_huesped_habitacion?: SortOrder
    fk_huesped?: SortOrder
    fk_ingreso?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type HuespedHabitacionSumOrderByAggregateInput = {
    id_huesped_habitacion?: SortOrder
    fk_huesped?: SortOrder
    fk_ingreso?: SortOrder
  }

  export type CuentaCountOrderByAggregateInput = {
    id_cuenta?: SortOrder
    fk_ingreso?: SortOrder
    estado?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CuentaAvgOrderByAggregateInput = {
    id_cuenta?: SortOrder
    fk_ingreso?: SortOrder
  }

  export type CuentaMaxOrderByAggregateInput = {
    id_cuenta?: SortOrder
    fk_ingreso?: SortOrder
    estado?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CuentaMinOrderByAggregateInput = {
    id_cuenta?: SortOrder
    fk_ingreso?: SortOrder
    estado?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CuentaSumOrderByAggregateInput = {
    id_cuenta?: SortOrder
    fk_ingreso?: SortOrder
  }

  export type CuentaScalarRelationFilter = {
    is?: CuentaWhereInput
    isNot?: CuentaWhereInput
  }

  export type ConsumoCountOrderByAggregateInput = {
    id_consumo?: SortOrder
    fk_cuenta?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    monto?: SortOrder
    fk_usuario?: SortOrder
    activo?: SortOrder
  }

  export type ConsumoAvgOrderByAggregateInput = {
    id_consumo?: SortOrder
    fk_cuenta?: SortOrder
    cantidad?: SortOrder
    monto?: SortOrder
    fk_usuario?: SortOrder
  }

  export type ConsumoMaxOrderByAggregateInput = {
    id_consumo?: SortOrder
    fk_cuenta?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    monto?: SortOrder
    fk_usuario?: SortOrder
    activo?: SortOrder
  }

  export type ConsumoMinOrderByAggregateInput = {
    id_consumo?: SortOrder
    fk_cuenta?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    monto?: SortOrder
    fk_usuario?: SortOrder
    activo?: SortOrder
  }

  export type ConsumoSumOrderByAggregateInput = {
    id_consumo?: SortOrder
    fk_cuenta?: SortOrder
    cantidad?: SortOrder
    monto?: SortOrder
    fk_usuario?: SortOrder
  }

  export type TimbradoCountOrderByAggregateInput = {
    id_timbrado?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    codigo_sucursal?: SortOrder
    codigo_punto_facturacion?: SortOrder
    numero_secuencial?: SortOrder
    activo?: SortOrder
  }

  export type TimbradoAvgOrderByAggregateInput = {
    id_timbrado?: SortOrder
    codigo_sucursal?: SortOrder
    codigo_punto_facturacion?: SortOrder
    numero_secuencial?: SortOrder
  }

  export type TimbradoMaxOrderByAggregateInput = {
    id_timbrado?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    codigo_sucursal?: SortOrder
    codigo_punto_facturacion?: SortOrder
    numero_secuencial?: SortOrder
    activo?: SortOrder
  }

  export type TimbradoMinOrderByAggregateInput = {
    id_timbrado?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    codigo_sucursal?: SortOrder
    codigo_punto_facturacion?: SortOrder
    numero_secuencial?: SortOrder
    activo?: SortOrder
  }

  export type TimbradoSumOrderByAggregateInput = {
    id_timbrado?: SortOrder
    codigo_sucursal?: SortOrder
    codigo_punto_facturacion?: SortOrder
    numero_secuencial?: SortOrder
  }

  export type CuentaNullableScalarRelationFilter = {
    is?: CuentaWhereInput | null
    isNot?: CuentaWhereInput | null
  }

  export type TimbradoScalarRelationFilter = {
    is?: TimbradoWhereInput
    isNot?: TimbradoWhereInput
  }

  export type DetalleFacturaListRelationFilter = {
    every?: DetalleFacturaWhereInput
    some?: DetalleFacturaWhereInput
    none?: DetalleFacturaWhereInput
  }

  export type DetalleFacturaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacturaCountOrderByAggregateInput = {
    id_factura?: SortOrder
    fk_cuenta?: SortOrder
    fk_timbrado?: SortOrder
    fecha_emision?: SortOrder
    condicion_venta?: SortOrder
    total?: SortOrder
    fk_usuario?: SortOrder
  }

  export type FacturaAvgOrderByAggregateInput = {
    id_factura?: SortOrder
    fk_cuenta?: SortOrder
    fk_timbrado?: SortOrder
    total?: SortOrder
    fk_usuario?: SortOrder
  }

  export type FacturaMaxOrderByAggregateInput = {
    id_factura?: SortOrder
    fk_cuenta?: SortOrder
    fk_timbrado?: SortOrder
    fecha_emision?: SortOrder
    condicion_venta?: SortOrder
    total?: SortOrder
    fk_usuario?: SortOrder
  }

  export type FacturaMinOrderByAggregateInput = {
    id_factura?: SortOrder
    fk_cuenta?: SortOrder
    fk_timbrado?: SortOrder
    fecha_emision?: SortOrder
    condicion_venta?: SortOrder
    total?: SortOrder
    fk_usuario?: SortOrder
  }

  export type FacturaSumOrderByAggregateInput = {
    id_factura?: SortOrder
    fk_cuenta?: SortOrder
    fk_timbrado?: SortOrder
    total?: SortOrder
    fk_usuario?: SortOrder
  }

  export type FacturaScalarRelationFilter = {
    is?: FacturaWhereInput
    isNot?: FacturaWhereInput
  }

  export type DetalleFacturaCountOrderByAggregateInput = {
    id_detalle_factura?: SortOrder
    fk_factura?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    descuento?: SortOrder
    porcentaje_iva?: SortOrder
  }

  export type DetalleFacturaAvgOrderByAggregateInput = {
    id_detalle_factura?: SortOrder
    fk_factura?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    descuento?: SortOrder
    porcentaje_iva?: SortOrder
  }

  export type DetalleFacturaMaxOrderByAggregateInput = {
    id_detalle_factura?: SortOrder
    fk_factura?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    descuento?: SortOrder
    porcentaje_iva?: SortOrder
  }

  export type DetalleFacturaMinOrderByAggregateInput = {
    id_detalle_factura?: SortOrder
    fk_factura?: SortOrder
    descripcion?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    descuento?: SortOrder
    porcentaje_iva?: SortOrder
  }

  export type DetalleFacturaSumOrderByAggregateInput = {
    id_detalle_factura?: SortOrder
    fk_factura?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    descuento?: SortOrder
    porcentaje_iva?: SortOrder
  }

  export type ReservaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ReservaCreateWithoutUsuarioInput, ReservaUncheckedCreateWithoutUsuarioInput> | ReservaCreateWithoutUsuarioInput[] | ReservaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutUsuarioInput | ReservaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ReservaCreateManyUsuarioInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type IngresoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<IngresoCreateWithoutUsuarioInput, IngresoUncheckedCreateWithoutUsuarioInput> | IngresoCreateWithoutUsuarioInput[] | IngresoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: IngresoCreateOrConnectWithoutUsuarioInput | IngresoCreateOrConnectWithoutUsuarioInput[]
    createMany?: IngresoCreateManyUsuarioInputEnvelope
    connect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
  }

  export type ConsumoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ConsumoCreateWithoutUsuarioInput, ConsumoUncheckedCreateWithoutUsuarioInput> | ConsumoCreateWithoutUsuarioInput[] | ConsumoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ConsumoCreateOrConnectWithoutUsuarioInput | ConsumoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ConsumoCreateManyUsuarioInputEnvelope
    connect?: ConsumoWhereUniqueInput | ConsumoWhereUniqueInput[]
  }

  export type FacturaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FacturaCreateWithoutUsuarioInput, FacturaUncheckedCreateWithoutUsuarioInput> | FacturaCreateWithoutUsuarioInput[] | FacturaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutUsuarioInput | FacturaCreateOrConnectWithoutUsuarioInput[]
    createMany?: FacturaCreateManyUsuarioInputEnvelope
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ReservaCreateWithoutUsuarioInput, ReservaUncheckedCreateWithoutUsuarioInput> | ReservaCreateWithoutUsuarioInput[] | ReservaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutUsuarioInput | ReservaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ReservaCreateManyUsuarioInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type IngresoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<IngresoCreateWithoutUsuarioInput, IngresoUncheckedCreateWithoutUsuarioInput> | IngresoCreateWithoutUsuarioInput[] | IngresoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: IngresoCreateOrConnectWithoutUsuarioInput | IngresoCreateOrConnectWithoutUsuarioInput[]
    createMany?: IngresoCreateManyUsuarioInputEnvelope
    connect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
  }

  export type ConsumoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ConsumoCreateWithoutUsuarioInput, ConsumoUncheckedCreateWithoutUsuarioInput> | ConsumoCreateWithoutUsuarioInput[] | ConsumoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ConsumoCreateOrConnectWithoutUsuarioInput | ConsumoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ConsumoCreateManyUsuarioInputEnvelope
    connect?: ConsumoWhereUniqueInput | ConsumoWhereUniqueInput[]
  }

  export type FacturaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FacturaCreateWithoutUsuarioInput, FacturaUncheckedCreateWithoutUsuarioInput> | FacturaCreateWithoutUsuarioInput[] | FacturaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutUsuarioInput | FacturaCreateOrConnectWithoutUsuarioInput[]
    createMany?: FacturaCreateManyUsuarioInputEnvelope
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReservaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ReservaCreateWithoutUsuarioInput, ReservaUncheckedCreateWithoutUsuarioInput> | ReservaCreateWithoutUsuarioInput[] | ReservaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutUsuarioInput | ReservaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutUsuarioInput | ReservaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ReservaCreateManyUsuarioInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutUsuarioInput | ReservaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutUsuarioInput | ReservaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type IngresoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<IngresoCreateWithoutUsuarioInput, IngresoUncheckedCreateWithoutUsuarioInput> | IngresoCreateWithoutUsuarioInput[] | IngresoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: IngresoCreateOrConnectWithoutUsuarioInput | IngresoCreateOrConnectWithoutUsuarioInput[]
    upsert?: IngresoUpsertWithWhereUniqueWithoutUsuarioInput | IngresoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: IngresoCreateManyUsuarioInputEnvelope
    set?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    disconnect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    delete?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    connect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    update?: IngresoUpdateWithWhereUniqueWithoutUsuarioInput | IngresoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: IngresoUpdateManyWithWhereWithoutUsuarioInput | IngresoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: IngresoScalarWhereInput | IngresoScalarWhereInput[]
  }

  export type ConsumoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ConsumoCreateWithoutUsuarioInput, ConsumoUncheckedCreateWithoutUsuarioInput> | ConsumoCreateWithoutUsuarioInput[] | ConsumoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ConsumoCreateOrConnectWithoutUsuarioInput | ConsumoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ConsumoUpsertWithWhereUniqueWithoutUsuarioInput | ConsumoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ConsumoCreateManyUsuarioInputEnvelope
    set?: ConsumoWhereUniqueInput | ConsumoWhereUniqueInput[]
    disconnect?: ConsumoWhereUniqueInput | ConsumoWhereUniqueInput[]
    delete?: ConsumoWhereUniqueInput | ConsumoWhereUniqueInput[]
    connect?: ConsumoWhereUniqueInput | ConsumoWhereUniqueInput[]
    update?: ConsumoUpdateWithWhereUniqueWithoutUsuarioInput | ConsumoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ConsumoUpdateManyWithWhereWithoutUsuarioInput | ConsumoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ConsumoScalarWhereInput | ConsumoScalarWhereInput[]
  }

  export type FacturaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FacturaCreateWithoutUsuarioInput, FacturaUncheckedCreateWithoutUsuarioInput> | FacturaCreateWithoutUsuarioInput[] | FacturaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutUsuarioInput | FacturaCreateOrConnectWithoutUsuarioInput[]
    upsert?: FacturaUpsertWithWhereUniqueWithoutUsuarioInput | FacturaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FacturaCreateManyUsuarioInputEnvelope
    set?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    disconnect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    delete?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    update?: FacturaUpdateWithWhereUniqueWithoutUsuarioInput | FacturaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FacturaUpdateManyWithWhereWithoutUsuarioInput | FacturaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReservaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ReservaCreateWithoutUsuarioInput, ReservaUncheckedCreateWithoutUsuarioInput> | ReservaCreateWithoutUsuarioInput[] | ReservaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutUsuarioInput | ReservaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutUsuarioInput | ReservaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ReservaCreateManyUsuarioInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutUsuarioInput | ReservaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutUsuarioInput | ReservaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type IngresoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<IngresoCreateWithoutUsuarioInput, IngresoUncheckedCreateWithoutUsuarioInput> | IngresoCreateWithoutUsuarioInput[] | IngresoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: IngresoCreateOrConnectWithoutUsuarioInput | IngresoCreateOrConnectWithoutUsuarioInput[]
    upsert?: IngresoUpsertWithWhereUniqueWithoutUsuarioInput | IngresoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: IngresoCreateManyUsuarioInputEnvelope
    set?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    disconnect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    delete?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    connect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    update?: IngresoUpdateWithWhereUniqueWithoutUsuarioInput | IngresoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: IngresoUpdateManyWithWhereWithoutUsuarioInput | IngresoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: IngresoScalarWhereInput | IngresoScalarWhereInput[]
  }

  export type ConsumoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ConsumoCreateWithoutUsuarioInput, ConsumoUncheckedCreateWithoutUsuarioInput> | ConsumoCreateWithoutUsuarioInput[] | ConsumoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ConsumoCreateOrConnectWithoutUsuarioInput | ConsumoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ConsumoUpsertWithWhereUniqueWithoutUsuarioInput | ConsumoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ConsumoCreateManyUsuarioInputEnvelope
    set?: ConsumoWhereUniqueInput | ConsumoWhereUniqueInput[]
    disconnect?: ConsumoWhereUniqueInput | ConsumoWhereUniqueInput[]
    delete?: ConsumoWhereUniqueInput | ConsumoWhereUniqueInput[]
    connect?: ConsumoWhereUniqueInput | ConsumoWhereUniqueInput[]
    update?: ConsumoUpdateWithWhereUniqueWithoutUsuarioInput | ConsumoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ConsumoUpdateManyWithWhereWithoutUsuarioInput | ConsumoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ConsumoScalarWhereInput | ConsumoScalarWhereInput[]
  }

  export type FacturaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FacturaCreateWithoutUsuarioInput, FacturaUncheckedCreateWithoutUsuarioInput> | FacturaCreateWithoutUsuarioInput[] | FacturaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutUsuarioInput | FacturaCreateOrConnectWithoutUsuarioInput[]
    upsert?: FacturaUpsertWithWhereUniqueWithoutUsuarioInput | FacturaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FacturaCreateManyUsuarioInputEnvelope
    set?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    disconnect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    delete?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    update?: FacturaUpdateWithWhereUniqueWithoutUsuarioInput | FacturaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FacturaUpdateManyWithWhereWithoutUsuarioInput | FacturaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
  }

  export type ReservaCreateNestedManyWithoutHuespedInput = {
    create?: XOR<ReservaCreateWithoutHuespedInput, ReservaUncheckedCreateWithoutHuespedInput> | ReservaCreateWithoutHuespedInput[] | ReservaUncheckedCreateWithoutHuespedInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutHuespedInput | ReservaCreateOrConnectWithoutHuespedInput[]
    createMany?: ReservaCreateManyHuespedInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type IngresoCreateNestedManyWithoutHuespedInput = {
    create?: XOR<IngresoCreateWithoutHuespedInput, IngresoUncheckedCreateWithoutHuespedInput> | IngresoCreateWithoutHuespedInput[] | IngresoUncheckedCreateWithoutHuespedInput[]
    connectOrCreate?: IngresoCreateOrConnectWithoutHuespedInput | IngresoCreateOrConnectWithoutHuespedInput[]
    createMany?: IngresoCreateManyHuespedInputEnvelope
    connect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
  }

  export type HuespedHabitacionCreateNestedManyWithoutHuespedInput = {
    create?: XOR<HuespedHabitacionCreateWithoutHuespedInput, HuespedHabitacionUncheckedCreateWithoutHuespedInput> | HuespedHabitacionCreateWithoutHuespedInput[] | HuespedHabitacionUncheckedCreateWithoutHuespedInput[]
    connectOrCreate?: HuespedHabitacionCreateOrConnectWithoutHuespedInput | HuespedHabitacionCreateOrConnectWithoutHuespedInput[]
    createMany?: HuespedHabitacionCreateManyHuespedInputEnvelope
    connect?: HuespedHabitacionWhereUniqueInput | HuespedHabitacionWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutHuespedInput = {
    create?: XOR<ReservaCreateWithoutHuespedInput, ReservaUncheckedCreateWithoutHuespedInput> | ReservaCreateWithoutHuespedInput[] | ReservaUncheckedCreateWithoutHuespedInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutHuespedInput | ReservaCreateOrConnectWithoutHuespedInput[]
    createMany?: ReservaCreateManyHuespedInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type IngresoUncheckedCreateNestedManyWithoutHuespedInput = {
    create?: XOR<IngresoCreateWithoutHuespedInput, IngresoUncheckedCreateWithoutHuespedInput> | IngresoCreateWithoutHuespedInput[] | IngresoUncheckedCreateWithoutHuespedInput[]
    connectOrCreate?: IngresoCreateOrConnectWithoutHuespedInput | IngresoCreateOrConnectWithoutHuespedInput[]
    createMany?: IngresoCreateManyHuespedInputEnvelope
    connect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
  }

  export type HuespedHabitacionUncheckedCreateNestedManyWithoutHuespedInput = {
    create?: XOR<HuespedHabitacionCreateWithoutHuespedInput, HuespedHabitacionUncheckedCreateWithoutHuespedInput> | HuespedHabitacionCreateWithoutHuespedInput[] | HuespedHabitacionUncheckedCreateWithoutHuespedInput[]
    connectOrCreate?: HuespedHabitacionCreateOrConnectWithoutHuespedInput | HuespedHabitacionCreateOrConnectWithoutHuespedInput[]
    createMany?: HuespedHabitacionCreateManyHuespedInputEnvelope
    connect?: HuespedHabitacionWhereUniqueInput | HuespedHabitacionWhereUniqueInput[]
  }

  export type EnumDocumentoIdentidadFieldUpdateOperationsInput = {
    set?: $Enums.DocumentoIdentidad
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumNacionalidadFieldUpdateOperationsInput = {
    set?: $Enums.Nacionalidad
  }

  export type ReservaUpdateManyWithoutHuespedNestedInput = {
    create?: XOR<ReservaCreateWithoutHuespedInput, ReservaUncheckedCreateWithoutHuespedInput> | ReservaCreateWithoutHuespedInput[] | ReservaUncheckedCreateWithoutHuespedInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutHuespedInput | ReservaCreateOrConnectWithoutHuespedInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutHuespedInput | ReservaUpsertWithWhereUniqueWithoutHuespedInput[]
    createMany?: ReservaCreateManyHuespedInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutHuespedInput | ReservaUpdateWithWhereUniqueWithoutHuespedInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutHuespedInput | ReservaUpdateManyWithWhereWithoutHuespedInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type IngresoUpdateManyWithoutHuespedNestedInput = {
    create?: XOR<IngresoCreateWithoutHuespedInput, IngresoUncheckedCreateWithoutHuespedInput> | IngresoCreateWithoutHuespedInput[] | IngresoUncheckedCreateWithoutHuespedInput[]
    connectOrCreate?: IngresoCreateOrConnectWithoutHuespedInput | IngresoCreateOrConnectWithoutHuespedInput[]
    upsert?: IngresoUpsertWithWhereUniqueWithoutHuespedInput | IngresoUpsertWithWhereUniqueWithoutHuespedInput[]
    createMany?: IngresoCreateManyHuespedInputEnvelope
    set?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    disconnect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    delete?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    connect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    update?: IngresoUpdateWithWhereUniqueWithoutHuespedInput | IngresoUpdateWithWhereUniqueWithoutHuespedInput[]
    updateMany?: IngresoUpdateManyWithWhereWithoutHuespedInput | IngresoUpdateManyWithWhereWithoutHuespedInput[]
    deleteMany?: IngresoScalarWhereInput | IngresoScalarWhereInput[]
  }

  export type HuespedHabitacionUpdateManyWithoutHuespedNestedInput = {
    create?: XOR<HuespedHabitacionCreateWithoutHuespedInput, HuespedHabitacionUncheckedCreateWithoutHuespedInput> | HuespedHabitacionCreateWithoutHuespedInput[] | HuespedHabitacionUncheckedCreateWithoutHuespedInput[]
    connectOrCreate?: HuespedHabitacionCreateOrConnectWithoutHuespedInput | HuespedHabitacionCreateOrConnectWithoutHuespedInput[]
    upsert?: HuespedHabitacionUpsertWithWhereUniqueWithoutHuespedInput | HuespedHabitacionUpsertWithWhereUniqueWithoutHuespedInput[]
    createMany?: HuespedHabitacionCreateManyHuespedInputEnvelope
    set?: HuespedHabitacionWhereUniqueInput | HuespedHabitacionWhereUniqueInput[]
    disconnect?: HuespedHabitacionWhereUniqueInput | HuespedHabitacionWhereUniqueInput[]
    delete?: HuespedHabitacionWhereUniqueInput | HuespedHabitacionWhereUniqueInput[]
    connect?: HuespedHabitacionWhereUniqueInput | HuespedHabitacionWhereUniqueInput[]
    update?: HuespedHabitacionUpdateWithWhereUniqueWithoutHuespedInput | HuespedHabitacionUpdateWithWhereUniqueWithoutHuespedInput[]
    updateMany?: HuespedHabitacionUpdateManyWithWhereWithoutHuespedInput | HuespedHabitacionUpdateManyWithWhereWithoutHuespedInput[]
    deleteMany?: HuespedHabitacionScalarWhereInput | HuespedHabitacionScalarWhereInput[]
  }

  export type ReservaUncheckedUpdateManyWithoutHuespedNestedInput = {
    create?: XOR<ReservaCreateWithoutHuespedInput, ReservaUncheckedCreateWithoutHuespedInput> | ReservaCreateWithoutHuespedInput[] | ReservaUncheckedCreateWithoutHuespedInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutHuespedInput | ReservaCreateOrConnectWithoutHuespedInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutHuespedInput | ReservaUpsertWithWhereUniqueWithoutHuespedInput[]
    createMany?: ReservaCreateManyHuespedInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutHuespedInput | ReservaUpdateWithWhereUniqueWithoutHuespedInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutHuespedInput | ReservaUpdateManyWithWhereWithoutHuespedInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type IngresoUncheckedUpdateManyWithoutHuespedNestedInput = {
    create?: XOR<IngresoCreateWithoutHuespedInput, IngresoUncheckedCreateWithoutHuespedInput> | IngresoCreateWithoutHuespedInput[] | IngresoUncheckedCreateWithoutHuespedInput[]
    connectOrCreate?: IngresoCreateOrConnectWithoutHuespedInput | IngresoCreateOrConnectWithoutHuespedInput[]
    upsert?: IngresoUpsertWithWhereUniqueWithoutHuespedInput | IngresoUpsertWithWhereUniqueWithoutHuespedInput[]
    createMany?: IngresoCreateManyHuespedInputEnvelope
    set?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    disconnect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    delete?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    connect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    update?: IngresoUpdateWithWhereUniqueWithoutHuespedInput | IngresoUpdateWithWhereUniqueWithoutHuespedInput[]
    updateMany?: IngresoUpdateManyWithWhereWithoutHuespedInput | IngresoUpdateManyWithWhereWithoutHuespedInput[]
    deleteMany?: IngresoScalarWhereInput | IngresoScalarWhereInput[]
  }

  export type HuespedHabitacionUncheckedUpdateManyWithoutHuespedNestedInput = {
    create?: XOR<HuespedHabitacionCreateWithoutHuespedInput, HuespedHabitacionUncheckedCreateWithoutHuespedInput> | HuespedHabitacionCreateWithoutHuespedInput[] | HuespedHabitacionUncheckedCreateWithoutHuespedInput[]
    connectOrCreate?: HuespedHabitacionCreateOrConnectWithoutHuespedInput | HuespedHabitacionCreateOrConnectWithoutHuespedInput[]
    upsert?: HuespedHabitacionUpsertWithWhereUniqueWithoutHuespedInput | HuespedHabitacionUpsertWithWhereUniqueWithoutHuespedInput[]
    createMany?: HuespedHabitacionCreateManyHuespedInputEnvelope
    set?: HuespedHabitacionWhereUniqueInput | HuespedHabitacionWhereUniqueInput[]
    disconnect?: HuespedHabitacionWhereUniqueInput | HuespedHabitacionWhereUniqueInput[]
    delete?: HuespedHabitacionWhereUniqueInput | HuespedHabitacionWhereUniqueInput[]
    connect?: HuespedHabitacionWhereUniqueInput | HuespedHabitacionWhereUniqueInput[]
    update?: HuespedHabitacionUpdateWithWhereUniqueWithoutHuespedInput | HuespedHabitacionUpdateWithWhereUniqueWithoutHuespedInput[]
    updateMany?: HuespedHabitacionUpdateManyWithWhereWithoutHuespedInput | HuespedHabitacionUpdateManyWithWhereWithoutHuespedInput[]
    deleteMany?: HuespedHabitacionScalarWhereInput | HuespedHabitacionScalarWhereInput[]
  }

  export type TarifaCreateNestedManyWithoutTipoHabitacionInput = {
    create?: XOR<TarifaCreateWithoutTipoHabitacionInput, TarifaUncheckedCreateWithoutTipoHabitacionInput> | TarifaCreateWithoutTipoHabitacionInput[] | TarifaUncheckedCreateWithoutTipoHabitacionInput[]
    connectOrCreate?: TarifaCreateOrConnectWithoutTipoHabitacionInput | TarifaCreateOrConnectWithoutTipoHabitacionInput[]
    createMany?: TarifaCreateManyTipoHabitacionInputEnvelope
    connect?: TarifaWhereUniqueInput | TarifaWhereUniqueInput[]
  }

  export type HabitacionCreateNestedManyWithoutTipoHabitacionInput = {
    create?: XOR<HabitacionCreateWithoutTipoHabitacionInput, HabitacionUncheckedCreateWithoutTipoHabitacionInput> | HabitacionCreateWithoutTipoHabitacionInput[] | HabitacionUncheckedCreateWithoutTipoHabitacionInput[]
    connectOrCreate?: HabitacionCreateOrConnectWithoutTipoHabitacionInput | HabitacionCreateOrConnectWithoutTipoHabitacionInput[]
    createMany?: HabitacionCreateManyTipoHabitacionInputEnvelope
    connect?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
  }

  export type ReservaCreateNestedManyWithoutTipoHabitacionInput = {
    create?: XOR<ReservaCreateWithoutTipoHabitacionInput, ReservaUncheckedCreateWithoutTipoHabitacionInput> | ReservaCreateWithoutTipoHabitacionInput[] | ReservaUncheckedCreateWithoutTipoHabitacionInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutTipoHabitacionInput | ReservaCreateOrConnectWithoutTipoHabitacionInput[]
    createMany?: ReservaCreateManyTipoHabitacionInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type TarifaUncheckedCreateNestedManyWithoutTipoHabitacionInput = {
    create?: XOR<TarifaCreateWithoutTipoHabitacionInput, TarifaUncheckedCreateWithoutTipoHabitacionInput> | TarifaCreateWithoutTipoHabitacionInput[] | TarifaUncheckedCreateWithoutTipoHabitacionInput[]
    connectOrCreate?: TarifaCreateOrConnectWithoutTipoHabitacionInput | TarifaCreateOrConnectWithoutTipoHabitacionInput[]
    createMany?: TarifaCreateManyTipoHabitacionInputEnvelope
    connect?: TarifaWhereUniqueInput | TarifaWhereUniqueInput[]
  }

  export type HabitacionUncheckedCreateNestedManyWithoutTipoHabitacionInput = {
    create?: XOR<HabitacionCreateWithoutTipoHabitacionInput, HabitacionUncheckedCreateWithoutTipoHabitacionInput> | HabitacionCreateWithoutTipoHabitacionInput[] | HabitacionUncheckedCreateWithoutTipoHabitacionInput[]
    connectOrCreate?: HabitacionCreateOrConnectWithoutTipoHabitacionInput | HabitacionCreateOrConnectWithoutTipoHabitacionInput[]
    createMany?: HabitacionCreateManyTipoHabitacionInputEnvelope
    connect?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutTipoHabitacionInput = {
    create?: XOR<ReservaCreateWithoutTipoHabitacionInput, ReservaUncheckedCreateWithoutTipoHabitacionInput> | ReservaCreateWithoutTipoHabitacionInput[] | ReservaUncheckedCreateWithoutTipoHabitacionInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutTipoHabitacionInput | ReservaCreateOrConnectWithoutTipoHabitacionInput[]
    createMany?: ReservaCreateManyTipoHabitacionInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type TarifaUpdateManyWithoutTipoHabitacionNestedInput = {
    create?: XOR<TarifaCreateWithoutTipoHabitacionInput, TarifaUncheckedCreateWithoutTipoHabitacionInput> | TarifaCreateWithoutTipoHabitacionInput[] | TarifaUncheckedCreateWithoutTipoHabitacionInput[]
    connectOrCreate?: TarifaCreateOrConnectWithoutTipoHabitacionInput | TarifaCreateOrConnectWithoutTipoHabitacionInput[]
    upsert?: TarifaUpsertWithWhereUniqueWithoutTipoHabitacionInput | TarifaUpsertWithWhereUniqueWithoutTipoHabitacionInput[]
    createMany?: TarifaCreateManyTipoHabitacionInputEnvelope
    set?: TarifaWhereUniqueInput | TarifaWhereUniqueInput[]
    disconnect?: TarifaWhereUniqueInput | TarifaWhereUniqueInput[]
    delete?: TarifaWhereUniqueInput | TarifaWhereUniqueInput[]
    connect?: TarifaWhereUniqueInput | TarifaWhereUniqueInput[]
    update?: TarifaUpdateWithWhereUniqueWithoutTipoHabitacionInput | TarifaUpdateWithWhereUniqueWithoutTipoHabitacionInput[]
    updateMany?: TarifaUpdateManyWithWhereWithoutTipoHabitacionInput | TarifaUpdateManyWithWhereWithoutTipoHabitacionInput[]
    deleteMany?: TarifaScalarWhereInput | TarifaScalarWhereInput[]
  }

  export type HabitacionUpdateManyWithoutTipoHabitacionNestedInput = {
    create?: XOR<HabitacionCreateWithoutTipoHabitacionInput, HabitacionUncheckedCreateWithoutTipoHabitacionInput> | HabitacionCreateWithoutTipoHabitacionInput[] | HabitacionUncheckedCreateWithoutTipoHabitacionInput[]
    connectOrCreate?: HabitacionCreateOrConnectWithoutTipoHabitacionInput | HabitacionCreateOrConnectWithoutTipoHabitacionInput[]
    upsert?: HabitacionUpsertWithWhereUniqueWithoutTipoHabitacionInput | HabitacionUpsertWithWhereUniqueWithoutTipoHabitacionInput[]
    createMany?: HabitacionCreateManyTipoHabitacionInputEnvelope
    set?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
    disconnect?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
    delete?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
    connect?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
    update?: HabitacionUpdateWithWhereUniqueWithoutTipoHabitacionInput | HabitacionUpdateWithWhereUniqueWithoutTipoHabitacionInput[]
    updateMany?: HabitacionUpdateManyWithWhereWithoutTipoHabitacionInput | HabitacionUpdateManyWithWhereWithoutTipoHabitacionInput[]
    deleteMany?: HabitacionScalarWhereInput | HabitacionScalarWhereInput[]
  }

  export type ReservaUpdateManyWithoutTipoHabitacionNestedInput = {
    create?: XOR<ReservaCreateWithoutTipoHabitacionInput, ReservaUncheckedCreateWithoutTipoHabitacionInput> | ReservaCreateWithoutTipoHabitacionInput[] | ReservaUncheckedCreateWithoutTipoHabitacionInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutTipoHabitacionInput | ReservaCreateOrConnectWithoutTipoHabitacionInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutTipoHabitacionInput | ReservaUpsertWithWhereUniqueWithoutTipoHabitacionInput[]
    createMany?: ReservaCreateManyTipoHabitacionInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutTipoHabitacionInput | ReservaUpdateWithWhereUniqueWithoutTipoHabitacionInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutTipoHabitacionInput | ReservaUpdateManyWithWhereWithoutTipoHabitacionInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type TarifaUncheckedUpdateManyWithoutTipoHabitacionNestedInput = {
    create?: XOR<TarifaCreateWithoutTipoHabitacionInput, TarifaUncheckedCreateWithoutTipoHabitacionInput> | TarifaCreateWithoutTipoHabitacionInput[] | TarifaUncheckedCreateWithoutTipoHabitacionInput[]
    connectOrCreate?: TarifaCreateOrConnectWithoutTipoHabitacionInput | TarifaCreateOrConnectWithoutTipoHabitacionInput[]
    upsert?: TarifaUpsertWithWhereUniqueWithoutTipoHabitacionInput | TarifaUpsertWithWhereUniqueWithoutTipoHabitacionInput[]
    createMany?: TarifaCreateManyTipoHabitacionInputEnvelope
    set?: TarifaWhereUniqueInput | TarifaWhereUniqueInput[]
    disconnect?: TarifaWhereUniqueInput | TarifaWhereUniqueInput[]
    delete?: TarifaWhereUniqueInput | TarifaWhereUniqueInput[]
    connect?: TarifaWhereUniqueInput | TarifaWhereUniqueInput[]
    update?: TarifaUpdateWithWhereUniqueWithoutTipoHabitacionInput | TarifaUpdateWithWhereUniqueWithoutTipoHabitacionInput[]
    updateMany?: TarifaUpdateManyWithWhereWithoutTipoHabitacionInput | TarifaUpdateManyWithWhereWithoutTipoHabitacionInput[]
    deleteMany?: TarifaScalarWhereInput | TarifaScalarWhereInput[]
  }

  export type HabitacionUncheckedUpdateManyWithoutTipoHabitacionNestedInput = {
    create?: XOR<HabitacionCreateWithoutTipoHabitacionInput, HabitacionUncheckedCreateWithoutTipoHabitacionInput> | HabitacionCreateWithoutTipoHabitacionInput[] | HabitacionUncheckedCreateWithoutTipoHabitacionInput[]
    connectOrCreate?: HabitacionCreateOrConnectWithoutTipoHabitacionInput | HabitacionCreateOrConnectWithoutTipoHabitacionInput[]
    upsert?: HabitacionUpsertWithWhereUniqueWithoutTipoHabitacionInput | HabitacionUpsertWithWhereUniqueWithoutTipoHabitacionInput[]
    createMany?: HabitacionCreateManyTipoHabitacionInputEnvelope
    set?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
    disconnect?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
    delete?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
    connect?: HabitacionWhereUniqueInput | HabitacionWhereUniqueInput[]
    update?: HabitacionUpdateWithWhereUniqueWithoutTipoHabitacionInput | HabitacionUpdateWithWhereUniqueWithoutTipoHabitacionInput[]
    updateMany?: HabitacionUpdateManyWithWhereWithoutTipoHabitacionInput | HabitacionUpdateManyWithWhereWithoutTipoHabitacionInput[]
    deleteMany?: HabitacionScalarWhereInput | HabitacionScalarWhereInput[]
  }

  export type ReservaUncheckedUpdateManyWithoutTipoHabitacionNestedInput = {
    create?: XOR<ReservaCreateWithoutTipoHabitacionInput, ReservaUncheckedCreateWithoutTipoHabitacionInput> | ReservaCreateWithoutTipoHabitacionInput[] | ReservaUncheckedCreateWithoutTipoHabitacionInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutTipoHabitacionInput | ReservaCreateOrConnectWithoutTipoHabitacionInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutTipoHabitacionInput | ReservaUpsertWithWhereUniqueWithoutTipoHabitacionInput[]
    createMany?: ReservaCreateManyTipoHabitacionInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutTipoHabitacionInput | ReservaUpdateWithWhereUniqueWithoutTipoHabitacionInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutTipoHabitacionInput | ReservaUpdateManyWithWhereWithoutTipoHabitacionInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type TipoHabitacionCreateNestedOneWithoutTarifasInput = {
    create?: XOR<TipoHabitacionCreateWithoutTarifasInput, TipoHabitacionUncheckedCreateWithoutTarifasInput>
    connectOrCreate?: TipoHabitacionCreateOrConnectWithoutTarifasInput
    connect?: TipoHabitacionWhereUniqueInput
  }

  export type IngresoCreateNestedManyWithoutTarifaInput = {
    create?: XOR<IngresoCreateWithoutTarifaInput, IngresoUncheckedCreateWithoutTarifaInput> | IngresoCreateWithoutTarifaInput[] | IngresoUncheckedCreateWithoutTarifaInput[]
    connectOrCreate?: IngresoCreateOrConnectWithoutTarifaInput | IngresoCreateOrConnectWithoutTarifaInput[]
    createMany?: IngresoCreateManyTarifaInputEnvelope
    connect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
  }

  export type IngresoUncheckedCreateNestedManyWithoutTarifaInput = {
    create?: XOR<IngresoCreateWithoutTarifaInput, IngresoUncheckedCreateWithoutTarifaInput> | IngresoCreateWithoutTarifaInput[] | IngresoUncheckedCreateWithoutTarifaInput[]
    connectOrCreate?: IngresoCreateOrConnectWithoutTarifaInput | IngresoCreateOrConnectWithoutTarifaInput[]
    createMany?: IngresoCreateManyTarifaInputEnvelope
    connect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
  }

  export type TipoHabitacionUpdateOneRequiredWithoutTarifasNestedInput = {
    create?: XOR<TipoHabitacionCreateWithoutTarifasInput, TipoHabitacionUncheckedCreateWithoutTarifasInput>
    connectOrCreate?: TipoHabitacionCreateOrConnectWithoutTarifasInput
    upsert?: TipoHabitacionUpsertWithoutTarifasInput
    connect?: TipoHabitacionWhereUniqueInput
    update?: XOR<XOR<TipoHabitacionUpdateToOneWithWhereWithoutTarifasInput, TipoHabitacionUpdateWithoutTarifasInput>, TipoHabitacionUncheckedUpdateWithoutTarifasInput>
  }

  export type IngresoUpdateManyWithoutTarifaNestedInput = {
    create?: XOR<IngresoCreateWithoutTarifaInput, IngresoUncheckedCreateWithoutTarifaInput> | IngresoCreateWithoutTarifaInput[] | IngresoUncheckedCreateWithoutTarifaInput[]
    connectOrCreate?: IngresoCreateOrConnectWithoutTarifaInput | IngresoCreateOrConnectWithoutTarifaInput[]
    upsert?: IngresoUpsertWithWhereUniqueWithoutTarifaInput | IngresoUpsertWithWhereUniqueWithoutTarifaInput[]
    createMany?: IngresoCreateManyTarifaInputEnvelope
    set?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    disconnect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    delete?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    connect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    update?: IngresoUpdateWithWhereUniqueWithoutTarifaInput | IngresoUpdateWithWhereUniqueWithoutTarifaInput[]
    updateMany?: IngresoUpdateManyWithWhereWithoutTarifaInput | IngresoUpdateManyWithWhereWithoutTarifaInput[]
    deleteMany?: IngresoScalarWhereInput | IngresoScalarWhereInput[]
  }

  export type IngresoUncheckedUpdateManyWithoutTarifaNestedInput = {
    create?: XOR<IngresoCreateWithoutTarifaInput, IngresoUncheckedCreateWithoutTarifaInput> | IngresoCreateWithoutTarifaInput[] | IngresoUncheckedCreateWithoutTarifaInput[]
    connectOrCreate?: IngresoCreateOrConnectWithoutTarifaInput | IngresoCreateOrConnectWithoutTarifaInput[]
    upsert?: IngresoUpsertWithWhereUniqueWithoutTarifaInput | IngresoUpsertWithWhereUniqueWithoutTarifaInput[]
    createMany?: IngresoCreateManyTarifaInputEnvelope
    set?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    disconnect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    delete?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    connect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    update?: IngresoUpdateWithWhereUniqueWithoutTarifaInput | IngresoUpdateWithWhereUniqueWithoutTarifaInput[]
    updateMany?: IngresoUpdateManyWithWhereWithoutTarifaInput | IngresoUpdateManyWithWhereWithoutTarifaInput[]
    deleteMany?: IngresoScalarWhereInput | IngresoScalarWhereInput[]
  }

  export type TipoHabitacionCreateNestedOneWithoutHabitacionesInput = {
    create?: XOR<TipoHabitacionCreateWithoutHabitacionesInput, TipoHabitacionUncheckedCreateWithoutHabitacionesInput>
    connectOrCreate?: TipoHabitacionCreateOrConnectWithoutHabitacionesInput
    connect?: TipoHabitacionWhereUniqueInput
  }

  export type IngresoCreateNestedManyWithoutHabitacionInput = {
    create?: XOR<IngresoCreateWithoutHabitacionInput, IngresoUncheckedCreateWithoutHabitacionInput> | IngresoCreateWithoutHabitacionInput[] | IngresoUncheckedCreateWithoutHabitacionInput[]
    connectOrCreate?: IngresoCreateOrConnectWithoutHabitacionInput | IngresoCreateOrConnectWithoutHabitacionInput[]
    createMany?: IngresoCreateManyHabitacionInputEnvelope
    connect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
  }

  export type IngresoUncheckedCreateNestedManyWithoutHabitacionInput = {
    create?: XOR<IngresoCreateWithoutHabitacionInput, IngresoUncheckedCreateWithoutHabitacionInput> | IngresoCreateWithoutHabitacionInput[] | IngresoUncheckedCreateWithoutHabitacionInput[]
    connectOrCreate?: IngresoCreateOrConnectWithoutHabitacionInput | IngresoCreateOrConnectWithoutHabitacionInput[]
    createMany?: IngresoCreateManyHabitacionInputEnvelope
    connect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
  }

  export type TipoHabitacionUpdateOneRequiredWithoutHabitacionesNestedInput = {
    create?: XOR<TipoHabitacionCreateWithoutHabitacionesInput, TipoHabitacionUncheckedCreateWithoutHabitacionesInput>
    connectOrCreate?: TipoHabitacionCreateOrConnectWithoutHabitacionesInput
    upsert?: TipoHabitacionUpsertWithoutHabitacionesInput
    connect?: TipoHabitacionWhereUniqueInput
    update?: XOR<XOR<TipoHabitacionUpdateToOneWithWhereWithoutHabitacionesInput, TipoHabitacionUpdateWithoutHabitacionesInput>, TipoHabitacionUncheckedUpdateWithoutHabitacionesInput>
  }

  export type IngresoUpdateManyWithoutHabitacionNestedInput = {
    create?: XOR<IngresoCreateWithoutHabitacionInput, IngresoUncheckedCreateWithoutHabitacionInput> | IngresoCreateWithoutHabitacionInput[] | IngresoUncheckedCreateWithoutHabitacionInput[]
    connectOrCreate?: IngresoCreateOrConnectWithoutHabitacionInput | IngresoCreateOrConnectWithoutHabitacionInput[]
    upsert?: IngresoUpsertWithWhereUniqueWithoutHabitacionInput | IngresoUpsertWithWhereUniqueWithoutHabitacionInput[]
    createMany?: IngresoCreateManyHabitacionInputEnvelope
    set?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    disconnect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    delete?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    connect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    update?: IngresoUpdateWithWhereUniqueWithoutHabitacionInput | IngresoUpdateWithWhereUniqueWithoutHabitacionInput[]
    updateMany?: IngresoUpdateManyWithWhereWithoutHabitacionInput | IngresoUpdateManyWithWhereWithoutHabitacionInput[]
    deleteMany?: IngresoScalarWhereInput | IngresoScalarWhereInput[]
  }

  export type IngresoUncheckedUpdateManyWithoutHabitacionNestedInput = {
    create?: XOR<IngresoCreateWithoutHabitacionInput, IngresoUncheckedCreateWithoutHabitacionInput> | IngresoCreateWithoutHabitacionInput[] | IngresoUncheckedCreateWithoutHabitacionInput[]
    connectOrCreate?: IngresoCreateOrConnectWithoutHabitacionInput | IngresoCreateOrConnectWithoutHabitacionInput[]
    upsert?: IngresoUpsertWithWhereUniqueWithoutHabitacionInput | IngresoUpsertWithWhereUniqueWithoutHabitacionInput[]
    createMany?: IngresoCreateManyHabitacionInputEnvelope
    set?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    disconnect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    delete?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    connect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    update?: IngresoUpdateWithWhereUniqueWithoutHabitacionInput | IngresoUpdateWithWhereUniqueWithoutHabitacionInput[]
    updateMany?: IngresoUpdateManyWithWhereWithoutHabitacionInput | IngresoUpdateManyWithWhereWithoutHabitacionInput[]
    deleteMany?: IngresoScalarWhereInput | IngresoScalarWhereInput[]
  }

  export type HuespedCreateNestedOneWithoutReservasInput = {
    create?: XOR<HuespedCreateWithoutReservasInput, HuespedUncheckedCreateWithoutReservasInput>
    connectOrCreate?: HuespedCreateOrConnectWithoutReservasInput
    connect?: HuespedWhereUniqueInput
  }

  export type TipoHabitacionCreateNestedOneWithoutReservasInput = {
    create?: XOR<TipoHabitacionCreateWithoutReservasInput, TipoHabitacionUncheckedCreateWithoutReservasInput>
    connectOrCreate?: TipoHabitacionCreateOrConnectWithoutReservasInput
    connect?: TipoHabitacionWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutReservasInput = {
    create?: XOR<UsuarioCreateWithoutReservasInput, UsuarioUncheckedCreateWithoutReservasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReservasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type IngresoCreateNestedManyWithoutReservaInput = {
    create?: XOR<IngresoCreateWithoutReservaInput, IngresoUncheckedCreateWithoutReservaInput> | IngresoCreateWithoutReservaInput[] | IngresoUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: IngresoCreateOrConnectWithoutReservaInput | IngresoCreateOrConnectWithoutReservaInput[]
    createMany?: IngresoCreateManyReservaInputEnvelope
    connect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
  }

  export type IngresoUncheckedCreateNestedManyWithoutReservaInput = {
    create?: XOR<IngresoCreateWithoutReservaInput, IngresoUncheckedCreateWithoutReservaInput> | IngresoCreateWithoutReservaInput[] | IngresoUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: IngresoCreateOrConnectWithoutReservaInput | IngresoCreateOrConnectWithoutReservaInput[]
    createMany?: IngresoCreateManyReservaInputEnvelope
    connect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
  }

  export type HuespedUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<HuespedCreateWithoutReservasInput, HuespedUncheckedCreateWithoutReservasInput>
    connectOrCreate?: HuespedCreateOrConnectWithoutReservasInput
    upsert?: HuespedUpsertWithoutReservasInput
    connect?: HuespedWhereUniqueInput
    update?: XOR<XOR<HuespedUpdateToOneWithWhereWithoutReservasInput, HuespedUpdateWithoutReservasInput>, HuespedUncheckedUpdateWithoutReservasInput>
  }

  export type TipoHabitacionUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<TipoHabitacionCreateWithoutReservasInput, TipoHabitacionUncheckedCreateWithoutReservasInput>
    connectOrCreate?: TipoHabitacionCreateOrConnectWithoutReservasInput
    upsert?: TipoHabitacionUpsertWithoutReservasInput
    connect?: TipoHabitacionWhereUniqueInput
    update?: XOR<XOR<TipoHabitacionUpdateToOneWithWhereWithoutReservasInput, TipoHabitacionUpdateWithoutReservasInput>, TipoHabitacionUncheckedUpdateWithoutReservasInput>
  }

  export type UsuarioUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<UsuarioCreateWithoutReservasInput, UsuarioUncheckedCreateWithoutReservasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReservasInput
    upsert?: UsuarioUpsertWithoutReservasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutReservasInput, UsuarioUpdateWithoutReservasInput>, UsuarioUncheckedUpdateWithoutReservasInput>
  }

  export type IngresoUpdateManyWithoutReservaNestedInput = {
    create?: XOR<IngresoCreateWithoutReservaInput, IngresoUncheckedCreateWithoutReservaInput> | IngresoCreateWithoutReservaInput[] | IngresoUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: IngresoCreateOrConnectWithoutReservaInput | IngresoCreateOrConnectWithoutReservaInput[]
    upsert?: IngresoUpsertWithWhereUniqueWithoutReservaInput | IngresoUpsertWithWhereUniqueWithoutReservaInput[]
    createMany?: IngresoCreateManyReservaInputEnvelope
    set?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    disconnect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    delete?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    connect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    update?: IngresoUpdateWithWhereUniqueWithoutReservaInput | IngresoUpdateWithWhereUniqueWithoutReservaInput[]
    updateMany?: IngresoUpdateManyWithWhereWithoutReservaInput | IngresoUpdateManyWithWhereWithoutReservaInput[]
    deleteMany?: IngresoScalarWhereInput | IngresoScalarWhereInput[]
  }

  export type IngresoUncheckedUpdateManyWithoutReservaNestedInput = {
    create?: XOR<IngresoCreateWithoutReservaInput, IngresoUncheckedCreateWithoutReservaInput> | IngresoCreateWithoutReservaInput[] | IngresoUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: IngresoCreateOrConnectWithoutReservaInput | IngresoCreateOrConnectWithoutReservaInput[]
    upsert?: IngresoUpsertWithWhereUniqueWithoutReservaInput | IngresoUpsertWithWhereUniqueWithoutReservaInput[]
    createMany?: IngresoCreateManyReservaInputEnvelope
    set?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    disconnect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    delete?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    connect?: IngresoWhereUniqueInput | IngresoWhereUniqueInput[]
    update?: IngresoUpdateWithWhereUniqueWithoutReservaInput | IngresoUpdateWithWhereUniqueWithoutReservaInput[]
    updateMany?: IngresoUpdateManyWithWhereWithoutReservaInput | IngresoUpdateManyWithWhereWithoutReservaInput[]
    deleteMany?: IngresoScalarWhereInput | IngresoScalarWhereInput[]
  }

  export type ReservaCreateNestedOneWithoutIngresoInput = {
    create?: XOR<ReservaCreateWithoutIngresoInput, ReservaUncheckedCreateWithoutIngresoInput>
    connectOrCreate?: ReservaCreateOrConnectWithoutIngresoInput
    connect?: ReservaWhereUniqueInput
  }

  export type HabitacionCreateNestedOneWithoutIngresosInput = {
    create?: XOR<HabitacionCreateWithoutIngresosInput, HabitacionUncheckedCreateWithoutIngresosInput>
    connectOrCreate?: HabitacionCreateOrConnectWithoutIngresosInput
    connect?: HabitacionWhereUniqueInput
  }

  export type HuespedCreateNestedOneWithoutIngresosInput = {
    create?: XOR<HuespedCreateWithoutIngresosInput, HuespedUncheckedCreateWithoutIngresosInput>
    connectOrCreate?: HuespedCreateOrConnectWithoutIngresosInput
    connect?: HuespedWhereUniqueInput
  }

  export type TarifaCreateNestedOneWithoutIngresosInput = {
    create?: XOR<TarifaCreateWithoutIngresosInput, TarifaUncheckedCreateWithoutIngresosInput>
    connectOrCreate?: TarifaCreateOrConnectWithoutIngresosInput
    connect?: TarifaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutIngresosInput = {
    create?: XOR<UsuarioCreateWithoutIngresosInput, UsuarioUncheckedCreateWithoutIngresosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutIngresosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type HuespedHabitacionCreateNestedManyWithoutIngresoInput = {
    create?: XOR<HuespedHabitacionCreateWithoutIngresoInput, HuespedHabitacionUncheckedCreateWithoutIngresoInput> | HuespedHabitacionCreateWithoutIngresoInput[] | HuespedHabitacionUncheckedCreateWithoutIngresoInput[]
    connectOrCreate?: HuespedHabitacionCreateOrConnectWithoutIngresoInput | HuespedHabitacionCreateOrConnectWithoutIngresoInput[]
    createMany?: HuespedHabitacionCreateManyIngresoInputEnvelope
    connect?: HuespedHabitacionWhereUniqueInput | HuespedHabitacionWhereUniqueInput[]
  }

  export type CuentaCreateNestedManyWithoutIngresoInput = {
    create?: XOR<CuentaCreateWithoutIngresoInput, CuentaUncheckedCreateWithoutIngresoInput> | CuentaCreateWithoutIngresoInput[] | CuentaUncheckedCreateWithoutIngresoInput[]
    connectOrCreate?: CuentaCreateOrConnectWithoutIngresoInput | CuentaCreateOrConnectWithoutIngresoInput[]
    createMany?: CuentaCreateManyIngresoInputEnvelope
    connect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
  }

  export type HuespedHabitacionUncheckedCreateNestedManyWithoutIngresoInput = {
    create?: XOR<HuespedHabitacionCreateWithoutIngresoInput, HuespedHabitacionUncheckedCreateWithoutIngresoInput> | HuespedHabitacionCreateWithoutIngresoInput[] | HuespedHabitacionUncheckedCreateWithoutIngresoInput[]
    connectOrCreate?: HuespedHabitacionCreateOrConnectWithoutIngresoInput | HuespedHabitacionCreateOrConnectWithoutIngresoInput[]
    createMany?: HuespedHabitacionCreateManyIngresoInputEnvelope
    connect?: HuespedHabitacionWhereUniqueInput | HuespedHabitacionWhereUniqueInput[]
  }

  export type CuentaUncheckedCreateNestedManyWithoutIngresoInput = {
    create?: XOR<CuentaCreateWithoutIngresoInput, CuentaUncheckedCreateWithoutIngresoInput> | CuentaCreateWithoutIngresoInput[] | CuentaUncheckedCreateWithoutIngresoInput[]
    connectOrCreate?: CuentaCreateOrConnectWithoutIngresoInput | CuentaCreateOrConnectWithoutIngresoInput[]
    createMany?: CuentaCreateManyIngresoInputEnvelope
    connect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
  }

  export type ReservaUpdateOneWithoutIngresoNestedInput = {
    create?: XOR<ReservaCreateWithoutIngresoInput, ReservaUncheckedCreateWithoutIngresoInput>
    connectOrCreate?: ReservaCreateOrConnectWithoutIngresoInput
    upsert?: ReservaUpsertWithoutIngresoInput
    disconnect?: ReservaWhereInput | boolean
    delete?: ReservaWhereInput | boolean
    connect?: ReservaWhereUniqueInput
    update?: XOR<XOR<ReservaUpdateToOneWithWhereWithoutIngresoInput, ReservaUpdateWithoutIngresoInput>, ReservaUncheckedUpdateWithoutIngresoInput>
  }

  export type HabitacionUpdateOneRequiredWithoutIngresosNestedInput = {
    create?: XOR<HabitacionCreateWithoutIngresosInput, HabitacionUncheckedCreateWithoutIngresosInput>
    connectOrCreate?: HabitacionCreateOrConnectWithoutIngresosInput
    upsert?: HabitacionUpsertWithoutIngresosInput
    connect?: HabitacionWhereUniqueInput
    update?: XOR<XOR<HabitacionUpdateToOneWithWhereWithoutIngresosInput, HabitacionUpdateWithoutIngresosInput>, HabitacionUncheckedUpdateWithoutIngresosInput>
  }

  export type HuespedUpdateOneRequiredWithoutIngresosNestedInput = {
    create?: XOR<HuespedCreateWithoutIngresosInput, HuespedUncheckedCreateWithoutIngresosInput>
    connectOrCreate?: HuespedCreateOrConnectWithoutIngresosInput
    upsert?: HuespedUpsertWithoutIngresosInput
    connect?: HuespedWhereUniqueInput
    update?: XOR<XOR<HuespedUpdateToOneWithWhereWithoutIngresosInput, HuespedUpdateWithoutIngresosInput>, HuespedUncheckedUpdateWithoutIngresosInput>
  }

  export type TarifaUpdateOneRequiredWithoutIngresosNestedInput = {
    create?: XOR<TarifaCreateWithoutIngresosInput, TarifaUncheckedCreateWithoutIngresosInput>
    connectOrCreate?: TarifaCreateOrConnectWithoutIngresosInput
    upsert?: TarifaUpsertWithoutIngresosInput
    connect?: TarifaWhereUniqueInput
    update?: XOR<XOR<TarifaUpdateToOneWithWhereWithoutIngresosInput, TarifaUpdateWithoutIngresosInput>, TarifaUncheckedUpdateWithoutIngresosInput>
  }

  export type UsuarioUpdateOneRequiredWithoutIngresosNestedInput = {
    create?: XOR<UsuarioCreateWithoutIngresosInput, UsuarioUncheckedCreateWithoutIngresosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutIngresosInput
    upsert?: UsuarioUpsertWithoutIngresosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutIngresosInput, UsuarioUpdateWithoutIngresosInput>, UsuarioUncheckedUpdateWithoutIngresosInput>
  }

  export type HuespedHabitacionUpdateManyWithoutIngresoNestedInput = {
    create?: XOR<HuespedHabitacionCreateWithoutIngresoInput, HuespedHabitacionUncheckedCreateWithoutIngresoInput> | HuespedHabitacionCreateWithoutIngresoInput[] | HuespedHabitacionUncheckedCreateWithoutIngresoInput[]
    connectOrCreate?: HuespedHabitacionCreateOrConnectWithoutIngresoInput | HuespedHabitacionCreateOrConnectWithoutIngresoInput[]
    upsert?: HuespedHabitacionUpsertWithWhereUniqueWithoutIngresoInput | HuespedHabitacionUpsertWithWhereUniqueWithoutIngresoInput[]
    createMany?: HuespedHabitacionCreateManyIngresoInputEnvelope
    set?: HuespedHabitacionWhereUniqueInput | HuespedHabitacionWhereUniqueInput[]
    disconnect?: HuespedHabitacionWhereUniqueInput | HuespedHabitacionWhereUniqueInput[]
    delete?: HuespedHabitacionWhereUniqueInput | HuespedHabitacionWhereUniqueInput[]
    connect?: HuespedHabitacionWhereUniqueInput | HuespedHabitacionWhereUniqueInput[]
    update?: HuespedHabitacionUpdateWithWhereUniqueWithoutIngresoInput | HuespedHabitacionUpdateWithWhereUniqueWithoutIngresoInput[]
    updateMany?: HuespedHabitacionUpdateManyWithWhereWithoutIngresoInput | HuespedHabitacionUpdateManyWithWhereWithoutIngresoInput[]
    deleteMany?: HuespedHabitacionScalarWhereInput | HuespedHabitacionScalarWhereInput[]
  }

  export type CuentaUpdateManyWithoutIngresoNestedInput = {
    create?: XOR<CuentaCreateWithoutIngresoInput, CuentaUncheckedCreateWithoutIngresoInput> | CuentaCreateWithoutIngresoInput[] | CuentaUncheckedCreateWithoutIngresoInput[]
    connectOrCreate?: CuentaCreateOrConnectWithoutIngresoInput | CuentaCreateOrConnectWithoutIngresoInput[]
    upsert?: CuentaUpsertWithWhereUniqueWithoutIngresoInput | CuentaUpsertWithWhereUniqueWithoutIngresoInput[]
    createMany?: CuentaCreateManyIngresoInputEnvelope
    set?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
    disconnect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
    delete?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
    connect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
    update?: CuentaUpdateWithWhereUniqueWithoutIngresoInput | CuentaUpdateWithWhereUniqueWithoutIngresoInput[]
    updateMany?: CuentaUpdateManyWithWhereWithoutIngresoInput | CuentaUpdateManyWithWhereWithoutIngresoInput[]
    deleteMany?: CuentaScalarWhereInput | CuentaScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HuespedHabitacionUncheckedUpdateManyWithoutIngresoNestedInput = {
    create?: XOR<HuespedHabitacionCreateWithoutIngresoInput, HuespedHabitacionUncheckedCreateWithoutIngresoInput> | HuespedHabitacionCreateWithoutIngresoInput[] | HuespedHabitacionUncheckedCreateWithoutIngresoInput[]
    connectOrCreate?: HuespedHabitacionCreateOrConnectWithoutIngresoInput | HuespedHabitacionCreateOrConnectWithoutIngresoInput[]
    upsert?: HuespedHabitacionUpsertWithWhereUniqueWithoutIngresoInput | HuespedHabitacionUpsertWithWhereUniqueWithoutIngresoInput[]
    createMany?: HuespedHabitacionCreateManyIngresoInputEnvelope
    set?: HuespedHabitacionWhereUniqueInput | HuespedHabitacionWhereUniqueInput[]
    disconnect?: HuespedHabitacionWhereUniqueInput | HuespedHabitacionWhereUniqueInput[]
    delete?: HuespedHabitacionWhereUniqueInput | HuespedHabitacionWhereUniqueInput[]
    connect?: HuespedHabitacionWhereUniqueInput | HuespedHabitacionWhereUniqueInput[]
    update?: HuespedHabitacionUpdateWithWhereUniqueWithoutIngresoInput | HuespedHabitacionUpdateWithWhereUniqueWithoutIngresoInput[]
    updateMany?: HuespedHabitacionUpdateManyWithWhereWithoutIngresoInput | HuespedHabitacionUpdateManyWithWhereWithoutIngresoInput[]
    deleteMany?: HuespedHabitacionScalarWhereInput | HuespedHabitacionScalarWhereInput[]
  }

  export type CuentaUncheckedUpdateManyWithoutIngresoNestedInput = {
    create?: XOR<CuentaCreateWithoutIngresoInput, CuentaUncheckedCreateWithoutIngresoInput> | CuentaCreateWithoutIngresoInput[] | CuentaUncheckedCreateWithoutIngresoInput[]
    connectOrCreate?: CuentaCreateOrConnectWithoutIngresoInput | CuentaCreateOrConnectWithoutIngresoInput[]
    upsert?: CuentaUpsertWithWhereUniqueWithoutIngresoInput | CuentaUpsertWithWhereUniqueWithoutIngresoInput[]
    createMany?: CuentaCreateManyIngresoInputEnvelope
    set?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
    disconnect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
    delete?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
    connect?: CuentaWhereUniqueInput | CuentaWhereUniqueInput[]
    update?: CuentaUpdateWithWhereUniqueWithoutIngresoInput | CuentaUpdateWithWhereUniqueWithoutIngresoInput[]
    updateMany?: CuentaUpdateManyWithWhereWithoutIngresoInput | CuentaUpdateManyWithWhereWithoutIngresoInput[]
    deleteMany?: CuentaScalarWhereInput | CuentaScalarWhereInput[]
  }

  export type HuespedCreateNestedOneWithoutHuespedesHabitacionesInput = {
    create?: XOR<HuespedCreateWithoutHuespedesHabitacionesInput, HuespedUncheckedCreateWithoutHuespedesHabitacionesInput>
    connectOrCreate?: HuespedCreateOrConnectWithoutHuespedesHabitacionesInput
    connect?: HuespedWhereUniqueInput
  }

  export type IngresoCreateNestedOneWithoutHuespedesHabitacionesInput = {
    create?: XOR<IngresoCreateWithoutHuespedesHabitacionesInput, IngresoUncheckedCreateWithoutHuespedesHabitacionesInput>
    connectOrCreate?: IngresoCreateOrConnectWithoutHuespedesHabitacionesInput
    connect?: IngresoWhereUniqueInput
  }

  export type HuespedUpdateOneRequiredWithoutHuespedesHabitacionesNestedInput = {
    create?: XOR<HuespedCreateWithoutHuespedesHabitacionesInput, HuespedUncheckedCreateWithoutHuespedesHabitacionesInput>
    connectOrCreate?: HuespedCreateOrConnectWithoutHuespedesHabitacionesInput
    upsert?: HuespedUpsertWithoutHuespedesHabitacionesInput
    connect?: HuespedWhereUniqueInput
    update?: XOR<XOR<HuespedUpdateToOneWithWhereWithoutHuespedesHabitacionesInput, HuespedUpdateWithoutHuespedesHabitacionesInput>, HuespedUncheckedUpdateWithoutHuespedesHabitacionesInput>
  }

  export type IngresoUpdateOneRequiredWithoutHuespedesHabitacionesNestedInput = {
    create?: XOR<IngresoCreateWithoutHuespedesHabitacionesInput, IngresoUncheckedCreateWithoutHuespedesHabitacionesInput>
    connectOrCreate?: IngresoCreateOrConnectWithoutHuespedesHabitacionesInput
    upsert?: IngresoUpsertWithoutHuespedesHabitacionesInput
    connect?: IngresoWhereUniqueInput
    update?: XOR<XOR<IngresoUpdateToOneWithWhereWithoutHuespedesHabitacionesInput, IngresoUpdateWithoutHuespedesHabitacionesInput>, IngresoUncheckedUpdateWithoutHuespedesHabitacionesInput>
  }

  export type IngresoCreateNestedOneWithoutCuentaInput = {
    create?: XOR<IngresoCreateWithoutCuentaInput, IngresoUncheckedCreateWithoutCuentaInput>
    connectOrCreate?: IngresoCreateOrConnectWithoutCuentaInput
    connect?: IngresoWhereUniqueInput
  }

  export type ConsumoCreateNestedManyWithoutCuentaInput = {
    create?: XOR<ConsumoCreateWithoutCuentaInput, ConsumoUncheckedCreateWithoutCuentaInput> | ConsumoCreateWithoutCuentaInput[] | ConsumoUncheckedCreateWithoutCuentaInput[]
    connectOrCreate?: ConsumoCreateOrConnectWithoutCuentaInput | ConsumoCreateOrConnectWithoutCuentaInput[]
    createMany?: ConsumoCreateManyCuentaInputEnvelope
    connect?: ConsumoWhereUniqueInput | ConsumoWhereUniqueInput[]
  }

  export type FacturaCreateNestedManyWithoutCuentaInput = {
    create?: XOR<FacturaCreateWithoutCuentaInput, FacturaUncheckedCreateWithoutCuentaInput> | FacturaCreateWithoutCuentaInput[] | FacturaUncheckedCreateWithoutCuentaInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutCuentaInput | FacturaCreateOrConnectWithoutCuentaInput[]
    createMany?: FacturaCreateManyCuentaInputEnvelope
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
  }

  export type ConsumoUncheckedCreateNestedManyWithoutCuentaInput = {
    create?: XOR<ConsumoCreateWithoutCuentaInput, ConsumoUncheckedCreateWithoutCuentaInput> | ConsumoCreateWithoutCuentaInput[] | ConsumoUncheckedCreateWithoutCuentaInput[]
    connectOrCreate?: ConsumoCreateOrConnectWithoutCuentaInput | ConsumoCreateOrConnectWithoutCuentaInput[]
    createMany?: ConsumoCreateManyCuentaInputEnvelope
    connect?: ConsumoWhereUniqueInput | ConsumoWhereUniqueInput[]
  }

  export type FacturaUncheckedCreateNestedManyWithoutCuentaInput = {
    create?: XOR<FacturaCreateWithoutCuentaInput, FacturaUncheckedCreateWithoutCuentaInput> | FacturaCreateWithoutCuentaInput[] | FacturaUncheckedCreateWithoutCuentaInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutCuentaInput | FacturaCreateOrConnectWithoutCuentaInput[]
    createMany?: FacturaCreateManyCuentaInputEnvelope
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
  }

  export type IngresoUpdateOneRequiredWithoutCuentaNestedInput = {
    create?: XOR<IngresoCreateWithoutCuentaInput, IngresoUncheckedCreateWithoutCuentaInput>
    connectOrCreate?: IngresoCreateOrConnectWithoutCuentaInput
    upsert?: IngresoUpsertWithoutCuentaInput
    connect?: IngresoWhereUniqueInput
    update?: XOR<XOR<IngresoUpdateToOneWithWhereWithoutCuentaInput, IngresoUpdateWithoutCuentaInput>, IngresoUncheckedUpdateWithoutCuentaInput>
  }

  export type ConsumoUpdateManyWithoutCuentaNestedInput = {
    create?: XOR<ConsumoCreateWithoutCuentaInput, ConsumoUncheckedCreateWithoutCuentaInput> | ConsumoCreateWithoutCuentaInput[] | ConsumoUncheckedCreateWithoutCuentaInput[]
    connectOrCreate?: ConsumoCreateOrConnectWithoutCuentaInput | ConsumoCreateOrConnectWithoutCuentaInput[]
    upsert?: ConsumoUpsertWithWhereUniqueWithoutCuentaInput | ConsumoUpsertWithWhereUniqueWithoutCuentaInput[]
    createMany?: ConsumoCreateManyCuentaInputEnvelope
    set?: ConsumoWhereUniqueInput | ConsumoWhereUniqueInput[]
    disconnect?: ConsumoWhereUniqueInput | ConsumoWhereUniqueInput[]
    delete?: ConsumoWhereUniqueInput | ConsumoWhereUniqueInput[]
    connect?: ConsumoWhereUniqueInput | ConsumoWhereUniqueInput[]
    update?: ConsumoUpdateWithWhereUniqueWithoutCuentaInput | ConsumoUpdateWithWhereUniqueWithoutCuentaInput[]
    updateMany?: ConsumoUpdateManyWithWhereWithoutCuentaInput | ConsumoUpdateManyWithWhereWithoutCuentaInput[]
    deleteMany?: ConsumoScalarWhereInput | ConsumoScalarWhereInput[]
  }

  export type FacturaUpdateManyWithoutCuentaNestedInput = {
    create?: XOR<FacturaCreateWithoutCuentaInput, FacturaUncheckedCreateWithoutCuentaInput> | FacturaCreateWithoutCuentaInput[] | FacturaUncheckedCreateWithoutCuentaInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutCuentaInput | FacturaCreateOrConnectWithoutCuentaInput[]
    upsert?: FacturaUpsertWithWhereUniqueWithoutCuentaInput | FacturaUpsertWithWhereUniqueWithoutCuentaInput[]
    createMany?: FacturaCreateManyCuentaInputEnvelope
    set?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    disconnect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    delete?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    update?: FacturaUpdateWithWhereUniqueWithoutCuentaInput | FacturaUpdateWithWhereUniqueWithoutCuentaInput[]
    updateMany?: FacturaUpdateManyWithWhereWithoutCuentaInput | FacturaUpdateManyWithWhereWithoutCuentaInput[]
    deleteMany?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
  }

  export type ConsumoUncheckedUpdateManyWithoutCuentaNestedInput = {
    create?: XOR<ConsumoCreateWithoutCuentaInput, ConsumoUncheckedCreateWithoutCuentaInput> | ConsumoCreateWithoutCuentaInput[] | ConsumoUncheckedCreateWithoutCuentaInput[]
    connectOrCreate?: ConsumoCreateOrConnectWithoutCuentaInput | ConsumoCreateOrConnectWithoutCuentaInput[]
    upsert?: ConsumoUpsertWithWhereUniqueWithoutCuentaInput | ConsumoUpsertWithWhereUniqueWithoutCuentaInput[]
    createMany?: ConsumoCreateManyCuentaInputEnvelope
    set?: ConsumoWhereUniqueInput | ConsumoWhereUniqueInput[]
    disconnect?: ConsumoWhereUniqueInput | ConsumoWhereUniqueInput[]
    delete?: ConsumoWhereUniqueInput | ConsumoWhereUniqueInput[]
    connect?: ConsumoWhereUniqueInput | ConsumoWhereUniqueInput[]
    update?: ConsumoUpdateWithWhereUniqueWithoutCuentaInput | ConsumoUpdateWithWhereUniqueWithoutCuentaInput[]
    updateMany?: ConsumoUpdateManyWithWhereWithoutCuentaInput | ConsumoUpdateManyWithWhereWithoutCuentaInput[]
    deleteMany?: ConsumoScalarWhereInput | ConsumoScalarWhereInput[]
  }

  export type FacturaUncheckedUpdateManyWithoutCuentaNestedInput = {
    create?: XOR<FacturaCreateWithoutCuentaInput, FacturaUncheckedCreateWithoutCuentaInput> | FacturaCreateWithoutCuentaInput[] | FacturaUncheckedCreateWithoutCuentaInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutCuentaInput | FacturaCreateOrConnectWithoutCuentaInput[]
    upsert?: FacturaUpsertWithWhereUniqueWithoutCuentaInput | FacturaUpsertWithWhereUniqueWithoutCuentaInput[]
    createMany?: FacturaCreateManyCuentaInputEnvelope
    set?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    disconnect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    delete?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    update?: FacturaUpdateWithWhereUniqueWithoutCuentaInput | FacturaUpdateWithWhereUniqueWithoutCuentaInput[]
    updateMany?: FacturaUpdateManyWithWhereWithoutCuentaInput | FacturaUpdateManyWithWhereWithoutCuentaInput[]
    deleteMany?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
  }

  export type CuentaCreateNestedOneWithoutConsumosInput = {
    create?: XOR<CuentaCreateWithoutConsumosInput, CuentaUncheckedCreateWithoutConsumosInput>
    connectOrCreate?: CuentaCreateOrConnectWithoutConsumosInput
    connect?: CuentaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutConsumosInput = {
    create?: XOR<UsuarioCreateWithoutConsumosInput, UsuarioUncheckedCreateWithoutConsumosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutConsumosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CuentaUpdateOneRequiredWithoutConsumosNestedInput = {
    create?: XOR<CuentaCreateWithoutConsumosInput, CuentaUncheckedCreateWithoutConsumosInput>
    connectOrCreate?: CuentaCreateOrConnectWithoutConsumosInput
    upsert?: CuentaUpsertWithoutConsumosInput
    connect?: CuentaWhereUniqueInput
    update?: XOR<XOR<CuentaUpdateToOneWithWhereWithoutConsumosInput, CuentaUpdateWithoutConsumosInput>, CuentaUncheckedUpdateWithoutConsumosInput>
  }

  export type UsuarioUpdateOneRequiredWithoutConsumosNestedInput = {
    create?: XOR<UsuarioCreateWithoutConsumosInput, UsuarioUncheckedCreateWithoutConsumosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutConsumosInput
    upsert?: UsuarioUpsertWithoutConsumosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutConsumosInput, UsuarioUpdateWithoutConsumosInput>, UsuarioUncheckedUpdateWithoutConsumosInput>
  }

  export type FacturaCreateNestedManyWithoutTimbradoInput = {
    create?: XOR<FacturaCreateWithoutTimbradoInput, FacturaUncheckedCreateWithoutTimbradoInput> | FacturaCreateWithoutTimbradoInput[] | FacturaUncheckedCreateWithoutTimbradoInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutTimbradoInput | FacturaCreateOrConnectWithoutTimbradoInput[]
    createMany?: FacturaCreateManyTimbradoInputEnvelope
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
  }

  export type FacturaUncheckedCreateNestedManyWithoutTimbradoInput = {
    create?: XOR<FacturaCreateWithoutTimbradoInput, FacturaUncheckedCreateWithoutTimbradoInput> | FacturaCreateWithoutTimbradoInput[] | FacturaUncheckedCreateWithoutTimbradoInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutTimbradoInput | FacturaCreateOrConnectWithoutTimbradoInput[]
    createMany?: FacturaCreateManyTimbradoInputEnvelope
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
  }

  export type FacturaUpdateManyWithoutTimbradoNestedInput = {
    create?: XOR<FacturaCreateWithoutTimbradoInput, FacturaUncheckedCreateWithoutTimbradoInput> | FacturaCreateWithoutTimbradoInput[] | FacturaUncheckedCreateWithoutTimbradoInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutTimbradoInput | FacturaCreateOrConnectWithoutTimbradoInput[]
    upsert?: FacturaUpsertWithWhereUniqueWithoutTimbradoInput | FacturaUpsertWithWhereUniqueWithoutTimbradoInput[]
    createMany?: FacturaCreateManyTimbradoInputEnvelope
    set?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    disconnect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    delete?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    update?: FacturaUpdateWithWhereUniqueWithoutTimbradoInput | FacturaUpdateWithWhereUniqueWithoutTimbradoInput[]
    updateMany?: FacturaUpdateManyWithWhereWithoutTimbradoInput | FacturaUpdateManyWithWhereWithoutTimbradoInput[]
    deleteMany?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
  }

  export type FacturaUncheckedUpdateManyWithoutTimbradoNestedInput = {
    create?: XOR<FacturaCreateWithoutTimbradoInput, FacturaUncheckedCreateWithoutTimbradoInput> | FacturaCreateWithoutTimbradoInput[] | FacturaUncheckedCreateWithoutTimbradoInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutTimbradoInput | FacturaCreateOrConnectWithoutTimbradoInput[]
    upsert?: FacturaUpsertWithWhereUniqueWithoutTimbradoInput | FacturaUpsertWithWhereUniqueWithoutTimbradoInput[]
    createMany?: FacturaCreateManyTimbradoInputEnvelope
    set?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    disconnect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    delete?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    update?: FacturaUpdateWithWhereUniqueWithoutTimbradoInput | FacturaUpdateWithWhereUniqueWithoutTimbradoInput[]
    updateMany?: FacturaUpdateManyWithWhereWithoutTimbradoInput | FacturaUpdateManyWithWhereWithoutTimbradoInput[]
    deleteMany?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
  }

  export type CuentaCreateNestedOneWithoutFacturaInput = {
    create?: XOR<CuentaCreateWithoutFacturaInput, CuentaUncheckedCreateWithoutFacturaInput>
    connectOrCreate?: CuentaCreateOrConnectWithoutFacturaInput
    connect?: CuentaWhereUniqueInput
  }

  export type TimbradoCreateNestedOneWithoutFacturasInput = {
    create?: XOR<TimbradoCreateWithoutFacturasInput, TimbradoUncheckedCreateWithoutFacturasInput>
    connectOrCreate?: TimbradoCreateOrConnectWithoutFacturasInput
    connect?: TimbradoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutFacturasInput = {
    create?: XOR<UsuarioCreateWithoutFacturasInput, UsuarioUncheckedCreateWithoutFacturasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFacturasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DetalleFacturaCreateNestedManyWithoutFacturaInput = {
    create?: XOR<DetalleFacturaCreateWithoutFacturaInput, DetalleFacturaUncheckedCreateWithoutFacturaInput> | DetalleFacturaCreateWithoutFacturaInput[] | DetalleFacturaUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: DetalleFacturaCreateOrConnectWithoutFacturaInput | DetalleFacturaCreateOrConnectWithoutFacturaInput[]
    createMany?: DetalleFacturaCreateManyFacturaInputEnvelope
    connect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
  }

  export type DetalleFacturaUncheckedCreateNestedManyWithoutFacturaInput = {
    create?: XOR<DetalleFacturaCreateWithoutFacturaInput, DetalleFacturaUncheckedCreateWithoutFacturaInput> | DetalleFacturaCreateWithoutFacturaInput[] | DetalleFacturaUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: DetalleFacturaCreateOrConnectWithoutFacturaInput | DetalleFacturaCreateOrConnectWithoutFacturaInput[]
    createMany?: DetalleFacturaCreateManyFacturaInputEnvelope
    connect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
  }

  export type CuentaUpdateOneWithoutFacturaNestedInput = {
    create?: XOR<CuentaCreateWithoutFacturaInput, CuentaUncheckedCreateWithoutFacturaInput>
    connectOrCreate?: CuentaCreateOrConnectWithoutFacturaInput
    upsert?: CuentaUpsertWithoutFacturaInput
    disconnect?: CuentaWhereInput | boolean
    delete?: CuentaWhereInput | boolean
    connect?: CuentaWhereUniqueInput
    update?: XOR<XOR<CuentaUpdateToOneWithWhereWithoutFacturaInput, CuentaUpdateWithoutFacturaInput>, CuentaUncheckedUpdateWithoutFacturaInput>
  }

  export type TimbradoUpdateOneRequiredWithoutFacturasNestedInput = {
    create?: XOR<TimbradoCreateWithoutFacturasInput, TimbradoUncheckedCreateWithoutFacturasInput>
    connectOrCreate?: TimbradoCreateOrConnectWithoutFacturasInput
    upsert?: TimbradoUpsertWithoutFacturasInput
    connect?: TimbradoWhereUniqueInput
    update?: XOR<XOR<TimbradoUpdateToOneWithWhereWithoutFacturasInput, TimbradoUpdateWithoutFacturasInput>, TimbradoUncheckedUpdateWithoutFacturasInput>
  }

  export type UsuarioUpdateOneRequiredWithoutFacturasNestedInput = {
    create?: XOR<UsuarioCreateWithoutFacturasInput, UsuarioUncheckedCreateWithoutFacturasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFacturasInput
    upsert?: UsuarioUpsertWithoutFacturasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutFacturasInput, UsuarioUpdateWithoutFacturasInput>, UsuarioUncheckedUpdateWithoutFacturasInput>
  }

  export type DetalleFacturaUpdateManyWithoutFacturaNestedInput = {
    create?: XOR<DetalleFacturaCreateWithoutFacturaInput, DetalleFacturaUncheckedCreateWithoutFacturaInput> | DetalleFacturaCreateWithoutFacturaInput[] | DetalleFacturaUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: DetalleFacturaCreateOrConnectWithoutFacturaInput | DetalleFacturaCreateOrConnectWithoutFacturaInput[]
    upsert?: DetalleFacturaUpsertWithWhereUniqueWithoutFacturaInput | DetalleFacturaUpsertWithWhereUniqueWithoutFacturaInput[]
    createMany?: DetalleFacturaCreateManyFacturaInputEnvelope
    set?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    disconnect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    delete?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    connect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    update?: DetalleFacturaUpdateWithWhereUniqueWithoutFacturaInput | DetalleFacturaUpdateWithWhereUniqueWithoutFacturaInput[]
    updateMany?: DetalleFacturaUpdateManyWithWhereWithoutFacturaInput | DetalleFacturaUpdateManyWithWhereWithoutFacturaInput[]
    deleteMany?: DetalleFacturaScalarWhereInput | DetalleFacturaScalarWhereInput[]
  }

  export type DetalleFacturaUncheckedUpdateManyWithoutFacturaNestedInput = {
    create?: XOR<DetalleFacturaCreateWithoutFacturaInput, DetalleFacturaUncheckedCreateWithoutFacturaInput> | DetalleFacturaCreateWithoutFacturaInput[] | DetalleFacturaUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: DetalleFacturaCreateOrConnectWithoutFacturaInput | DetalleFacturaCreateOrConnectWithoutFacturaInput[]
    upsert?: DetalleFacturaUpsertWithWhereUniqueWithoutFacturaInput | DetalleFacturaUpsertWithWhereUniqueWithoutFacturaInput[]
    createMany?: DetalleFacturaCreateManyFacturaInputEnvelope
    set?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    disconnect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    delete?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    connect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    update?: DetalleFacturaUpdateWithWhereUniqueWithoutFacturaInput | DetalleFacturaUpdateWithWhereUniqueWithoutFacturaInput[]
    updateMany?: DetalleFacturaUpdateManyWithWhereWithoutFacturaInput | DetalleFacturaUpdateManyWithWhereWithoutFacturaInput[]
    deleteMany?: DetalleFacturaScalarWhereInput | DetalleFacturaScalarWhereInput[]
  }

  export type FacturaCreateNestedOneWithoutDetallesInput = {
    create?: XOR<FacturaCreateWithoutDetallesInput, FacturaUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: FacturaCreateOrConnectWithoutDetallesInput
    connect?: FacturaWhereUniqueInput
  }

  export type FacturaUpdateOneRequiredWithoutDetallesNestedInput = {
    create?: XOR<FacturaCreateWithoutDetallesInput, FacturaUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: FacturaCreateOrConnectWithoutDetallesInput
    upsert?: FacturaUpsertWithoutDetallesInput
    connect?: FacturaWhereUniqueInput
    update?: XOR<XOR<FacturaUpdateToOneWithWhereWithoutDetallesInput, FacturaUpdateWithoutDetallesInput>, FacturaUncheckedUpdateWithoutDetallesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumDocumentoIdentidadFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentoIdentidad | EnumDocumentoIdentidadFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentoIdentidad[] | ListEnumDocumentoIdentidadFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentoIdentidad[] | ListEnumDocumentoIdentidadFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentoIdentidadFilter<$PrismaModel> | $Enums.DocumentoIdentidad
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumNacionalidadFilter<$PrismaModel = never> = {
    equals?: $Enums.Nacionalidad | EnumNacionalidadFieldRefInput<$PrismaModel>
    in?: $Enums.Nacionalidad[] | ListEnumNacionalidadFieldRefInput<$PrismaModel>
    notIn?: $Enums.Nacionalidad[] | ListEnumNacionalidadFieldRefInput<$PrismaModel>
    not?: NestedEnumNacionalidadFilter<$PrismaModel> | $Enums.Nacionalidad
  }

  export type NestedEnumDocumentoIdentidadWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentoIdentidad | EnumDocumentoIdentidadFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentoIdentidad[] | ListEnumDocumentoIdentidadFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentoIdentidad[] | ListEnumDocumentoIdentidadFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentoIdentidadWithAggregatesFilter<$PrismaModel> | $Enums.DocumentoIdentidad
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentoIdentidadFilter<$PrismaModel>
    _max?: NestedEnumDocumentoIdentidadFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumNacionalidadWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Nacionalidad | EnumNacionalidadFieldRefInput<$PrismaModel>
    in?: $Enums.Nacionalidad[] | ListEnumNacionalidadFieldRefInput<$PrismaModel>
    notIn?: $Enums.Nacionalidad[] | ListEnumNacionalidadFieldRefInput<$PrismaModel>
    not?: NestedEnumNacionalidadWithAggregatesFilter<$PrismaModel> | $Enums.Nacionalidad
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNacionalidadFilter<$PrismaModel>
    _max?: NestedEnumNacionalidadFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ReservaCreateWithoutUsuarioInput = {
    check_in: Date | string
    check_out: Date | string
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    huesped: HuespedCreateNestedOneWithoutReservasInput
    tipoHabitacion: TipoHabitacionCreateNestedOneWithoutReservasInput
    ingreso?: IngresoCreateNestedManyWithoutReservaInput
  }

  export type ReservaUncheckedCreateWithoutUsuarioInput = {
    id_reserva?: number
    fk_huesped: number
    fk_tipo_habitacion: number
    check_in: Date | string
    check_out: Date | string
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    ingreso?: IngresoUncheckedCreateNestedManyWithoutReservaInput
  }

  export type ReservaCreateOrConnectWithoutUsuarioInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutUsuarioInput, ReservaUncheckedCreateWithoutUsuarioInput>
  }

  export type ReservaCreateManyUsuarioInputEnvelope = {
    data: ReservaCreateManyUsuarioInput | ReservaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type IngresoCreateWithoutUsuarioInput = {
    fecha_ingreso: Date | string
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reserva?: ReservaCreateNestedOneWithoutIngresoInput
    habitacion: HabitacionCreateNestedOneWithoutIngresosInput
    huesped: HuespedCreateNestedOneWithoutIngresosInput
    tarifa: TarifaCreateNestedOneWithoutIngresosInput
    huespedesHabitaciones?: HuespedHabitacionCreateNestedManyWithoutIngresoInput
    cuenta?: CuentaCreateNestedManyWithoutIngresoInput
  }

  export type IngresoUncheckedCreateWithoutUsuarioInput = {
    id_ingreso?: number
    fk_reserva?: number | null
    fk_habitacion: number
    fk_huesped: number
    fk_tarifa: number
    fecha_ingreso: Date | string
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    huespedesHabitaciones?: HuespedHabitacionUncheckedCreateNestedManyWithoutIngresoInput
    cuenta?: CuentaUncheckedCreateNestedManyWithoutIngresoInput
  }

  export type IngresoCreateOrConnectWithoutUsuarioInput = {
    where: IngresoWhereUniqueInput
    create: XOR<IngresoCreateWithoutUsuarioInput, IngresoUncheckedCreateWithoutUsuarioInput>
  }

  export type IngresoCreateManyUsuarioInputEnvelope = {
    data: IngresoCreateManyUsuarioInput | IngresoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ConsumoCreateWithoutUsuarioInput = {
    descripcion: string
    cantidad: number
    monto: number
    activo?: boolean
    cuenta: CuentaCreateNestedOneWithoutConsumosInput
  }

  export type ConsumoUncheckedCreateWithoutUsuarioInput = {
    id_consumo?: number
    fk_cuenta: number
    descripcion: string
    cantidad: number
    monto: number
    activo?: boolean
  }

  export type ConsumoCreateOrConnectWithoutUsuarioInput = {
    where: ConsumoWhereUniqueInput
    create: XOR<ConsumoCreateWithoutUsuarioInput, ConsumoUncheckedCreateWithoutUsuarioInput>
  }

  export type ConsumoCreateManyUsuarioInputEnvelope = {
    data: ConsumoCreateManyUsuarioInput | ConsumoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type FacturaCreateWithoutUsuarioInput = {
    fecha_emision?: Date | string
    condicion_venta: string
    total: number
    cuenta?: CuentaCreateNestedOneWithoutFacturaInput
    timbrado: TimbradoCreateNestedOneWithoutFacturasInput
    detalles?: DetalleFacturaCreateNestedManyWithoutFacturaInput
  }

  export type FacturaUncheckedCreateWithoutUsuarioInput = {
    id_factura?: number
    fk_cuenta: number
    fk_timbrado: number
    fecha_emision?: Date | string
    condicion_venta: string
    total: number
    detalles?: DetalleFacturaUncheckedCreateNestedManyWithoutFacturaInput
  }

  export type FacturaCreateOrConnectWithoutUsuarioInput = {
    where: FacturaWhereUniqueInput
    create: XOR<FacturaCreateWithoutUsuarioInput, FacturaUncheckedCreateWithoutUsuarioInput>
  }

  export type FacturaCreateManyUsuarioInputEnvelope = {
    data: FacturaCreateManyUsuarioInput | FacturaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ReservaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutUsuarioInput, ReservaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ReservaCreateWithoutUsuarioInput, ReservaUncheckedCreateWithoutUsuarioInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutUsuarioInput, ReservaUncheckedUpdateWithoutUsuarioInput>
  }

  export type ReservaUpdateManyWithWhereWithoutUsuarioInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ReservaScalarWhereInput = {
    AND?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
    OR?: ReservaScalarWhereInput[]
    NOT?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
    id_reserva?: IntFilter<"Reserva"> | number
    fk_huesped?: IntFilter<"Reserva"> | number
    fk_tipo_habitacion?: IntFilter<"Reserva"> | number
    check_in?: DateTimeFilter<"Reserva"> | Date | string
    check_out?: DateTimeFilter<"Reserva"> | Date | string
    estado?: StringFilter<"Reserva"> | string
    fk_usuario?: IntFilter<"Reserva"> | number
    activo?: BoolFilter<"Reserva"> | boolean
    created_at?: DateTimeFilter<"Reserva"> | Date | string
    updated_at?: DateTimeFilter<"Reserva"> | Date | string
  }

  export type IngresoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: IngresoWhereUniqueInput
    update: XOR<IngresoUpdateWithoutUsuarioInput, IngresoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<IngresoCreateWithoutUsuarioInput, IngresoUncheckedCreateWithoutUsuarioInput>
  }

  export type IngresoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: IngresoWhereUniqueInput
    data: XOR<IngresoUpdateWithoutUsuarioInput, IngresoUncheckedUpdateWithoutUsuarioInput>
  }

  export type IngresoUpdateManyWithWhereWithoutUsuarioInput = {
    where: IngresoScalarWhereInput
    data: XOR<IngresoUpdateManyMutationInput, IngresoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type IngresoScalarWhereInput = {
    AND?: IngresoScalarWhereInput | IngresoScalarWhereInput[]
    OR?: IngresoScalarWhereInput[]
    NOT?: IngresoScalarWhereInput | IngresoScalarWhereInput[]
    id_ingreso?: IntFilter<"Ingreso"> | number
    fk_reserva?: IntNullableFilter<"Ingreso"> | number | null
    fk_habitacion?: IntFilter<"Ingreso"> | number
    fk_huesped?: IntFilter<"Ingreso"> | number
    fk_tarifa?: IntFilter<"Ingreso"> | number
    fecha_ingreso?: DateTimeFilter<"Ingreso"> | Date | string
    estado?: StringFilter<"Ingreso"> | string
    fk_usuario?: IntFilter<"Ingreso"> | number
    activo?: BoolFilter<"Ingreso"> | boolean
    created_at?: DateTimeFilter<"Ingreso"> | Date | string
    updated_at?: DateTimeFilter<"Ingreso"> | Date | string
  }

  export type ConsumoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ConsumoWhereUniqueInput
    update: XOR<ConsumoUpdateWithoutUsuarioInput, ConsumoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ConsumoCreateWithoutUsuarioInput, ConsumoUncheckedCreateWithoutUsuarioInput>
  }

  export type ConsumoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ConsumoWhereUniqueInput
    data: XOR<ConsumoUpdateWithoutUsuarioInput, ConsumoUncheckedUpdateWithoutUsuarioInput>
  }

  export type ConsumoUpdateManyWithWhereWithoutUsuarioInput = {
    where: ConsumoScalarWhereInput
    data: XOR<ConsumoUpdateManyMutationInput, ConsumoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ConsumoScalarWhereInput = {
    AND?: ConsumoScalarWhereInput | ConsumoScalarWhereInput[]
    OR?: ConsumoScalarWhereInput[]
    NOT?: ConsumoScalarWhereInput | ConsumoScalarWhereInput[]
    id_consumo?: IntFilter<"Consumo"> | number
    fk_cuenta?: IntFilter<"Consumo"> | number
    descripcion?: StringFilter<"Consumo"> | string
    cantidad?: IntFilter<"Consumo"> | number
    monto?: IntFilter<"Consumo"> | number
    fk_usuario?: IntFilter<"Consumo"> | number
    activo?: BoolFilter<"Consumo"> | boolean
  }

  export type FacturaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: FacturaWhereUniqueInput
    update: XOR<FacturaUpdateWithoutUsuarioInput, FacturaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<FacturaCreateWithoutUsuarioInput, FacturaUncheckedCreateWithoutUsuarioInput>
  }

  export type FacturaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: FacturaWhereUniqueInput
    data: XOR<FacturaUpdateWithoutUsuarioInput, FacturaUncheckedUpdateWithoutUsuarioInput>
  }

  export type FacturaUpdateManyWithWhereWithoutUsuarioInput = {
    where: FacturaScalarWhereInput
    data: XOR<FacturaUpdateManyMutationInput, FacturaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type FacturaScalarWhereInput = {
    AND?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
    OR?: FacturaScalarWhereInput[]
    NOT?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
    id_factura?: IntFilter<"Factura"> | number
    fk_cuenta?: IntFilter<"Factura"> | number
    fk_timbrado?: IntFilter<"Factura"> | number
    fecha_emision?: DateTimeFilter<"Factura"> | Date | string
    condicion_venta?: StringFilter<"Factura"> | string
    total?: IntFilter<"Factura"> | number
    fk_usuario?: IntFilter<"Factura"> | number
  }

  export type ReservaCreateWithoutHuespedInput = {
    check_in: Date | string
    check_out: Date | string
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    tipoHabitacion: TipoHabitacionCreateNestedOneWithoutReservasInput
    usuario: UsuarioCreateNestedOneWithoutReservasInput
    ingreso?: IngresoCreateNestedManyWithoutReservaInput
  }

  export type ReservaUncheckedCreateWithoutHuespedInput = {
    id_reserva?: number
    fk_tipo_habitacion: number
    check_in: Date | string
    check_out: Date | string
    estado: string
    fk_usuario: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    ingreso?: IngresoUncheckedCreateNestedManyWithoutReservaInput
  }

  export type ReservaCreateOrConnectWithoutHuespedInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutHuespedInput, ReservaUncheckedCreateWithoutHuespedInput>
  }

  export type ReservaCreateManyHuespedInputEnvelope = {
    data: ReservaCreateManyHuespedInput | ReservaCreateManyHuespedInput[]
    skipDuplicates?: boolean
  }

  export type IngresoCreateWithoutHuespedInput = {
    fecha_ingreso: Date | string
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reserva?: ReservaCreateNestedOneWithoutIngresoInput
    habitacion: HabitacionCreateNestedOneWithoutIngresosInput
    tarifa: TarifaCreateNestedOneWithoutIngresosInput
    usuario: UsuarioCreateNestedOneWithoutIngresosInput
    huespedesHabitaciones?: HuespedHabitacionCreateNestedManyWithoutIngresoInput
    cuenta?: CuentaCreateNestedManyWithoutIngresoInput
  }

  export type IngresoUncheckedCreateWithoutHuespedInput = {
    id_ingreso?: number
    fk_reserva?: number | null
    fk_habitacion: number
    fk_tarifa: number
    fecha_ingreso: Date | string
    estado: string
    fk_usuario: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    huespedesHabitaciones?: HuespedHabitacionUncheckedCreateNestedManyWithoutIngresoInput
    cuenta?: CuentaUncheckedCreateNestedManyWithoutIngresoInput
  }

  export type IngresoCreateOrConnectWithoutHuespedInput = {
    where: IngresoWhereUniqueInput
    create: XOR<IngresoCreateWithoutHuespedInput, IngresoUncheckedCreateWithoutHuespedInput>
  }

  export type IngresoCreateManyHuespedInputEnvelope = {
    data: IngresoCreateManyHuespedInput | IngresoCreateManyHuespedInput[]
    skipDuplicates?: boolean
  }

  export type HuespedHabitacionCreateWithoutHuespedInput = {
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    ingreso: IngresoCreateNestedOneWithoutHuespedesHabitacionesInput
  }

  export type HuespedHabitacionUncheckedCreateWithoutHuespedInput = {
    id_huesped_habitacion?: number
    fk_ingreso: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HuespedHabitacionCreateOrConnectWithoutHuespedInput = {
    where: HuespedHabitacionWhereUniqueInput
    create: XOR<HuespedHabitacionCreateWithoutHuespedInput, HuespedHabitacionUncheckedCreateWithoutHuespedInput>
  }

  export type HuespedHabitacionCreateManyHuespedInputEnvelope = {
    data: HuespedHabitacionCreateManyHuespedInput | HuespedHabitacionCreateManyHuespedInput[]
    skipDuplicates?: boolean
  }

  export type ReservaUpsertWithWhereUniqueWithoutHuespedInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutHuespedInput, ReservaUncheckedUpdateWithoutHuespedInput>
    create: XOR<ReservaCreateWithoutHuespedInput, ReservaUncheckedCreateWithoutHuespedInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutHuespedInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutHuespedInput, ReservaUncheckedUpdateWithoutHuespedInput>
  }

  export type ReservaUpdateManyWithWhereWithoutHuespedInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutHuespedInput>
  }

  export type IngresoUpsertWithWhereUniqueWithoutHuespedInput = {
    where: IngresoWhereUniqueInput
    update: XOR<IngresoUpdateWithoutHuespedInput, IngresoUncheckedUpdateWithoutHuespedInput>
    create: XOR<IngresoCreateWithoutHuespedInput, IngresoUncheckedCreateWithoutHuespedInput>
  }

  export type IngresoUpdateWithWhereUniqueWithoutHuespedInput = {
    where: IngresoWhereUniqueInput
    data: XOR<IngresoUpdateWithoutHuespedInput, IngresoUncheckedUpdateWithoutHuespedInput>
  }

  export type IngresoUpdateManyWithWhereWithoutHuespedInput = {
    where: IngresoScalarWhereInput
    data: XOR<IngresoUpdateManyMutationInput, IngresoUncheckedUpdateManyWithoutHuespedInput>
  }

  export type HuespedHabitacionUpsertWithWhereUniqueWithoutHuespedInput = {
    where: HuespedHabitacionWhereUniqueInput
    update: XOR<HuespedHabitacionUpdateWithoutHuespedInput, HuespedHabitacionUncheckedUpdateWithoutHuespedInput>
    create: XOR<HuespedHabitacionCreateWithoutHuespedInput, HuespedHabitacionUncheckedCreateWithoutHuespedInput>
  }

  export type HuespedHabitacionUpdateWithWhereUniqueWithoutHuespedInput = {
    where: HuespedHabitacionWhereUniqueInput
    data: XOR<HuespedHabitacionUpdateWithoutHuespedInput, HuespedHabitacionUncheckedUpdateWithoutHuespedInput>
  }

  export type HuespedHabitacionUpdateManyWithWhereWithoutHuespedInput = {
    where: HuespedHabitacionScalarWhereInput
    data: XOR<HuespedHabitacionUpdateManyMutationInput, HuespedHabitacionUncheckedUpdateManyWithoutHuespedInput>
  }

  export type HuespedHabitacionScalarWhereInput = {
    AND?: HuespedHabitacionScalarWhereInput | HuespedHabitacionScalarWhereInput[]
    OR?: HuespedHabitacionScalarWhereInput[]
    NOT?: HuespedHabitacionScalarWhereInput | HuespedHabitacionScalarWhereInput[]
    id_huesped_habitacion?: IntFilter<"HuespedHabitacion"> | number
    fk_huesped?: IntFilter<"HuespedHabitacion"> | number
    fk_ingreso?: IntFilter<"HuespedHabitacion"> | number
    activo?: BoolFilter<"HuespedHabitacion"> | boolean
    created_at?: DateTimeFilter<"HuespedHabitacion"> | Date | string
    updated_at?: DateTimeFilter<"HuespedHabitacion"> | Date | string
  }

  export type TarifaCreateWithoutTipoHabitacionInput = {
    descripcion: string
    precio: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    ingresos?: IngresoCreateNestedManyWithoutTarifaInput
  }

  export type TarifaUncheckedCreateWithoutTipoHabitacionInput = {
    id_tarifa?: number
    descripcion: string
    precio: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    ingresos?: IngresoUncheckedCreateNestedManyWithoutTarifaInput
  }

  export type TarifaCreateOrConnectWithoutTipoHabitacionInput = {
    where: TarifaWhereUniqueInput
    create: XOR<TarifaCreateWithoutTipoHabitacionInput, TarifaUncheckedCreateWithoutTipoHabitacionInput>
  }

  export type TarifaCreateManyTipoHabitacionInputEnvelope = {
    data: TarifaCreateManyTipoHabitacionInput | TarifaCreateManyTipoHabitacionInput[]
    skipDuplicates?: boolean
  }

  export type HabitacionCreateWithoutTipoHabitacionInput = {
    numero: string
    piso: string
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    ingresos?: IngresoCreateNestedManyWithoutHabitacionInput
  }

  export type HabitacionUncheckedCreateWithoutTipoHabitacionInput = {
    id_habitacion?: number
    numero: string
    piso: string
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    ingresos?: IngresoUncheckedCreateNestedManyWithoutHabitacionInput
  }

  export type HabitacionCreateOrConnectWithoutTipoHabitacionInput = {
    where: HabitacionWhereUniqueInput
    create: XOR<HabitacionCreateWithoutTipoHabitacionInput, HabitacionUncheckedCreateWithoutTipoHabitacionInput>
  }

  export type HabitacionCreateManyTipoHabitacionInputEnvelope = {
    data: HabitacionCreateManyTipoHabitacionInput | HabitacionCreateManyTipoHabitacionInput[]
    skipDuplicates?: boolean
  }

  export type ReservaCreateWithoutTipoHabitacionInput = {
    check_in: Date | string
    check_out: Date | string
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    huesped: HuespedCreateNestedOneWithoutReservasInput
    usuario: UsuarioCreateNestedOneWithoutReservasInput
    ingreso?: IngresoCreateNestedManyWithoutReservaInput
  }

  export type ReservaUncheckedCreateWithoutTipoHabitacionInput = {
    id_reserva?: number
    fk_huesped: number
    check_in: Date | string
    check_out: Date | string
    estado: string
    fk_usuario: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    ingreso?: IngresoUncheckedCreateNestedManyWithoutReservaInput
  }

  export type ReservaCreateOrConnectWithoutTipoHabitacionInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutTipoHabitacionInput, ReservaUncheckedCreateWithoutTipoHabitacionInput>
  }

  export type ReservaCreateManyTipoHabitacionInputEnvelope = {
    data: ReservaCreateManyTipoHabitacionInput | ReservaCreateManyTipoHabitacionInput[]
    skipDuplicates?: boolean
  }

  export type TarifaUpsertWithWhereUniqueWithoutTipoHabitacionInput = {
    where: TarifaWhereUniqueInput
    update: XOR<TarifaUpdateWithoutTipoHabitacionInput, TarifaUncheckedUpdateWithoutTipoHabitacionInput>
    create: XOR<TarifaCreateWithoutTipoHabitacionInput, TarifaUncheckedCreateWithoutTipoHabitacionInput>
  }

  export type TarifaUpdateWithWhereUniqueWithoutTipoHabitacionInput = {
    where: TarifaWhereUniqueInput
    data: XOR<TarifaUpdateWithoutTipoHabitacionInput, TarifaUncheckedUpdateWithoutTipoHabitacionInput>
  }

  export type TarifaUpdateManyWithWhereWithoutTipoHabitacionInput = {
    where: TarifaScalarWhereInput
    data: XOR<TarifaUpdateManyMutationInput, TarifaUncheckedUpdateManyWithoutTipoHabitacionInput>
  }

  export type TarifaScalarWhereInput = {
    AND?: TarifaScalarWhereInput | TarifaScalarWhereInput[]
    OR?: TarifaScalarWhereInput[]
    NOT?: TarifaScalarWhereInput | TarifaScalarWhereInput[]
    id_tarifa?: IntFilter<"Tarifa"> | number
    fk_tipo_habitacion?: IntFilter<"Tarifa"> | number
    descripcion?: StringFilter<"Tarifa"> | string
    precio?: IntFilter<"Tarifa"> | number
    activo?: BoolFilter<"Tarifa"> | boolean
    created_at?: DateTimeFilter<"Tarifa"> | Date | string
    updated_at?: DateTimeFilter<"Tarifa"> | Date | string
  }

  export type HabitacionUpsertWithWhereUniqueWithoutTipoHabitacionInput = {
    where: HabitacionWhereUniqueInput
    update: XOR<HabitacionUpdateWithoutTipoHabitacionInput, HabitacionUncheckedUpdateWithoutTipoHabitacionInput>
    create: XOR<HabitacionCreateWithoutTipoHabitacionInput, HabitacionUncheckedCreateWithoutTipoHabitacionInput>
  }

  export type HabitacionUpdateWithWhereUniqueWithoutTipoHabitacionInput = {
    where: HabitacionWhereUniqueInput
    data: XOR<HabitacionUpdateWithoutTipoHabitacionInput, HabitacionUncheckedUpdateWithoutTipoHabitacionInput>
  }

  export type HabitacionUpdateManyWithWhereWithoutTipoHabitacionInput = {
    where: HabitacionScalarWhereInput
    data: XOR<HabitacionUpdateManyMutationInput, HabitacionUncheckedUpdateManyWithoutTipoHabitacionInput>
  }

  export type HabitacionScalarWhereInput = {
    AND?: HabitacionScalarWhereInput | HabitacionScalarWhereInput[]
    OR?: HabitacionScalarWhereInput[]
    NOT?: HabitacionScalarWhereInput | HabitacionScalarWhereInput[]
    id_habitacion?: IntFilter<"Habitacion"> | number
    numero?: StringFilter<"Habitacion"> | string
    fk_tipo_habitacion?: IntFilter<"Habitacion"> | number
    piso?: StringFilter<"Habitacion"> | string
    estado?: StringFilter<"Habitacion"> | string
    activo?: BoolFilter<"Habitacion"> | boolean
    created_at?: DateTimeFilter<"Habitacion"> | Date | string
    updated_at?: DateTimeFilter<"Habitacion"> | Date | string
  }

  export type ReservaUpsertWithWhereUniqueWithoutTipoHabitacionInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutTipoHabitacionInput, ReservaUncheckedUpdateWithoutTipoHabitacionInput>
    create: XOR<ReservaCreateWithoutTipoHabitacionInput, ReservaUncheckedCreateWithoutTipoHabitacionInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutTipoHabitacionInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutTipoHabitacionInput, ReservaUncheckedUpdateWithoutTipoHabitacionInput>
  }

  export type ReservaUpdateManyWithWhereWithoutTipoHabitacionInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutTipoHabitacionInput>
  }

  export type TipoHabitacionCreateWithoutTarifasInput = {
    nombre: string
    descripcion: string
    capacidad: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    habitaciones?: HabitacionCreateNestedManyWithoutTipoHabitacionInput
    reservas?: ReservaCreateNestedManyWithoutTipoHabitacionInput
  }

  export type TipoHabitacionUncheckedCreateWithoutTarifasInput = {
    id_tipo_habitacion?: number
    nombre: string
    descripcion: string
    capacidad: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    habitaciones?: HabitacionUncheckedCreateNestedManyWithoutTipoHabitacionInput
    reservas?: ReservaUncheckedCreateNestedManyWithoutTipoHabitacionInput
  }

  export type TipoHabitacionCreateOrConnectWithoutTarifasInput = {
    where: TipoHabitacionWhereUniqueInput
    create: XOR<TipoHabitacionCreateWithoutTarifasInput, TipoHabitacionUncheckedCreateWithoutTarifasInput>
  }

  export type IngresoCreateWithoutTarifaInput = {
    fecha_ingreso: Date | string
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reserva?: ReservaCreateNestedOneWithoutIngresoInput
    habitacion: HabitacionCreateNestedOneWithoutIngresosInput
    huesped: HuespedCreateNestedOneWithoutIngresosInput
    usuario: UsuarioCreateNestedOneWithoutIngresosInput
    huespedesHabitaciones?: HuespedHabitacionCreateNestedManyWithoutIngresoInput
    cuenta?: CuentaCreateNestedManyWithoutIngresoInput
  }

  export type IngresoUncheckedCreateWithoutTarifaInput = {
    id_ingreso?: number
    fk_reserva?: number | null
    fk_habitacion: number
    fk_huesped: number
    fecha_ingreso: Date | string
    estado: string
    fk_usuario: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    huespedesHabitaciones?: HuespedHabitacionUncheckedCreateNestedManyWithoutIngresoInput
    cuenta?: CuentaUncheckedCreateNestedManyWithoutIngresoInput
  }

  export type IngresoCreateOrConnectWithoutTarifaInput = {
    where: IngresoWhereUniqueInput
    create: XOR<IngresoCreateWithoutTarifaInput, IngresoUncheckedCreateWithoutTarifaInput>
  }

  export type IngresoCreateManyTarifaInputEnvelope = {
    data: IngresoCreateManyTarifaInput | IngresoCreateManyTarifaInput[]
    skipDuplicates?: boolean
  }

  export type TipoHabitacionUpsertWithoutTarifasInput = {
    update: XOR<TipoHabitacionUpdateWithoutTarifasInput, TipoHabitacionUncheckedUpdateWithoutTarifasInput>
    create: XOR<TipoHabitacionCreateWithoutTarifasInput, TipoHabitacionUncheckedCreateWithoutTarifasInput>
    where?: TipoHabitacionWhereInput
  }

  export type TipoHabitacionUpdateToOneWithWhereWithoutTarifasInput = {
    where?: TipoHabitacionWhereInput
    data: XOR<TipoHabitacionUpdateWithoutTarifasInput, TipoHabitacionUncheckedUpdateWithoutTarifasInput>
  }

  export type TipoHabitacionUpdateWithoutTarifasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    habitaciones?: HabitacionUpdateManyWithoutTipoHabitacionNestedInput
    reservas?: ReservaUpdateManyWithoutTipoHabitacionNestedInput
  }

  export type TipoHabitacionUncheckedUpdateWithoutTarifasInput = {
    id_tipo_habitacion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    habitaciones?: HabitacionUncheckedUpdateManyWithoutTipoHabitacionNestedInput
    reservas?: ReservaUncheckedUpdateManyWithoutTipoHabitacionNestedInput
  }

  export type IngresoUpsertWithWhereUniqueWithoutTarifaInput = {
    where: IngresoWhereUniqueInput
    update: XOR<IngresoUpdateWithoutTarifaInput, IngresoUncheckedUpdateWithoutTarifaInput>
    create: XOR<IngresoCreateWithoutTarifaInput, IngresoUncheckedCreateWithoutTarifaInput>
  }

  export type IngresoUpdateWithWhereUniqueWithoutTarifaInput = {
    where: IngresoWhereUniqueInput
    data: XOR<IngresoUpdateWithoutTarifaInput, IngresoUncheckedUpdateWithoutTarifaInput>
  }

  export type IngresoUpdateManyWithWhereWithoutTarifaInput = {
    where: IngresoScalarWhereInput
    data: XOR<IngresoUpdateManyMutationInput, IngresoUncheckedUpdateManyWithoutTarifaInput>
  }

  export type TipoHabitacionCreateWithoutHabitacionesInput = {
    nombre: string
    descripcion: string
    capacidad: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    tarifas?: TarifaCreateNestedManyWithoutTipoHabitacionInput
    reservas?: ReservaCreateNestedManyWithoutTipoHabitacionInput
  }

  export type TipoHabitacionUncheckedCreateWithoutHabitacionesInput = {
    id_tipo_habitacion?: number
    nombre: string
    descripcion: string
    capacidad: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    tarifas?: TarifaUncheckedCreateNestedManyWithoutTipoHabitacionInput
    reservas?: ReservaUncheckedCreateNestedManyWithoutTipoHabitacionInput
  }

  export type TipoHabitacionCreateOrConnectWithoutHabitacionesInput = {
    where: TipoHabitacionWhereUniqueInput
    create: XOR<TipoHabitacionCreateWithoutHabitacionesInput, TipoHabitacionUncheckedCreateWithoutHabitacionesInput>
  }

  export type IngresoCreateWithoutHabitacionInput = {
    fecha_ingreso: Date | string
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reserva?: ReservaCreateNestedOneWithoutIngresoInput
    huesped: HuespedCreateNestedOneWithoutIngresosInput
    tarifa: TarifaCreateNestedOneWithoutIngresosInput
    usuario: UsuarioCreateNestedOneWithoutIngresosInput
    huespedesHabitaciones?: HuespedHabitacionCreateNestedManyWithoutIngresoInput
    cuenta?: CuentaCreateNestedManyWithoutIngresoInput
  }

  export type IngresoUncheckedCreateWithoutHabitacionInput = {
    id_ingreso?: number
    fk_reserva?: number | null
    fk_huesped: number
    fk_tarifa: number
    fecha_ingreso: Date | string
    estado: string
    fk_usuario: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    huespedesHabitaciones?: HuespedHabitacionUncheckedCreateNestedManyWithoutIngresoInput
    cuenta?: CuentaUncheckedCreateNestedManyWithoutIngresoInput
  }

  export type IngresoCreateOrConnectWithoutHabitacionInput = {
    where: IngresoWhereUniqueInput
    create: XOR<IngresoCreateWithoutHabitacionInput, IngresoUncheckedCreateWithoutHabitacionInput>
  }

  export type IngresoCreateManyHabitacionInputEnvelope = {
    data: IngresoCreateManyHabitacionInput | IngresoCreateManyHabitacionInput[]
    skipDuplicates?: boolean
  }

  export type TipoHabitacionUpsertWithoutHabitacionesInput = {
    update: XOR<TipoHabitacionUpdateWithoutHabitacionesInput, TipoHabitacionUncheckedUpdateWithoutHabitacionesInput>
    create: XOR<TipoHabitacionCreateWithoutHabitacionesInput, TipoHabitacionUncheckedCreateWithoutHabitacionesInput>
    where?: TipoHabitacionWhereInput
  }

  export type TipoHabitacionUpdateToOneWithWhereWithoutHabitacionesInput = {
    where?: TipoHabitacionWhereInput
    data: XOR<TipoHabitacionUpdateWithoutHabitacionesInput, TipoHabitacionUncheckedUpdateWithoutHabitacionesInput>
  }

  export type TipoHabitacionUpdateWithoutHabitacionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tarifas?: TarifaUpdateManyWithoutTipoHabitacionNestedInput
    reservas?: ReservaUpdateManyWithoutTipoHabitacionNestedInput
  }

  export type TipoHabitacionUncheckedUpdateWithoutHabitacionesInput = {
    id_tipo_habitacion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tarifas?: TarifaUncheckedUpdateManyWithoutTipoHabitacionNestedInput
    reservas?: ReservaUncheckedUpdateManyWithoutTipoHabitacionNestedInput
  }

  export type IngresoUpsertWithWhereUniqueWithoutHabitacionInput = {
    where: IngresoWhereUniqueInput
    update: XOR<IngresoUpdateWithoutHabitacionInput, IngresoUncheckedUpdateWithoutHabitacionInput>
    create: XOR<IngresoCreateWithoutHabitacionInput, IngresoUncheckedCreateWithoutHabitacionInput>
  }

  export type IngresoUpdateWithWhereUniqueWithoutHabitacionInput = {
    where: IngresoWhereUniqueInput
    data: XOR<IngresoUpdateWithoutHabitacionInput, IngresoUncheckedUpdateWithoutHabitacionInput>
  }

  export type IngresoUpdateManyWithWhereWithoutHabitacionInput = {
    where: IngresoScalarWhereInput
    data: XOR<IngresoUpdateManyMutationInput, IngresoUncheckedUpdateManyWithoutHabitacionInput>
  }

  export type HuespedCreateWithoutReservasInput = {
    nombre: string
    apellido: string
    documento_identidad: $Enums.DocumentoIdentidad
    numero_documento: string
    ruc?: string | null
    nacionalidad: $Enums.Nacionalidad
    telefono?: string | null
    email?: string | null
    fecha_nacimiento: Date | string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    ingresos?: IngresoCreateNestedManyWithoutHuespedInput
    huespedesHabitaciones?: HuespedHabitacionCreateNestedManyWithoutHuespedInput
  }

  export type HuespedUncheckedCreateWithoutReservasInput = {
    id_huesped?: number
    nombre: string
    apellido: string
    documento_identidad: $Enums.DocumentoIdentidad
    numero_documento: string
    ruc?: string | null
    nacionalidad: $Enums.Nacionalidad
    telefono?: string | null
    email?: string | null
    fecha_nacimiento: Date | string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    ingresos?: IngresoUncheckedCreateNestedManyWithoutHuespedInput
    huespedesHabitaciones?: HuespedHabitacionUncheckedCreateNestedManyWithoutHuespedInput
  }

  export type HuespedCreateOrConnectWithoutReservasInput = {
    where: HuespedWhereUniqueInput
    create: XOR<HuespedCreateWithoutReservasInput, HuespedUncheckedCreateWithoutReservasInput>
  }

  export type TipoHabitacionCreateWithoutReservasInput = {
    nombre: string
    descripcion: string
    capacidad: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    tarifas?: TarifaCreateNestedManyWithoutTipoHabitacionInput
    habitaciones?: HabitacionCreateNestedManyWithoutTipoHabitacionInput
  }

  export type TipoHabitacionUncheckedCreateWithoutReservasInput = {
    id_tipo_habitacion?: number
    nombre: string
    descripcion: string
    capacidad: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    tarifas?: TarifaUncheckedCreateNestedManyWithoutTipoHabitacionInput
    habitaciones?: HabitacionUncheckedCreateNestedManyWithoutTipoHabitacionInput
  }

  export type TipoHabitacionCreateOrConnectWithoutReservasInput = {
    where: TipoHabitacionWhereUniqueInput
    create: XOR<TipoHabitacionCreateWithoutReservasInput, TipoHabitacionUncheckedCreateWithoutReservasInput>
  }

  export type UsuarioCreateWithoutReservasInput = {
    nombre: string
    apellido: string
    nombre_usuario: string
    contrasena_hash: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    ingresos?: IngresoCreateNestedManyWithoutUsuarioInput
    consumos?: ConsumoCreateNestedManyWithoutUsuarioInput
    facturas?: FacturaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutReservasInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    nombre_usuario: string
    contrasena_hash: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    ingresos?: IngresoUncheckedCreateNestedManyWithoutUsuarioInput
    consumos?: ConsumoUncheckedCreateNestedManyWithoutUsuarioInput
    facturas?: FacturaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutReservasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutReservasInput, UsuarioUncheckedCreateWithoutReservasInput>
  }

  export type IngresoCreateWithoutReservaInput = {
    fecha_ingreso: Date | string
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    habitacion: HabitacionCreateNestedOneWithoutIngresosInput
    huesped: HuespedCreateNestedOneWithoutIngresosInput
    tarifa: TarifaCreateNestedOneWithoutIngresosInput
    usuario: UsuarioCreateNestedOneWithoutIngresosInput
    huespedesHabitaciones?: HuespedHabitacionCreateNestedManyWithoutIngresoInput
    cuenta?: CuentaCreateNestedManyWithoutIngresoInput
  }

  export type IngresoUncheckedCreateWithoutReservaInput = {
    id_ingreso?: number
    fk_habitacion: number
    fk_huesped: number
    fk_tarifa: number
    fecha_ingreso: Date | string
    estado: string
    fk_usuario: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    huespedesHabitaciones?: HuespedHabitacionUncheckedCreateNestedManyWithoutIngresoInput
    cuenta?: CuentaUncheckedCreateNestedManyWithoutIngresoInput
  }

  export type IngresoCreateOrConnectWithoutReservaInput = {
    where: IngresoWhereUniqueInput
    create: XOR<IngresoCreateWithoutReservaInput, IngresoUncheckedCreateWithoutReservaInput>
  }

  export type IngresoCreateManyReservaInputEnvelope = {
    data: IngresoCreateManyReservaInput | IngresoCreateManyReservaInput[]
    skipDuplicates?: boolean
  }

  export type HuespedUpsertWithoutReservasInput = {
    update: XOR<HuespedUpdateWithoutReservasInput, HuespedUncheckedUpdateWithoutReservasInput>
    create: XOR<HuespedCreateWithoutReservasInput, HuespedUncheckedCreateWithoutReservasInput>
    where?: HuespedWhereInput
  }

  export type HuespedUpdateToOneWithWhereWithoutReservasInput = {
    where?: HuespedWhereInput
    data: XOR<HuespedUpdateWithoutReservasInput, HuespedUncheckedUpdateWithoutReservasInput>
  }

  export type HuespedUpdateWithoutReservasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    documento_identidad?: EnumDocumentoIdentidadFieldUpdateOperationsInput | $Enums.DocumentoIdentidad
    numero_documento?: StringFieldUpdateOperationsInput | string
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    nacionalidad?: EnumNacionalidadFieldUpdateOperationsInput | $Enums.Nacionalidad
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingresos?: IngresoUpdateManyWithoutHuespedNestedInput
    huespedesHabitaciones?: HuespedHabitacionUpdateManyWithoutHuespedNestedInput
  }

  export type HuespedUncheckedUpdateWithoutReservasInput = {
    id_huesped?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    documento_identidad?: EnumDocumentoIdentidadFieldUpdateOperationsInput | $Enums.DocumentoIdentidad
    numero_documento?: StringFieldUpdateOperationsInput | string
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    nacionalidad?: EnumNacionalidadFieldUpdateOperationsInput | $Enums.Nacionalidad
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingresos?: IngresoUncheckedUpdateManyWithoutHuespedNestedInput
    huespedesHabitaciones?: HuespedHabitacionUncheckedUpdateManyWithoutHuespedNestedInput
  }

  export type TipoHabitacionUpsertWithoutReservasInput = {
    update: XOR<TipoHabitacionUpdateWithoutReservasInput, TipoHabitacionUncheckedUpdateWithoutReservasInput>
    create: XOR<TipoHabitacionCreateWithoutReservasInput, TipoHabitacionUncheckedCreateWithoutReservasInput>
    where?: TipoHabitacionWhereInput
  }

  export type TipoHabitacionUpdateToOneWithWhereWithoutReservasInput = {
    where?: TipoHabitacionWhereInput
    data: XOR<TipoHabitacionUpdateWithoutReservasInput, TipoHabitacionUncheckedUpdateWithoutReservasInput>
  }

  export type TipoHabitacionUpdateWithoutReservasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tarifas?: TarifaUpdateManyWithoutTipoHabitacionNestedInput
    habitaciones?: HabitacionUpdateManyWithoutTipoHabitacionNestedInput
  }

  export type TipoHabitacionUncheckedUpdateWithoutReservasInput = {
    id_tipo_habitacion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tarifas?: TarifaUncheckedUpdateManyWithoutTipoHabitacionNestedInput
    habitaciones?: HabitacionUncheckedUpdateManyWithoutTipoHabitacionNestedInput
  }

  export type UsuarioUpsertWithoutReservasInput = {
    update: XOR<UsuarioUpdateWithoutReservasInput, UsuarioUncheckedUpdateWithoutReservasInput>
    create: XOR<UsuarioCreateWithoutReservasInput, UsuarioUncheckedCreateWithoutReservasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutReservasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutReservasInput, UsuarioUncheckedUpdateWithoutReservasInput>
  }

  export type UsuarioUpdateWithoutReservasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    contrasena_hash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingresos?: IngresoUpdateManyWithoutUsuarioNestedInput
    consumos?: ConsumoUpdateManyWithoutUsuarioNestedInput
    facturas?: FacturaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutReservasInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    contrasena_hash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingresos?: IngresoUncheckedUpdateManyWithoutUsuarioNestedInput
    consumos?: ConsumoUncheckedUpdateManyWithoutUsuarioNestedInput
    facturas?: FacturaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type IngresoUpsertWithWhereUniqueWithoutReservaInput = {
    where: IngresoWhereUniqueInput
    update: XOR<IngresoUpdateWithoutReservaInput, IngresoUncheckedUpdateWithoutReservaInput>
    create: XOR<IngresoCreateWithoutReservaInput, IngresoUncheckedCreateWithoutReservaInput>
  }

  export type IngresoUpdateWithWhereUniqueWithoutReservaInput = {
    where: IngresoWhereUniqueInput
    data: XOR<IngresoUpdateWithoutReservaInput, IngresoUncheckedUpdateWithoutReservaInput>
  }

  export type IngresoUpdateManyWithWhereWithoutReservaInput = {
    where: IngresoScalarWhereInput
    data: XOR<IngresoUpdateManyMutationInput, IngresoUncheckedUpdateManyWithoutReservaInput>
  }

  export type ReservaCreateWithoutIngresoInput = {
    check_in: Date | string
    check_out: Date | string
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    huesped: HuespedCreateNestedOneWithoutReservasInput
    tipoHabitacion: TipoHabitacionCreateNestedOneWithoutReservasInput
    usuario: UsuarioCreateNestedOneWithoutReservasInput
  }

  export type ReservaUncheckedCreateWithoutIngresoInput = {
    id_reserva?: number
    fk_huesped: number
    fk_tipo_habitacion: number
    check_in: Date | string
    check_out: Date | string
    estado: string
    fk_usuario: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReservaCreateOrConnectWithoutIngresoInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutIngresoInput, ReservaUncheckedCreateWithoutIngresoInput>
  }

  export type HabitacionCreateWithoutIngresosInput = {
    numero: string
    piso: string
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    tipoHabitacion: TipoHabitacionCreateNestedOneWithoutHabitacionesInput
  }

  export type HabitacionUncheckedCreateWithoutIngresosInput = {
    id_habitacion?: number
    numero: string
    fk_tipo_habitacion: number
    piso: string
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HabitacionCreateOrConnectWithoutIngresosInput = {
    where: HabitacionWhereUniqueInput
    create: XOR<HabitacionCreateWithoutIngresosInput, HabitacionUncheckedCreateWithoutIngresosInput>
  }

  export type HuespedCreateWithoutIngresosInput = {
    nombre: string
    apellido: string
    documento_identidad: $Enums.DocumentoIdentidad
    numero_documento: string
    ruc?: string | null
    nacionalidad: $Enums.Nacionalidad
    telefono?: string | null
    email?: string | null
    fecha_nacimiento: Date | string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reservas?: ReservaCreateNestedManyWithoutHuespedInput
    huespedesHabitaciones?: HuespedHabitacionCreateNestedManyWithoutHuespedInput
  }

  export type HuespedUncheckedCreateWithoutIngresosInput = {
    id_huesped?: number
    nombre: string
    apellido: string
    documento_identidad: $Enums.DocumentoIdentidad
    numero_documento: string
    ruc?: string | null
    nacionalidad: $Enums.Nacionalidad
    telefono?: string | null
    email?: string | null
    fecha_nacimiento: Date | string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reservas?: ReservaUncheckedCreateNestedManyWithoutHuespedInput
    huespedesHabitaciones?: HuespedHabitacionUncheckedCreateNestedManyWithoutHuespedInput
  }

  export type HuespedCreateOrConnectWithoutIngresosInput = {
    where: HuespedWhereUniqueInput
    create: XOR<HuespedCreateWithoutIngresosInput, HuespedUncheckedCreateWithoutIngresosInput>
  }

  export type TarifaCreateWithoutIngresosInput = {
    descripcion: string
    precio: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    tipoHabitacion: TipoHabitacionCreateNestedOneWithoutTarifasInput
  }

  export type TarifaUncheckedCreateWithoutIngresosInput = {
    id_tarifa?: number
    fk_tipo_habitacion: number
    descripcion: string
    precio: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TarifaCreateOrConnectWithoutIngresosInput = {
    where: TarifaWhereUniqueInput
    create: XOR<TarifaCreateWithoutIngresosInput, TarifaUncheckedCreateWithoutIngresosInput>
  }

  export type UsuarioCreateWithoutIngresosInput = {
    nombre: string
    apellido: string
    nombre_usuario: string
    contrasena_hash: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reservas?: ReservaCreateNestedManyWithoutUsuarioInput
    consumos?: ConsumoCreateNestedManyWithoutUsuarioInput
    facturas?: FacturaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutIngresosInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    nombre_usuario: string
    contrasena_hash: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reservas?: ReservaUncheckedCreateNestedManyWithoutUsuarioInput
    consumos?: ConsumoUncheckedCreateNestedManyWithoutUsuarioInput
    facturas?: FacturaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutIngresosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutIngresosInput, UsuarioUncheckedCreateWithoutIngresosInput>
  }

  export type HuespedHabitacionCreateWithoutIngresoInput = {
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    huesped: HuespedCreateNestedOneWithoutHuespedesHabitacionesInput
  }

  export type HuespedHabitacionUncheckedCreateWithoutIngresoInput = {
    id_huesped_habitacion?: number
    fk_huesped: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HuespedHabitacionCreateOrConnectWithoutIngresoInput = {
    where: HuespedHabitacionWhereUniqueInput
    create: XOR<HuespedHabitacionCreateWithoutIngresoInput, HuespedHabitacionUncheckedCreateWithoutIngresoInput>
  }

  export type HuespedHabitacionCreateManyIngresoInputEnvelope = {
    data: HuespedHabitacionCreateManyIngresoInput | HuespedHabitacionCreateManyIngresoInput[]
    skipDuplicates?: boolean
  }

  export type CuentaCreateWithoutIngresoInput = {
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    consumos?: ConsumoCreateNestedManyWithoutCuentaInput
    factura?: FacturaCreateNestedManyWithoutCuentaInput
  }

  export type CuentaUncheckedCreateWithoutIngresoInput = {
    id_cuenta?: number
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    consumos?: ConsumoUncheckedCreateNestedManyWithoutCuentaInput
    factura?: FacturaUncheckedCreateNestedManyWithoutCuentaInput
  }

  export type CuentaCreateOrConnectWithoutIngresoInput = {
    where: CuentaWhereUniqueInput
    create: XOR<CuentaCreateWithoutIngresoInput, CuentaUncheckedCreateWithoutIngresoInput>
  }

  export type CuentaCreateManyIngresoInputEnvelope = {
    data: CuentaCreateManyIngresoInput | CuentaCreateManyIngresoInput[]
    skipDuplicates?: boolean
  }

  export type ReservaUpsertWithoutIngresoInput = {
    update: XOR<ReservaUpdateWithoutIngresoInput, ReservaUncheckedUpdateWithoutIngresoInput>
    create: XOR<ReservaCreateWithoutIngresoInput, ReservaUncheckedCreateWithoutIngresoInput>
    where?: ReservaWhereInput
  }

  export type ReservaUpdateToOneWithWhereWithoutIngresoInput = {
    where?: ReservaWhereInput
    data: XOR<ReservaUpdateWithoutIngresoInput, ReservaUncheckedUpdateWithoutIngresoInput>
  }

  export type ReservaUpdateWithoutIngresoInput = {
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    huesped?: HuespedUpdateOneRequiredWithoutReservasNestedInput
    tipoHabitacion?: TipoHabitacionUpdateOneRequiredWithoutReservasNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservaUncheckedUpdateWithoutIngresoInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    fk_huesped?: IntFieldUpdateOperationsInput | number
    fk_tipo_habitacion?: IntFieldUpdateOperationsInput | number
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    fk_usuario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitacionUpsertWithoutIngresosInput = {
    update: XOR<HabitacionUpdateWithoutIngresosInput, HabitacionUncheckedUpdateWithoutIngresosInput>
    create: XOR<HabitacionCreateWithoutIngresosInput, HabitacionUncheckedCreateWithoutIngresosInput>
    where?: HabitacionWhereInput
  }

  export type HabitacionUpdateToOneWithWhereWithoutIngresosInput = {
    where?: HabitacionWhereInput
    data: XOR<HabitacionUpdateWithoutIngresosInput, HabitacionUncheckedUpdateWithoutIngresosInput>
  }

  export type HabitacionUpdateWithoutIngresosInput = {
    numero?: StringFieldUpdateOperationsInput | string
    piso?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoHabitacion?: TipoHabitacionUpdateOneRequiredWithoutHabitacionesNestedInput
  }

  export type HabitacionUncheckedUpdateWithoutIngresosInput = {
    id_habitacion?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    fk_tipo_habitacion?: IntFieldUpdateOperationsInput | number
    piso?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HuespedUpsertWithoutIngresosInput = {
    update: XOR<HuespedUpdateWithoutIngresosInput, HuespedUncheckedUpdateWithoutIngresosInput>
    create: XOR<HuespedCreateWithoutIngresosInput, HuespedUncheckedCreateWithoutIngresosInput>
    where?: HuespedWhereInput
  }

  export type HuespedUpdateToOneWithWhereWithoutIngresosInput = {
    where?: HuespedWhereInput
    data: XOR<HuespedUpdateWithoutIngresosInput, HuespedUncheckedUpdateWithoutIngresosInput>
  }

  export type HuespedUpdateWithoutIngresosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    documento_identidad?: EnumDocumentoIdentidadFieldUpdateOperationsInput | $Enums.DocumentoIdentidad
    numero_documento?: StringFieldUpdateOperationsInput | string
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    nacionalidad?: EnumNacionalidadFieldUpdateOperationsInput | $Enums.Nacionalidad
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUpdateManyWithoutHuespedNestedInput
    huespedesHabitaciones?: HuespedHabitacionUpdateManyWithoutHuespedNestedInput
  }

  export type HuespedUncheckedUpdateWithoutIngresosInput = {
    id_huesped?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    documento_identidad?: EnumDocumentoIdentidadFieldUpdateOperationsInput | $Enums.DocumentoIdentidad
    numero_documento?: StringFieldUpdateOperationsInput | string
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    nacionalidad?: EnumNacionalidadFieldUpdateOperationsInput | $Enums.Nacionalidad
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUncheckedUpdateManyWithoutHuespedNestedInput
    huespedesHabitaciones?: HuespedHabitacionUncheckedUpdateManyWithoutHuespedNestedInput
  }

  export type TarifaUpsertWithoutIngresosInput = {
    update: XOR<TarifaUpdateWithoutIngresosInput, TarifaUncheckedUpdateWithoutIngresosInput>
    create: XOR<TarifaCreateWithoutIngresosInput, TarifaUncheckedCreateWithoutIngresosInput>
    where?: TarifaWhereInput
  }

  export type TarifaUpdateToOneWithWhereWithoutIngresosInput = {
    where?: TarifaWhereInput
    data: XOR<TarifaUpdateWithoutIngresosInput, TarifaUncheckedUpdateWithoutIngresosInput>
  }

  export type TarifaUpdateWithoutIngresosInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoHabitacion?: TipoHabitacionUpdateOneRequiredWithoutTarifasNestedInput
  }

  export type TarifaUncheckedUpdateWithoutIngresosInput = {
    id_tarifa?: IntFieldUpdateOperationsInput | number
    fk_tipo_habitacion?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUpsertWithoutIngresosInput = {
    update: XOR<UsuarioUpdateWithoutIngresosInput, UsuarioUncheckedUpdateWithoutIngresosInput>
    create: XOR<UsuarioCreateWithoutIngresosInput, UsuarioUncheckedCreateWithoutIngresosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutIngresosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutIngresosInput, UsuarioUncheckedUpdateWithoutIngresosInput>
  }

  export type UsuarioUpdateWithoutIngresosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    contrasena_hash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUpdateManyWithoutUsuarioNestedInput
    consumos?: ConsumoUpdateManyWithoutUsuarioNestedInput
    facturas?: FacturaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutIngresosInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    contrasena_hash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUncheckedUpdateManyWithoutUsuarioNestedInput
    consumos?: ConsumoUncheckedUpdateManyWithoutUsuarioNestedInput
    facturas?: FacturaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type HuespedHabitacionUpsertWithWhereUniqueWithoutIngresoInput = {
    where: HuespedHabitacionWhereUniqueInput
    update: XOR<HuespedHabitacionUpdateWithoutIngresoInput, HuespedHabitacionUncheckedUpdateWithoutIngresoInput>
    create: XOR<HuespedHabitacionCreateWithoutIngresoInput, HuespedHabitacionUncheckedCreateWithoutIngresoInput>
  }

  export type HuespedHabitacionUpdateWithWhereUniqueWithoutIngresoInput = {
    where: HuespedHabitacionWhereUniqueInput
    data: XOR<HuespedHabitacionUpdateWithoutIngresoInput, HuespedHabitacionUncheckedUpdateWithoutIngresoInput>
  }

  export type HuespedHabitacionUpdateManyWithWhereWithoutIngresoInput = {
    where: HuespedHabitacionScalarWhereInput
    data: XOR<HuespedHabitacionUpdateManyMutationInput, HuespedHabitacionUncheckedUpdateManyWithoutIngresoInput>
  }

  export type CuentaUpsertWithWhereUniqueWithoutIngresoInput = {
    where: CuentaWhereUniqueInput
    update: XOR<CuentaUpdateWithoutIngresoInput, CuentaUncheckedUpdateWithoutIngresoInput>
    create: XOR<CuentaCreateWithoutIngresoInput, CuentaUncheckedCreateWithoutIngresoInput>
  }

  export type CuentaUpdateWithWhereUniqueWithoutIngresoInput = {
    where: CuentaWhereUniqueInput
    data: XOR<CuentaUpdateWithoutIngresoInput, CuentaUncheckedUpdateWithoutIngresoInput>
  }

  export type CuentaUpdateManyWithWhereWithoutIngresoInput = {
    where: CuentaScalarWhereInput
    data: XOR<CuentaUpdateManyMutationInput, CuentaUncheckedUpdateManyWithoutIngresoInput>
  }

  export type CuentaScalarWhereInput = {
    AND?: CuentaScalarWhereInput | CuentaScalarWhereInput[]
    OR?: CuentaScalarWhereInput[]
    NOT?: CuentaScalarWhereInput | CuentaScalarWhereInput[]
    id_cuenta?: IntFilter<"Cuenta"> | number
    fk_ingreso?: IntFilter<"Cuenta"> | number
    estado?: StringFilter<"Cuenta"> | string
    activo?: BoolFilter<"Cuenta"> | boolean
    created_at?: DateTimeFilter<"Cuenta"> | Date | string
    updated_at?: DateTimeFilter<"Cuenta"> | Date | string
  }

  export type HuespedCreateWithoutHuespedesHabitacionesInput = {
    nombre: string
    apellido: string
    documento_identidad: $Enums.DocumentoIdentidad
    numero_documento: string
    ruc?: string | null
    nacionalidad: $Enums.Nacionalidad
    telefono?: string | null
    email?: string | null
    fecha_nacimiento: Date | string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reservas?: ReservaCreateNestedManyWithoutHuespedInput
    ingresos?: IngresoCreateNestedManyWithoutHuespedInput
  }

  export type HuespedUncheckedCreateWithoutHuespedesHabitacionesInput = {
    id_huesped?: number
    nombre: string
    apellido: string
    documento_identidad: $Enums.DocumentoIdentidad
    numero_documento: string
    ruc?: string | null
    nacionalidad: $Enums.Nacionalidad
    telefono?: string | null
    email?: string | null
    fecha_nacimiento: Date | string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reservas?: ReservaUncheckedCreateNestedManyWithoutHuespedInput
    ingresos?: IngresoUncheckedCreateNestedManyWithoutHuespedInput
  }

  export type HuespedCreateOrConnectWithoutHuespedesHabitacionesInput = {
    where: HuespedWhereUniqueInput
    create: XOR<HuespedCreateWithoutHuespedesHabitacionesInput, HuespedUncheckedCreateWithoutHuespedesHabitacionesInput>
  }

  export type IngresoCreateWithoutHuespedesHabitacionesInput = {
    fecha_ingreso: Date | string
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reserva?: ReservaCreateNestedOneWithoutIngresoInput
    habitacion: HabitacionCreateNestedOneWithoutIngresosInput
    huesped: HuespedCreateNestedOneWithoutIngresosInput
    tarifa: TarifaCreateNestedOneWithoutIngresosInput
    usuario: UsuarioCreateNestedOneWithoutIngresosInput
    cuenta?: CuentaCreateNestedManyWithoutIngresoInput
  }

  export type IngresoUncheckedCreateWithoutHuespedesHabitacionesInput = {
    id_ingreso?: number
    fk_reserva?: number | null
    fk_habitacion: number
    fk_huesped: number
    fk_tarifa: number
    fecha_ingreso: Date | string
    estado: string
    fk_usuario: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    cuenta?: CuentaUncheckedCreateNestedManyWithoutIngresoInput
  }

  export type IngresoCreateOrConnectWithoutHuespedesHabitacionesInput = {
    where: IngresoWhereUniqueInput
    create: XOR<IngresoCreateWithoutHuespedesHabitacionesInput, IngresoUncheckedCreateWithoutHuespedesHabitacionesInput>
  }

  export type HuespedUpsertWithoutHuespedesHabitacionesInput = {
    update: XOR<HuespedUpdateWithoutHuespedesHabitacionesInput, HuespedUncheckedUpdateWithoutHuespedesHabitacionesInput>
    create: XOR<HuespedCreateWithoutHuespedesHabitacionesInput, HuespedUncheckedCreateWithoutHuespedesHabitacionesInput>
    where?: HuespedWhereInput
  }

  export type HuespedUpdateToOneWithWhereWithoutHuespedesHabitacionesInput = {
    where?: HuespedWhereInput
    data: XOR<HuespedUpdateWithoutHuespedesHabitacionesInput, HuespedUncheckedUpdateWithoutHuespedesHabitacionesInput>
  }

  export type HuespedUpdateWithoutHuespedesHabitacionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    documento_identidad?: EnumDocumentoIdentidadFieldUpdateOperationsInput | $Enums.DocumentoIdentidad
    numero_documento?: StringFieldUpdateOperationsInput | string
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    nacionalidad?: EnumNacionalidadFieldUpdateOperationsInput | $Enums.Nacionalidad
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUpdateManyWithoutHuespedNestedInput
    ingresos?: IngresoUpdateManyWithoutHuespedNestedInput
  }

  export type HuespedUncheckedUpdateWithoutHuespedesHabitacionesInput = {
    id_huesped?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    documento_identidad?: EnumDocumentoIdentidadFieldUpdateOperationsInput | $Enums.DocumentoIdentidad
    numero_documento?: StringFieldUpdateOperationsInput | string
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    nacionalidad?: EnumNacionalidadFieldUpdateOperationsInput | $Enums.Nacionalidad
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUncheckedUpdateManyWithoutHuespedNestedInput
    ingresos?: IngresoUncheckedUpdateManyWithoutHuespedNestedInput
  }

  export type IngresoUpsertWithoutHuespedesHabitacionesInput = {
    update: XOR<IngresoUpdateWithoutHuespedesHabitacionesInput, IngresoUncheckedUpdateWithoutHuespedesHabitacionesInput>
    create: XOR<IngresoCreateWithoutHuespedesHabitacionesInput, IngresoUncheckedCreateWithoutHuespedesHabitacionesInput>
    where?: IngresoWhereInput
  }

  export type IngresoUpdateToOneWithWhereWithoutHuespedesHabitacionesInput = {
    where?: IngresoWhereInput
    data: XOR<IngresoUpdateWithoutHuespedesHabitacionesInput, IngresoUncheckedUpdateWithoutHuespedesHabitacionesInput>
  }

  export type IngresoUpdateWithoutHuespedesHabitacionesInput = {
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reserva?: ReservaUpdateOneWithoutIngresoNestedInput
    habitacion?: HabitacionUpdateOneRequiredWithoutIngresosNestedInput
    huesped?: HuespedUpdateOneRequiredWithoutIngresosNestedInput
    tarifa?: TarifaUpdateOneRequiredWithoutIngresosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutIngresosNestedInput
    cuenta?: CuentaUpdateManyWithoutIngresoNestedInput
  }

  export type IngresoUncheckedUpdateWithoutHuespedesHabitacionesInput = {
    id_ingreso?: IntFieldUpdateOperationsInput | number
    fk_reserva?: NullableIntFieldUpdateOperationsInput | number | null
    fk_habitacion?: IntFieldUpdateOperationsInput | number
    fk_huesped?: IntFieldUpdateOperationsInput | number
    fk_tarifa?: IntFieldUpdateOperationsInput | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    fk_usuario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cuenta?: CuentaUncheckedUpdateManyWithoutIngresoNestedInput
  }

  export type IngresoCreateWithoutCuentaInput = {
    fecha_ingreso: Date | string
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reserva?: ReservaCreateNestedOneWithoutIngresoInput
    habitacion: HabitacionCreateNestedOneWithoutIngresosInput
    huesped: HuespedCreateNestedOneWithoutIngresosInput
    tarifa: TarifaCreateNestedOneWithoutIngresosInput
    usuario: UsuarioCreateNestedOneWithoutIngresosInput
    huespedesHabitaciones?: HuespedHabitacionCreateNestedManyWithoutIngresoInput
  }

  export type IngresoUncheckedCreateWithoutCuentaInput = {
    id_ingreso?: number
    fk_reserva?: number | null
    fk_habitacion: number
    fk_huesped: number
    fk_tarifa: number
    fecha_ingreso: Date | string
    estado: string
    fk_usuario: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    huespedesHabitaciones?: HuespedHabitacionUncheckedCreateNestedManyWithoutIngresoInput
  }

  export type IngresoCreateOrConnectWithoutCuentaInput = {
    where: IngresoWhereUniqueInput
    create: XOR<IngresoCreateWithoutCuentaInput, IngresoUncheckedCreateWithoutCuentaInput>
  }

  export type ConsumoCreateWithoutCuentaInput = {
    descripcion: string
    cantidad: number
    monto: number
    activo?: boolean
    usuario: UsuarioCreateNestedOneWithoutConsumosInput
  }

  export type ConsumoUncheckedCreateWithoutCuentaInput = {
    id_consumo?: number
    descripcion: string
    cantidad: number
    monto: number
    fk_usuario: number
    activo?: boolean
  }

  export type ConsumoCreateOrConnectWithoutCuentaInput = {
    where: ConsumoWhereUniqueInput
    create: XOR<ConsumoCreateWithoutCuentaInput, ConsumoUncheckedCreateWithoutCuentaInput>
  }

  export type ConsumoCreateManyCuentaInputEnvelope = {
    data: ConsumoCreateManyCuentaInput | ConsumoCreateManyCuentaInput[]
    skipDuplicates?: boolean
  }

  export type FacturaCreateWithoutCuentaInput = {
    fecha_emision?: Date | string
    condicion_venta: string
    total: number
    timbrado: TimbradoCreateNestedOneWithoutFacturasInput
    usuario: UsuarioCreateNestedOneWithoutFacturasInput
    detalles?: DetalleFacturaCreateNestedManyWithoutFacturaInput
  }

  export type FacturaUncheckedCreateWithoutCuentaInput = {
    id_factura?: number
    fk_timbrado: number
    fecha_emision?: Date | string
    condicion_venta: string
    total: number
    fk_usuario: number
    detalles?: DetalleFacturaUncheckedCreateNestedManyWithoutFacturaInput
  }

  export type FacturaCreateOrConnectWithoutCuentaInput = {
    where: FacturaWhereUniqueInput
    create: XOR<FacturaCreateWithoutCuentaInput, FacturaUncheckedCreateWithoutCuentaInput>
  }

  export type FacturaCreateManyCuentaInputEnvelope = {
    data: FacturaCreateManyCuentaInput | FacturaCreateManyCuentaInput[]
    skipDuplicates?: boolean
  }

  export type IngresoUpsertWithoutCuentaInput = {
    update: XOR<IngresoUpdateWithoutCuentaInput, IngresoUncheckedUpdateWithoutCuentaInput>
    create: XOR<IngresoCreateWithoutCuentaInput, IngresoUncheckedCreateWithoutCuentaInput>
    where?: IngresoWhereInput
  }

  export type IngresoUpdateToOneWithWhereWithoutCuentaInput = {
    where?: IngresoWhereInput
    data: XOR<IngresoUpdateWithoutCuentaInput, IngresoUncheckedUpdateWithoutCuentaInput>
  }

  export type IngresoUpdateWithoutCuentaInput = {
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reserva?: ReservaUpdateOneWithoutIngresoNestedInput
    habitacion?: HabitacionUpdateOneRequiredWithoutIngresosNestedInput
    huesped?: HuespedUpdateOneRequiredWithoutIngresosNestedInput
    tarifa?: TarifaUpdateOneRequiredWithoutIngresosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutIngresosNestedInput
    huespedesHabitaciones?: HuespedHabitacionUpdateManyWithoutIngresoNestedInput
  }

  export type IngresoUncheckedUpdateWithoutCuentaInput = {
    id_ingreso?: IntFieldUpdateOperationsInput | number
    fk_reserva?: NullableIntFieldUpdateOperationsInput | number | null
    fk_habitacion?: IntFieldUpdateOperationsInput | number
    fk_huesped?: IntFieldUpdateOperationsInput | number
    fk_tarifa?: IntFieldUpdateOperationsInput | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    fk_usuario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    huespedesHabitaciones?: HuespedHabitacionUncheckedUpdateManyWithoutIngresoNestedInput
  }

  export type ConsumoUpsertWithWhereUniqueWithoutCuentaInput = {
    where: ConsumoWhereUniqueInput
    update: XOR<ConsumoUpdateWithoutCuentaInput, ConsumoUncheckedUpdateWithoutCuentaInput>
    create: XOR<ConsumoCreateWithoutCuentaInput, ConsumoUncheckedCreateWithoutCuentaInput>
  }

  export type ConsumoUpdateWithWhereUniqueWithoutCuentaInput = {
    where: ConsumoWhereUniqueInput
    data: XOR<ConsumoUpdateWithoutCuentaInput, ConsumoUncheckedUpdateWithoutCuentaInput>
  }

  export type ConsumoUpdateManyWithWhereWithoutCuentaInput = {
    where: ConsumoScalarWhereInput
    data: XOR<ConsumoUpdateManyMutationInput, ConsumoUncheckedUpdateManyWithoutCuentaInput>
  }

  export type FacturaUpsertWithWhereUniqueWithoutCuentaInput = {
    where: FacturaWhereUniqueInput
    update: XOR<FacturaUpdateWithoutCuentaInput, FacturaUncheckedUpdateWithoutCuentaInput>
    create: XOR<FacturaCreateWithoutCuentaInput, FacturaUncheckedCreateWithoutCuentaInput>
  }

  export type FacturaUpdateWithWhereUniqueWithoutCuentaInput = {
    where: FacturaWhereUniqueInput
    data: XOR<FacturaUpdateWithoutCuentaInput, FacturaUncheckedUpdateWithoutCuentaInput>
  }

  export type FacturaUpdateManyWithWhereWithoutCuentaInput = {
    where: FacturaScalarWhereInput
    data: XOR<FacturaUpdateManyMutationInput, FacturaUncheckedUpdateManyWithoutCuentaInput>
  }

  export type CuentaCreateWithoutConsumosInput = {
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    ingreso: IngresoCreateNestedOneWithoutCuentaInput
    factura?: FacturaCreateNestedManyWithoutCuentaInput
  }

  export type CuentaUncheckedCreateWithoutConsumosInput = {
    id_cuenta?: number
    fk_ingreso: number
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    factura?: FacturaUncheckedCreateNestedManyWithoutCuentaInput
  }

  export type CuentaCreateOrConnectWithoutConsumosInput = {
    where: CuentaWhereUniqueInput
    create: XOR<CuentaCreateWithoutConsumosInput, CuentaUncheckedCreateWithoutConsumosInput>
  }

  export type UsuarioCreateWithoutConsumosInput = {
    nombre: string
    apellido: string
    nombre_usuario: string
    contrasena_hash: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reservas?: ReservaCreateNestedManyWithoutUsuarioInput
    ingresos?: IngresoCreateNestedManyWithoutUsuarioInput
    facturas?: FacturaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutConsumosInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    nombre_usuario: string
    contrasena_hash: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reservas?: ReservaUncheckedCreateNestedManyWithoutUsuarioInput
    ingresos?: IngresoUncheckedCreateNestedManyWithoutUsuarioInput
    facturas?: FacturaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutConsumosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutConsumosInput, UsuarioUncheckedCreateWithoutConsumosInput>
  }

  export type CuentaUpsertWithoutConsumosInput = {
    update: XOR<CuentaUpdateWithoutConsumosInput, CuentaUncheckedUpdateWithoutConsumosInput>
    create: XOR<CuentaCreateWithoutConsumosInput, CuentaUncheckedCreateWithoutConsumosInput>
    where?: CuentaWhereInput
  }

  export type CuentaUpdateToOneWithWhereWithoutConsumosInput = {
    where?: CuentaWhereInput
    data: XOR<CuentaUpdateWithoutConsumosInput, CuentaUncheckedUpdateWithoutConsumosInput>
  }

  export type CuentaUpdateWithoutConsumosInput = {
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingreso?: IngresoUpdateOneRequiredWithoutCuentaNestedInput
    factura?: FacturaUpdateManyWithoutCuentaNestedInput
  }

  export type CuentaUncheckedUpdateWithoutConsumosInput = {
    id_cuenta?: IntFieldUpdateOperationsInput | number
    fk_ingreso?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    factura?: FacturaUncheckedUpdateManyWithoutCuentaNestedInput
  }

  export type UsuarioUpsertWithoutConsumosInput = {
    update: XOR<UsuarioUpdateWithoutConsumosInput, UsuarioUncheckedUpdateWithoutConsumosInput>
    create: XOR<UsuarioCreateWithoutConsumosInput, UsuarioUncheckedCreateWithoutConsumosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutConsumosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutConsumosInput, UsuarioUncheckedUpdateWithoutConsumosInput>
  }

  export type UsuarioUpdateWithoutConsumosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    contrasena_hash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUpdateManyWithoutUsuarioNestedInput
    ingresos?: IngresoUpdateManyWithoutUsuarioNestedInput
    facturas?: FacturaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutConsumosInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    contrasena_hash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUncheckedUpdateManyWithoutUsuarioNestedInput
    ingresos?: IngresoUncheckedUpdateManyWithoutUsuarioNestedInput
    facturas?: FacturaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type FacturaCreateWithoutTimbradoInput = {
    fecha_emision?: Date | string
    condicion_venta: string
    total: number
    cuenta?: CuentaCreateNestedOneWithoutFacturaInput
    usuario: UsuarioCreateNestedOneWithoutFacturasInput
    detalles?: DetalleFacturaCreateNestedManyWithoutFacturaInput
  }

  export type FacturaUncheckedCreateWithoutTimbradoInput = {
    id_factura?: number
    fk_cuenta: number
    fecha_emision?: Date | string
    condicion_venta: string
    total: number
    fk_usuario: number
    detalles?: DetalleFacturaUncheckedCreateNestedManyWithoutFacturaInput
  }

  export type FacturaCreateOrConnectWithoutTimbradoInput = {
    where: FacturaWhereUniqueInput
    create: XOR<FacturaCreateWithoutTimbradoInput, FacturaUncheckedCreateWithoutTimbradoInput>
  }

  export type FacturaCreateManyTimbradoInputEnvelope = {
    data: FacturaCreateManyTimbradoInput | FacturaCreateManyTimbradoInput[]
    skipDuplicates?: boolean
  }

  export type FacturaUpsertWithWhereUniqueWithoutTimbradoInput = {
    where: FacturaWhereUniqueInput
    update: XOR<FacturaUpdateWithoutTimbradoInput, FacturaUncheckedUpdateWithoutTimbradoInput>
    create: XOR<FacturaCreateWithoutTimbradoInput, FacturaUncheckedCreateWithoutTimbradoInput>
  }

  export type FacturaUpdateWithWhereUniqueWithoutTimbradoInput = {
    where: FacturaWhereUniqueInput
    data: XOR<FacturaUpdateWithoutTimbradoInput, FacturaUncheckedUpdateWithoutTimbradoInput>
  }

  export type FacturaUpdateManyWithWhereWithoutTimbradoInput = {
    where: FacturaScalarWhereInput
    data: XOR<FacturaUpdateManyMutationInput, FacturaUncheckedUpdateManyWithoutTimbradoInput>
  }

  export type CuentaCreateWithoutFacturaInput = {
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    ingreso: IngresoCreateNestedOneWithoutCuentaInput
    consumos?: ConsumoCreateNestedManyWithoutCuentaInput
  }

  export type CuentaUncheckedCreateWithoutFacturaInput = {
    id_cuenta?: number
    fk_ingreso: number
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    consumos?: ConsumoUncheckedCreateNestedManyWithoutCuentaInput
  }

  export type CuentaCreateOrConnectWithoutFacturaInput = {
    where: CuentaWhereUniqueInput
    create: XOR<CuentaCreateWithoutFacturaInput, CuentaUncheckedCreateWithoutFacturaInput>
  }

  export type TimbradoCreateWithoutFacturasInput = {
    fecha_inicio: Date | string
    fecha_fin: Date | string
    codigo_sucursal: number
    codigo_punto_facturacion: number
    numero_secuencial: number
    activo?: boolean
  }

  export type TimbradoUncheckedCreateWithoutFacturasInput = {
    id_timbrado?: number
    fecha_inicio: Date | string
    fecha_fin: Date | string
    codigo_sucursal: number
    codigo_punto_facturacion: number
    numero_secuencial: number
    activo?: boolean
  }

  export type TimbradoCreateOrConnectWithoutFacturasInput = {
    where: TimbradoWhereUniqueInput
    create: XOR<TimbradoCreateWithoutFacturasInput, TimbradoUncheckedCreateWithoutFacturasInput>
  }

  export type UsuarioCreateWithoutFacturasInput = {
    nombre: string
    apellido: string
    nombre_usuario: string
    contrasena_hash: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reservas?: ReservaCreateNestedManyWithoutUsuarioInput
    ingresos?: IngresoCreateNestedManyWithoutUsuarioInput
    consumos?: ConsumoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutFacturasInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    nombre_usuario: string
    contrasena_hash: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    reservas?: ReservaUncheckedCreateNestedManyWithoutUsuarioInput
    ingresos?: IngresoUncheckedCreateNestedManyWithoutUsuarioInput
    consumos?: ConsumoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutFacturasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutFacturasInput, UsuarioUncheckedCreateWithoutFacturasInput>
  }

  export type DetalleFacturaCreateWithoutFacturaInput = {
    descripcion: string
    cantidad: number
    precio_unitario: number
    descuento: number
    porcentaje_iva: number
  }

  export type DetalleFacturaUncheckedCreateWithoutFacturaInput = {
    id_detalle_factura?: number
    descripcion: string
    cantidad: number
    precio_unitario: number
    descuento: number
    porcentaje_iva: number
  }

  export type DetalleFacturaCreateOrConnectWithoutFacturaInput = {
    where: DetalleFacturaWhereUniqueInput
    create: XOR<DetalleFacturaCreateWithoutFacturaInput, DetalleFacturaUncheckedCreateWithoutFacturaInput>
  }

  export type DetalleFacturaCreateManyFacturaInputEnvelope = {
    data: DetalleFacturaCreateManyFacturaInput | DetalleFacturaCreateManyFacturaInput[]
    skipDuplicates?: boolean
  }

  export type CuentaUpsertWithoutFacturaInput = {
    update: XOR<CuentaUpdateWithoutFacturaInput, CuentaUncheckedUpdateWithoutFacturaInput>
    create: XOR<CuentaCreateWithoutFacturaInput, CuentaUncheckedCreateWithoutFacturaInput>
    where?: CuentaWhereInput
  }

  export type CuentaUpdateToOneWithWhereWithoutFacturaInput = {
    where?: CuentaWhereInput
    data: XOR<CuentaUpdateWithoutFacturaInput, CuentaUncheckedUpdateWithoutFacturaInput>
  }

  export type CuentaUpdateWithoutFacturaInput = {
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingreso?: IngresoUpdateOneRequiredWithoutCuentaNestedInput
    consumos?: ConsumoUpdateManyWithoutCuentaNestedInput
  }

  export type CuentaUncheckedUpdateWithoutFacturaInput = {
    id_cuenta?: IntFieldUpdateOperationsInput | number
    fk_ingreso?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    consumos?: ConsumoUncheckedUpdateManyWithoutCuentaNestedInput
  }

  export type TimbradoUpsertWithoutFacturasInput = {
    update: XOR<TimbradoUpdateWithoutFacturasInput, TimbradoUncheckedUpdateWithoutFacturasInput>
    create: XOR<TimbradoCreateWithoutFacturasInput, TimbradoUncheckedCreateWithoutFacturasInput>
    where?: TimbradoWhereInput
  }

  export type TimbradoUpdateToOneWithWhereWithoutFacturasInput = {
    where?: TimbradoWhereInput
    data: XOR<TimbradoUpdateWithoutFacturasInput, TimbradoUncheckedUpdateWithoutFacturasInput>
  }

  export type TimbradoUpdateWithoutFacturasInput = {
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    codigo_sucursal?: IntFieldUpdateOperationsInput | number
    codigo_punto_facturacion?: IntFieldUpdateOperationsInput | number
    numero_secuencial?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TimbradoUncheckedUpdateWithoutFacturasInput = {
    id_timbrado?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    codigo_sucursal?: IntFieldUpdateOperationsInput | number
    codigo_punto_facturacion?: IntFieldUpdateOperationsInput | number
    numero_secuencial?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUpsertWithoutFacturasInput = {
    update: XOR<UsuarioUpdateWithoutFacturasInput, UsuarioUncheckedUpdateWithoutFacturasInput>
    create: XOR<UsuarioCreateWithoutFacturasInput, UsuarioUncheckedCreateWithoutFacturasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutFacturasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutFacturasInput, UsuarioUncheckedUpdateWithoutFacturasInput>
  }

  export type UsuarioUpdateWithoutFacturasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    contrasena_hash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUpdateManyWithoutUsuarioNestedInput
    ingresos?: IngresoUpdateManyWithoutUsuarioNestedInput
    consumos?: ConsumoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutFacturasInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    contrasena_hash?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUncheckedUpdateManyWithoutUsuarioNestedInput
    ingresos?: IngresoUncheckedUpdateManyWithoutUsuarioNestedInput
    consumos?: ConsumoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type DetalleFacturaUpsertWithWhereUniqueWithoutFacturaInput = {
    where: DetalleFacturaWhereUniqueInput
    update: XOR<DetalleFacturaUpdateWithoutFacturaInput, DetalleFacturaUncheckedUpdateWithoutFacturaInput>
    create: XOR<DetalleFacturaCreateWithoutFacturaInput, DetalleFacturaUncheckedCreateWithoutFacturaInput>
  }

  export type DetalleFacturaUpdateWithWhereUniqueWithoutFacturaInput = {
    where: DetalleFacturaWhereUniqueInput
    data: XOR<DetalleFacturaUpdateWithoutFacturaInput, DetalleFacturaUncheckedUpdateWithoutFacturaInput>
  }

  export type DetalleFacturaUpdateManyWithWhereWithoutFacturaInput = {
    where: DetalleFacturaScalarWhereInput
    data: XOR<DetalleFacturaUpdateManyMutationInput, DetalleFacturaUncheckedUpdateManyWithoutFacturaInput>
  }

  export type DetalleFacturaScalarWhereInput = {
    AND?: DetalleFacturaScalarWhereInput | DetalleFacturaScalarWhereInput[]
    OR?: DetalleFacturaScalarWhereInput[]
    NOT?: DetalleFacturaScalarWhereInput | DetalleFacturaScalarWhereInput[]
    id_detalle_factura?: IntFilter<"DetalleFactura"> | number
    fk_factura?: IntFilter<"DetalleFactura"> | number
    descripcion?: StringFilter<"DetalleFactura"> | string
    cantidad?: IntFilter<"DetalleFactura"> | number
    precio_unitario?: IntFilter<"DetalleFactura"> | number
    descuento?: IntFilter<"DetalleFactura"> | number
    porcentaje_iva?: IntFilter<"DetalleFactura"> | number
  }

  export type FacturaCreateWithoutDetallesInput = {
    fecha_emision?: Date | string
    condicion_venta: string
    total: number
    cuenta?: CuentaCreateNestedOneWithoutFacturaInput
    timbrado: TimbradoCreateNestedOneWithoutFacturasInput
    usuario: UsuarioCreateNestedOneWithoutFacturasInput
  }

  export type FacturaUncheckedCreateWithoutDetallesInput = {
    id_factura?: number
    fk_cuenta: number
    fk_timbrado: number
    fecha_emision?: Date | string
    condicion_venta: string
    total: number
    fk_usuario: number
  }

  export type FacturaCreateOrConnectWithoutDetallesInput = {
    where: FacturaWhereUniqueInput
    create: XOR<FacturaCreateWithoutDetallesInput, FacturaUncheckedCreateWithoutDetallesInput>
  }

  export type FacturaUpsertWithoutDetallesInput = {
    update: XOR<FacturaUpdateWithoutDetallesInput, FacturaUncheckedUpdateWithoutDetallesInput>
    create: XOR<FacturaCreateWithoutDetallesInput, FacturaUncheckedCreateWithoutDetallesInput>
    where?: FacturaWhereInput
  }

  export type FacturaUpdateToOneWithWhereWithoutDetallesInput = {
    where?: FacturaWhereInput
    data: XOR<FacturaUpdateWithoutDetallesInput, FacturaUncheckedUpdateWithoutDetallesInput>
  }

  export type FacturaUpdateWithoutDetallesInput = {
    fecha_emision?: DateTimeFieldUpdateOperationsInput | Date | string
    condicion_venta?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    cuenta?: CuentaUpdateOneWithoutFacturaNestedInput
    timbrado?: TimbradoUpdateOneRequiredWithoutFacturasNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutFacturasNestedInput
  }

  export type FacturaUncheckedUpdateWithoutDetallesInput = {
    id_factura?: IntFieldUpdateOperationsInput | number
    fk_cuenta?: IntFieldUpdateOperationsInput | number
    fk_timbrado?: IntFieldUpdateOperationsInput | number
    fecha_emision?: DateTimeFieldUpdateOperationsInput | Date | string
    condicion_venta?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    fk_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type ReservaCreateManyUsuarioInput = {
    id_reserva?: number
    fk_huesped: number
    fk_tipo_habitacion: number
    check_in: Date | string
    check_out: Date | string
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type IngresoCreateManyUsuarioInput = {
    id_ingreso?: number
    fk_reserva?: number | null
    fk_habitacion: number
    fk_huesped: number
    fk_tarifa: number
    fecha_ingreso: Date | string
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ConsumoCreateManyUsuarioInput = {
    id_consumo?: number
    fk_cuenta: number
    descripcion: string
    cantidad: number
    monto: number
    activo?: boolean
  }

  export type FacturaCreateManyUsuarioInput = {
    id_factura?: number
    fk_cuenta: number
    fk_timbrado: number
    fecha_emision?: Date | string
    condicion_venta: string
    total: number
  }

  export type ReservaUpdateWithoutUsuarioInput = {
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    huesped?: HuespedUpdateOneRequiredWithoutReservasNestedInput
    tipoHabitacion?: TipoHabitacionUpdateOneRequiredWithoutReservasNestedInput
    ingreso?: IngresoUpdateManyWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateWithoutUsuarioInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    fk_huesped?: IntFieldUpdateOperationsInput | number
    fk_tipo_habitacion?: IntFieldUpdateOperationsInput | number
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingreso?: IngresoUncheckedUpdateManyWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateManyWithoutUsuarioInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    fk_huesped?: IntFieldUpdateOperationsInput | number
    fk_tipo_habitacion?: IntFieldUpdateOperationsInput | number
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngresoUpdateWithoutUsuarioInput = {
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reserva?: ReservaUpdateOneWithoutIngresoNestedInput
    habitacion?: HabitacionUpdateOneRequiredWithoutIngresosNestedInput
    huesped?: HuespedUpdateOneRequiredWithoutIngresosNestedInput
    tarifa?: TarifaUpdateOneRequiredWithoutIngresosNestedInput
    huespedesHabitaciones?: HuespedHabitacionUpdateManyWithoutIngresoNestedInput
    cuenta?: CuentaUpdateManyWithoutIngresoNestedInput
  }

  export type IngresoUncheckedUpdateWithoutUsuarioInput = {
    id_ingreso?: IntFieldUpdateOperationsInput | number
    fk_reserva?: NullableIntFieldUpdateOperationsInput | number | null
    fk_habitacion?: IntFieldUpdateOperationsInput | number
    fk_huesped?: IntFieldUpdateOperationsInput | number
    fk_tarifa?: IntFieldUpdateOperationsInput | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    huespedesHabitaciones?: HuespedHabitacionUncheckedUpdateManyWithoutIngresoNestedInput
    cuenta?: CuentaUncheckedUpdateManyWithoutIngresoNestedInput
  }

  export type IngresoUncheckedUpdateManyWithoutUsuarioInput = {
    id_ingreso?: IntFieldUpdateOperationsInput | number
    fk_reserva?: NullableIntFieldUpdateOperationsInput | number | null
    fk_habitacion?: IntFieldUpdateOperationsInput | number
    fk_huesped?: IntFieldUpdateOperationsInput | number
    fk_tarifa?: IntFieldUpdateOperationsInput | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsumoUpdateWithoutUsuarioInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    monto?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    cuenta?: CuentaUpdateOneRequiredWithoutConsumosNestedInput
  }

  export type ConsumoUncheckedUpdateWithoutUsuarioInput = {
    id_consumo?: IntFieldUpdateOperationsInput | number
    fk_cuenta?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    monto?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ConsumoUncheckedUpdateManyWithoutUsuarioInput = {
    id_consumo?: IntFieldUpdateOperationsInput | number
    fk_cuenta?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    monto?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FacturaUpdateWithoutUsuarioInput = {
    fecha_emision?: DateTimeFieldUpdateOperationsInput | Date | string
    condicion_venta?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    cuenta?: CuentaUpdateOneWithoutFacturaNestedInput
    timbrado?: TimbradoUpdateOneRequiredWithoutFacturasNestedInput
    detalles?: DetalleFacturaUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateWithoutUsuarioInput = {
    id_factura?: IntFieldUpdateOperationsInput | number
    fk_cuenta?: IntFieldUpdateOperationsInput | number
    fk_timbrado?: IntFieldUpdateOperationsInput | number
    fecha_emision?: DateTimeFieldUpdateOperationsInput | Date | string
    condicion_venta?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    detalles?: DetalleFacturaUncheckedUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateManyWithoutUsuarioInput = {
    id_factura?: IntFieldUpdateOperationsInput | number
    fk_cuenta?: IntFieldUpdateOperationsInput | number
    fk_timbrado?: IntFieldUpdateOperationsInput | number
    fecha_emision?: DateTimeFieldUpdateOperationsInput | Date | string
    condicion_venta?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
  }

  export type ReservaCreateManyHuespedInput = {
    id_reserva?: number
    fk_tipo_habitacion: number
    check_in: Date | string
    check_out: Date | string
    estado: string
    fk_usuario: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type IngresoCreateManyHuespedInput = {
    id_ingreso?: number
    fk_reserva?: number | null
    fk_habitacion: number
    fk_tarifa: number
    fecha_ingreso: Date | string
    estado: string
    fk_usuario: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HuespedHabitacionCreateManyHuespedInput = {
    id_huesped_habitacion?: number
    fk_ingreso: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReservaUpdateWithoutHuespedInput = {
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoHabitacion?: TipoHabitacionUpdateOneRequiredWithoutReservasNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutReservasNestedInput
    ingreso?: IngresoUpdateManyWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateWithoutHuespedInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    fk_tipo_habitacion?: IntFieldUpdateOperationsInput | number
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    fk_usuario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingreso?: IngresoUncheckedUpdateManyWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateManyWithoutHuespedInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    fk_tipo_habitacion?: IntFieldUpdateOperationsInput | number
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    fk_usuario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngresoUpdateWithoutHuespedInput = {
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reserva?: ReservaUpdateOneWithoutIngresoNestedInput
    habitacion?: HabitacionUpdateOneRequiredWithoutIngresosNestedInput
    tarifa?: TarifaUpdateOneRequiredWithoutIngresosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutIngresosNestedInput
    huespedesHabitaciones?: HuespedHabitacionUpdateManyWithoutIngresoNestedInput
    cuenta?: CuentaUpdateManyWithoutIngresoNestedInput
  }

  export type IngresoUncheckedUpdateWithoutHuespedInput = {
    id_ingreso?: IntFieldUpdateOperationsInput | number
    fk_reserva?: NullableIntFieldUpdateOperationsInput | number | null
    fk_habitacion?: IntFieldUpdateOperationsInput | number
    fk_tarifa?: IntFieldUpdateOperationsInput | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    fk_usuario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    huespedesHabitaciones?: HuespedHabitacionUncheckedUpdateManyWithoutIngresoNestedInput
    cuenta?: CuentaUncheckedUpdateManyWithoutIngresoNestedInput
  }

  export type IngresoUncheckedUpdateManyWithoutHuespedInput = {
    id_ingreso?: IntFieldUpdateOperationsInput | number
    fk_reserva?: NullableIntFieldUpdateOperationsInput | number | null
    fk_habitacion?: IntFieldUpdateOperationsInput | number
    fk_tarifa?: IntFieldUpdateOperationsInput | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    fk_usuario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HuespedHabitacionUpdateWithoutHuespedInput = {
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingreso?: IngresoUpdateOneRequiredWithoutHuespedesHabitacionesNestedInput
  }

  export type HuespedHabitacionUncheckedUpdateWithoutHuespedInput = {
    id_huesped_habitacion?: IntFieldUpdateOperationsInput | number
    fk_ingreso?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HuespedHabitacionUncheckedUpdateManyWithoutHuespedInput = {
    id_huesped_habitacion?: IntFieldUpdateOperationsInput | number
    fk_ingreso?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TarifaCreateManyTipoHabitacionInput = {
    id_tarifa?: number
    descripcion: string
    precio: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HabitacionCreateManyTipoHabitacionInput = {
    id_habitacion?: number
    numero: string
    piso: string
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReservaCreateManyTipoHabitacionInput = {
    id_reserva?: number
    fk_huesped: number
    check_in: Date | string
    check_out: Date | string
    estado: string
    fk_usuario: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TarifaUpdateWithoutTipoHabitacionInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingresos?: IngresoUpdateManyWithoutTarifaNestedInput
  }

  export type TarifaUncheckedUpdateWithoutTipoHabitacionInput = {
    id_tarifa?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingresos?: IngresoUncheckedUpdateManyWithoutTarifaNestedInput
  }

  export type TarifaUncheckedUpdateManyWithoutTipoHabitacionInput = {
    id_tarifa?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitacionUpdateWithoutTipoHabitacionInput = {
    numero?: StringFieldUpdateOperationsInput | string
    piso?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingresos?: IngresoUpdateManyWithoutHabitacionNestedInput
  }

  export type HabitacionUncheckedUpdateWithoutTipoHabitacionInput = {
    id_habitacion?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    piso?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingresos?: IngresoUncheckedUpdateManyWithoutHabitacionNestedInput
  }

  export type HabitacionUncheckedUpdateManyWithoutTipoHabitacionInput = {
    id_habitacion?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    piso?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaUpdateWithoutTipoHabitacionInput = {
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    huesped?: HuespedUpdateOneRequiredWithoutReservasNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutReservasNestedInput
    ingreso?: IngresoUpdateManyWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateWithoutTipoHabitacionInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    fk_huesped?: IntFieldUpdateOperationsInput | number
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    fk_usuario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingreso?: IngresoUncheckedUpdateManyWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateManyWithoutTipoHabitacionInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    fk_huesped?: IntFieldUpdateOperationsInput | number
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    fk_usuario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngresoCreateManyTarifaInput = {
    id_ingreso?: number
    fk_reserva?: number | null
    fk_habitacion: number
    fk_huesped: number
    fecha_ingreso: Date | string
    estado: string
    fk_usuario: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type IngresoUpdateWithoutTarifaInput = {
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reserva?: ReservaUpdateOneWithoutIngresoNestedInput
    habitacion?: HabitacionUpdateOneRequiredWithoutIngresosNestedInput
    huesped?: HuespedUpdateOneRequiredWithoutIngresosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutIngresosNestedInput
    huespedesHabitaciones?: HuespedHabitacionUpdateManyWithoutIngresoNestedInput
    cuenta?: CuentaUpdateManyWithoutIngresoNestedInput
  }

  export type IngresoUncheckedUpdateWithoutTarifaInput = {
    id_ingreso?: IntFieldUpdateOperationsInput | number
    fk_reserva?: NullableIntFieldUpdateOperationsInput | number | null
    fk_habitacion?: IntFieldUpdateOperationsInput | number
    fk_huesped?: IntFieldUpdateOperationsInput | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    fk_usuario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    huespedesHabitaciones?: HuespedHabitacionUncheckedUpdateManyWithoutIngresoNestedInput
    cuenta?: CuentaUncheckedUpdateManyWithoutIngresoNestedInput
  }

  export type IngresoUncheckedUpdateManyWithoutTarifaInput = {
    id_ingreso?: IntFieldUpdateOperationsInput | number
    fk_reserva?: NullableIntFieldUpdateOperationsInput | number | null
    fk_habitacion?: IntFieldUpdateOperationsInput | number
    fk_huesped?: IntFieldUpdateOperationsInput | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    fk_usuario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngresoCreateManyHabitacionInput = {
    id_ingreso?: number
    fk_reserva?: number | null
    fk_huesped: number
    fk_tarifa: number
    fecha_ingreso: Date | string
    estado: string
    fk_usuario: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type IngresoUpdateWithoutHabitacionInput = {
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reserva?: ReservaUpdateOneWithoutIngresoNestedInput
    huesped?: HuespedUpdateOneRequiredWithoutIngresosNestedInput
    tarifa?: TarifaUpdateOneRequiredWithoutIngresosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutIngresosNestedInput
    huespedesHabitaciones?: HuespedHabitacionUpdateManyWithoutIngresoNestedInput
    cuenta?: CuentaUpdateManyWithoutIngresoNestedInput
  }

  export type IngresoUncheckedUpdateWithoutHabitacionInput = {
    id_ingreso?: IntFieldUpdateOperationsInput | number
    fk_reserva?: NullableIntFieldUpdateOperationsInput | number | null
    fk_huesped?: IntFieldUpdateOperationsInput | number
    fk_tarifa?: IntFieldUpdateOperationsInput | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    fk_usuario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    huespedesHabitaciones?: HuespedHabitacionUncheckedUpdateManyWithoutIngresoNestedInput
    cuenta?: CuentaUncheckedUpdateManyWithoutIngresoNestedInput
  }

  export type IngresoUncheckedUpdateManyWithoutHabitacionInput = {
    id_ingreso?: IntFieldUpdateOperationsInput | number
    fk_reserva?: NullableIntFieldUpdateOperationsInput | number | null
    fk_huesped?: IntFieldUpdateOperationsInput | number
    fk_tarifa?: IntFieldUpdateOperationsInput | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    fk_usuario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngresoCreateManyReservaInput = {
    id_ingreso?: number
    fk_habitacion: number
    fk_huesped: number
    fk_tarifa: number
    fecha_ingreso: Date | string
    estado: string
    fk_usuario: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type IngresoUpdateWithoutReservaInput = {
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    habitacion?: HabitacionUpdateOneRequiredWithoutIngresosNestedInput
    huesped?: HuespedUpdateOneRequiredWithoutIngresosNestedInput
    tarifa?: TarifaUpdateOneRequiredWithoutIngresosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutIngresosNestedInput
    huespedesHabitaciones?: HuespedHabitacionUpdateManyWithoutIngresoNestedInput
    cuenta?: CuentaUpdateManyWithoutIngresoNestedInput
  }

  export type IngresoUncheckedUpdateWithoutReservaInput = {
    id_ingreso?: IntFieldUpdateOperationsInput | number
    fk_habitacion?: IntFieldUpdateOperationsInput | number
    fk_huesped?: IntFieldUpdateOperationsInput | number
    fk_tarifa?: IntFieldUpdateOperationsInput | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    fk_usuario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    huespedesHabitaciones?: HuespedHabitacionUncheckedUpdateManyWithoutIngresoNestedInput
    cuenta?: CuentaUncheckedUpdateManyWithoutIngresoNestedInput
  }

  export type IngresoUncheckedUpdateManyWithoutReservaInput = {
    id_ingreso?: IntFieldUpdateOperationsInput | number
    fk_habitacion?: IntFieldUpdateOperationsInput | number
    fk_huesped?: IntFieldUpdateOperationsInput | number
    fk_tarifa?: IntFieldUpdateOperationsInput | number
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    fk_usuario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HuespedHabitacionCreateManyIngresoInput = {
    id_huesped_habitacion?: number
    fk_huesped: number
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CuentaCreateManyIngresoInput = {
    id_cuenta?: number
    estado: string
    activo?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HuespedHabitacionUpdateWithoutIngresoInput = {
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    huesped?: HuespedUpdateOneRequiredWithoutHuespedesHabitacionesNestedInput
  }

  export type HuespedHabitacionUncheckedUpdateWithoutIngresoInput = {
    id_huesped_habitacion?: IntFieldUpdateOperationsInput | number
    fk_huesped?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HuespedHabitacionUncheckedUpdateManyWithoutIngresoInput = {
    id_huesped_habitacion?: IntFieldUpdateOperationsInput | number
    fk_huesped?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuentaUpdateWithoutIngresoInput = {
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    consumos?: ConsumoUpdateManyWithoutCuentaNestedInput
    factura?: FacturaUpdateManyWithoutCuentaNestedInput
  }

  export type CuentaUncheckedUpdateWithoutIngresoInput = {
    id_cuenta?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    consumos?: ConsumoUncheckedUpdateManyWithoutCuentaNestedInput
    factura?: FacturaUncheckedUpdateManyWithoutCuentaNestedInput
  }

  export type CuentaUncheckedUpdateManyWithoutIngresoInput = {
    id_cuenta?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsumoCreateManyCuentaInput = {
    id_consumo?: number
    descripcion: string
    cantidad: number
    monto: number
    fk_usuario: number
    activo?: boolean
  }

  export type FacturaCreateManyCuentaInput = {
    id_factura?: number
    fk_timbrado: number
    fecha_emision?: Date | string
    condicion_venta: string
    total: number
    fk_usuario: number
  }

  export type ConsumoUpdateWithoutCuentaInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    monto?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneRequiredWithoutConsumosNestedInput
  }

  export type ConsumoUncheckedUpdateWithoutCuentaInput = {
    id_consumo?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    monto?: IntFieldUpdateOperationsInput | number
    fk_usuario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ConsumoUncheckedUpdateManyWithoutCuentaInput = {
    id_consumo?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    monto?: IntFieldUpdateOperationsInput | number
    fk_usuario?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FacturaUpdateWithoutCuentaInput = {
    fecha_emision?: DateTimeFieldUpdateOperationsInput | Date | string
    condicion_venta?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    timbrado?: TimbradoUpdateOneRequiredWithoutFacturasNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutFacturasNestedInput
    detalles?: DetalleFacturaUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateWithoutCuentaInput = {
    id_factura?: IntFieldUpdateOperationsInput | number
    fk_timbrado?: IntFieldUpdateOperationsInput | number
    fecha_emision?: DateTimeFieldUpdateOperationsInput | Date | string
    condicion_venta?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    fk_usuario?: IntFieldUpdateOperationsInput | number
    detalles?: DetalleFacturaUncheckedUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateManyWithoutCuentaInput = {
    id_factura?: IntFieldUpdateOperationsInput | number
    fk_timbrado?: IntFieldUpdateOperationsInput | number
    fecha_emision?: DateTimeFieldUpdateOperationsInput | Date | string
    condicion_venta?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    fk_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type FacturaCreateManyTimbradoInput = {
    id_factura?: number
    fk_cuenta: number
    fecha_emision?: Date | string
    condicion_venta: string
    total: number
    fk_usuario: number
  }

  export type FacturaUpdateWithoutTimbradoInput = {
    fecha_emision?: DateTimeFieldUpdateOperationsInput | Date | string
    condicion_venta?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    cuenta?: CuentaUpdateOneWithoutFacturaNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutFacturasNestedInput
    detalles?: DetalleFacturaUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateWithoutTimbradoInput = {
    id_factura?: IntFieldUpdateOperationsInput | number
    fk_cuenta?: IntFieldUpdateOperationsInput | number
    fecha_emision?: DateTimeFieldUpdateOperationsInput | Date | string
    condicion_venta?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    fk_usuario?: IntFieldUpdateOperationsInput | number
    detalles?: DetalleFacturaUncheckedUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateManyWithoutTimbradoInput = {
    id_factura?: IntFieldUpdateOperationsInput | number
    fk_cuenta?: IntFieldUpdateOperationsInput | number
    fecha_emision?: DateTimeFieldUpdateOperationsInput | Date | string
    condicion_venta?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    fk_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleFacturaCreateManyFacturaInput = {
    id_detalle_factura?: number
    descripcion: string
    cantidad: number
    precio_unitario: number
    descuento: number
    porcentaje_iva: number
  }

  export type DetalleFacturaUpdateWithoutFacturaInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: IntFieldUpdateOperationsInput | number
    descuento?: IntFieldUpdateOperationsInput | number
    porcentaje_iva?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleFacturaUncheckedUpdateWithoutFacturaInput = {
    id_detalle_factura?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: IntFieldUpdateOperationsInput | number
    descuento?: IntFieldUpdateOperationsInput | number
    porcentaje_iva?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleFacturaUncheckedUpdateManyWithoutFacturaInput = {
    id_detalle_factura?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: IntFieldUpdateOperationsInput | number
    descuento?: IntFieldUpdateOperationsInput | number
    porcentaje_iva?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}