
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
 * Model QuoteRequest
 * 
 */
export type QuoteRequest = $Result.DefaultSelection<Prisma.$QuoteRequestPayload>
/**
 * Model ContactMessage
 * 
 */
export type ContactMessage = $Result.DefaultSelection<Prisma.$ContactMessagePayload>
/**
 * Model JobApplication
 * 
 */
export type JobApplication = $Result.DefaultSelection<Prisma.$JobApplicationPayload>
/**
 * Model TrackingOrder
 * 
 */
export type TrackingOrder = $Result.DefaultSelection<Prisma.$TrackingOrderPayload>
/**
 * Model TrackingEvent
 * 
 */
export type TrackingEvent = $Result.DefaultSelection<Prisma.$TrackingEventPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more QuoteRequests
 * const quoteRequests = await prisma.quoteRequest.findMany()
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
   * // Fetch zero or more QuoteRequests
   * const quoteRequests = await prisma.quoteRequest.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.quoteRequest`: Exposes CRUD operations for the **QuoteRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuoteRequests
    * const quoteRequests = await prisma.quoteRequest.findMany()
    * ```
    */
  get quoteRequest(): Prisma.QuoteRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactMessage`: Exposes CRUD operations for the **ContactMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactMessages
    * const contactMessages = await prisma.contactMessage.findMany()
    * ```
    */
  get contactMessage(): Prisma.ContactMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobApplication`: Exposes CRUD operations for the **JobApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobApplications
    * const jobApplications = await prisma.jobApplication.findMany()
    * ```
    */
  get jobApplication(): Prisma.JobApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trackingOrder`: Exposes CRUD operations for the **TrackingOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrackingOrders
    * const trackingOrders = await prisma.trackingOrder.findMany()
    * ```
    */
  get trackingOrder(): Prisma.TrackingOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trackingEvent`: Exposes CRUD operations for the **TrackingEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrackingEvents
    * const trackingEvents = await prisma.trackingEvent.findMany()
    * ```
    */
  get trackingEvent(): Prisma.TrackingEventDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    QuoteRequest: 'QuoteRequest',
    ContactMessage: 'ContactMessage',
    JobApplication: 'JobApplication',
    TrackingOrder: 'TrackingOrder',
    TrackingEvent: 'TrackingEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "quoteRequest" | "contactMessage" | "jobApplication" | "trackingOrder" | "trackingEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      QuoteRequest: {
        payload: Prisma.$QuoteRequestPayload<ExtArgs>
        fields: Prisma.QuoteRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuoteRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuoteRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload>
          }
          findFirst: {
            args: Prisma.QuoteRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuoteRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload>
          }
          findMany: {
            args: Prisma.QuoteRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload>[]
          }
          create: {
            args: Prisma.QuoteRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload>
          }
          createMany: {
            args: Prisma.QuoteRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuoteRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload>[]
          }
          delete: {
            args: Prisma.QuoteRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload>
          }
          update: {
            args: Prisma.QuoteRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload>
          }
          deleteMany: {
            args: Prisma.QuoteRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuoteRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuoteRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload>[]
          }
          upsert: {
            args: Prisma.QuoteRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload>
          }
          aggregate: {
            args: Prisma.QuoteRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuoteRequest>
          }
          groupBy: {
            args: Prisma.QuoteRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuoteRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuoteRequestCountArgs<ExtArgs>
            result: $Utils.Optional<QuoteRequestCountAggregateOutputType> | number
          }
        }
      }
      ContactMessage: {
        payload: Prisma.$ContactMessagePayload<ExtArgs>
        fields: Prisma.ContactMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          findFirst: {
            args: Prisma.ContactMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          findMany: {
            args: Prisma.ContactMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[]
          }
          create: {
            args: Prisma.ContactMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          createMany: {
            args: Prisma.ContactMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[]
          }
          delete: {
            args: Prisma.ContactMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          update: {
            args: Prisma.ContactMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          deleteMany: {
            args: Prisma.ContactMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[]
          }
          upsert: {
            args: Prisma.ContactMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          aggregate: {
            args: Prisma.ContactMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactMessage>
          }
          groupBy: {
            args: Prisma.ContactMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ContactMessageCountAggregateOutputType> | number
          }
        }
      }
      JobApplication: {
        payload: Prisma.$JobApplicationPayload<ExtArgs>
        fields: Prisma.JobApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          findFirst: {
            args: Prisma.JobApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          findMany: {
            args: Prisma.JobApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>[]
          }
          create: {
            args: Prisma.JobApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          createMany: {
            args: Prisma.JobApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>[]
          }
          delete: {
            args: Prisma.JobApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          update: {
            args: Prisma.JobApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          deleteMany: {
            args: Prisma.JobApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>[]
          }
          upsert: {
            args: Prisma.JobApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          aggregate: {
            args: Prisma.JobApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobApplication>
          }
          groupBy: {
            args: Prisma.JobApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<JobApplicationCountAggregateOutputType> | number
          }
        }
      }
      TrackingOrder: {
        payload: Prisma.$TrackingOrderPayload<ExtArgs>
        fields: Prisma.TrackingOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackingOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackingOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingOrderPayload>
          }
          findFirst: {
            args: Prisma.TrackingOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackingOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingOrderPayload>
          }
          findMany: {
            args: Prisma.TrackingOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingOrderPayload>[]
          }
          create: {
            args: Prisma.TrackingOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingOrderPayload>
          }
          createMany: {
            args: Prisma.TrackingOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrackingOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingOrderPayload>[]
          }
          delete: {
            args: Prisma.TrackingOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingOrderPayload>
          }
          update: {
            args: Prisma.TrackingOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingOrderPayload>
          }
          deleteMany: {
            args: Prisma.TrackingOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrackingOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrackingOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingOrderPayload>[]
          }
          upsert: {
            args: Prisma.TrackingOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingOrderPayload>
          }
          aggregate: {
            args: Prisma.TrackingOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrackingOrder>
          }
          groupBy: {
            args: Prisma.TrackingOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrackingOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackingOrderCountArgs<ExtArgs>
            result: $Utils.Optional<TrackingOrderCountAggregateOutputType> | number
          }
        }
      }
      TrackingEvent: {
        payload: Prisma.$TrackingEventPayload<ExtArgs>
        fields: Prisma.TrackingEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackingEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackingEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingEventPayload>
          }
          findFirst: {
            args: Prisma.TrackingEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackingEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingEventPayload>
          }
          findMany: {
            args: Prisma.TrackingEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingEventPayload>[]
          }
          create: {
            args: Prisma.TrackingEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingEventPayload>
          }
          createMany: {
            args: Prisma.TrackingEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrackingEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingEventPayload>[]
          }
          delete: {
            args: Prisma.TrackingEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingEventPayload>
          }
          update: {
            args: Prisma.TrackingEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingEventPayload>
          }
          deleteMany: {
            args: Prisma.TrackingEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrackingEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrackingEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingEventPayload>[]
          }
          upsert: {
            args: Prisma.TrackingEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingEventPayload>
          }
          aggregate: {
            args: Prisma.TrackingEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrackingEvent>
          }
          groupBy: {
            args: Prisma.TrackingEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrackingEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackingEventCountArgs<ExtArgs>
            result: $Utils.Optional<TrackingEventCountAggregateOutputType> | number
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
    quoteRequest?: QuoteRequestOmit
    contactMessage?: ContactMessageOmit
    jobApplication?: JobApplicationOmit
    trackingOrder?: TrackingOrderOmit
    trackingEvent?: TrackingEventOmit
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
   * Count Type TrackingOrderCountOutputType
   */

  export type TrackingOrderCountOutputType = {
    events: number
  }

  export type TrackingOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | TrackingOrderCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * TrackingOrderCountOutputType without action
   */
  export type TrackingOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingOrderCountOutputType
     */
    select?: TrackingOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrackingOrderCountOutputType without action
   */
  export type TrackingOrderCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackingEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model QuoteRequest
   */

  export type AggregateQuoteRequest = {
    _count: QuoteRequestCountAggregateOutputType | null
    _min: QuoteRequestMinAggregateOutputType | null
    _max: QuoteRequestMaxAggregateOutputType | null
  }

  export type QuoteRequestMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    firstName: string | null
    lastName: string | null
    company: string | null
    phone: string | null
    email: string | null
    region: string | null
    city: string | null
    serviceType: string | null
    vehicleType: string | null
    estimatedVolume: string | null
    frequency: string | null
    origin: string | null
    destination: string | null
    description: string | null
    status: string | null
    notes: string | null
  }

  export type QuoteRequestMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    firstName: string | null
    lastName: string | null
    company: string | null
    phone: string | null
    email: string | null
    region: string | null
    city: string | null
    serviceType: string | null
    vehicleType: string | null
    estimatedVolume: string | null
    frequency: string | null
    origin: string | null
    destination: string | null
    description: string | null
    status: string | null
    notes: string | null
  }

  export type QuoteRequestCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    firstName: number
    lastName: number
    company: number
    phone: number
    email: number
    region: number
    city: number
    serviceType: number
    vehicleType: number
    estimatedVolume: number
    frequency: number
    origin: number
    destination: number
    description: number
    status: number
    notes: number
    _all: number
  }


  export type QuoteRequestMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    lastName?: true
    company?: true
    phone?: true
    email?: true
    region?: true
    city?: true
    serviceType?: true
    vehicleType?: true
    estimatedVolume?: true
    frequency?: true
    origin?: true
    destination?: true
    description?: true
    status?: true
    notes?: true
  }

  export type QuoteRequestMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    lastName?: true
    company?: true
    phone?: true
    email?: true
    region?: true
    city?: true
    serviceType?: true
    vehicleType?: true
    estimatedVolume?: true
    frequency?: true
    origin?: true
    destination?: true
    description?: true
    status?: true
    notes?: true
  }

  export type QuoteRequestCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    lastName?: true
    company?: true
    phone?: true
    email?: true
    region?: true
    city?: true
    serviceType?: true
    vehicleType?: true
    estimatedVolume?: true
    frequency?: true
    origin?: true
    destination?: true
    description?: true
    status?: true
    notes?: true
    _all?: true
  }

  export type QuoteRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuoteRequest to aggregate.
     */
    where?: QuoteRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteRequests to fetch.
     */
    orderBy?: QuoteRequestOrderByWithRelationInput | QuoteRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuoteRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuoteRequests
    **/
    _count?: true | QuoteRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuoteRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuoteRequestMaxAggregateInputType
  }

  export type GetQuoteRequestAggregateType<T extends QuoteRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateQuoteRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuoteRequest[P]>
      : GetScalarType<T[P], AggregateQuoteRequest[P]>
  }




  export type QuoteRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteRequestWhereInput
    orderBy?: QuoteRequestOrderByWithAggregationInput | QuoteRequestOrderByWithAggregationInput[]
    by: QuoteRequestScalarFieldEnum[] | QuoteRequestScalarFieldEnum
    having?: QuoteRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuoteRequestCountAggregateInputType | true
    _min?: QuoteRequestMinAggregateInputType
    _max?: QuoteRequestMaxAggregateInputType
  }

  export type QuoteRequestGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    firstName: string
    lastName: string
    company: string | null
    phone: string
    email: string
    region: string
    city: string
    serviceType: string
    vehicleType: string
    estimatedVolume: string | null
    frequency: string
    origin: string
    destination: string
    description: string
    status: string
    notes: string | null
    _count: QuoteRequestCountAggregateOutputType | null
    _min: QuoteRequestMinAggregateOutputType | null
    _max: QuoteRequestMaxAggregateOutputType | null
  }

  type GetQuoteRequestGroupByPayload<T extends QuoteRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuoteRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuoteRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuoteRequestGroupByOutputType[P]>
            : GetScalarType<T[P], QuoteRequestGroupByOutputType[P]>
        }
      >
    >


  export type QuoteRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    lastName?: boolean
    company?: boolean
    phone?: boolean
    email?: boolean
    region?: boolean
    city?: boolean
    serviceType?: boolean
    vehicleType?: boolean
    estimatedVolume?: boolean
    frequency?: boolean
    origin?: boolean
    destination?: boolean
    description?: boolean
    status?: boolean
    notes?: boolean
  }, ExtArgs["result"]["quoteRequest"]>

  export type QuoteRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    lastName?: boolean
    company?: boolean
    phone?: boolean
    email?: boolean
    region?: boolean
    city?: boolean
    serviceType?: boolean
    vehicleType?: boolean
    estimatedVolume?: boolean
    frequency?: boolean
    origin?: boolean
    destination?: boolean
    description?: boolean
    status?: boolean
    notes?: boolean
  }, ExtArgs["result"]["quoteRequest"]>

  export type QuoteRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    lastName?: boolean
    company?: boolean
    phone?: boolean
    email?: boolean
    region?: boolean
    city?: boolean
    serviceType?: boolean
    vehicleType?: boolean
    estimatedVolume?: boolean
    frequency?: boolean
    origin?: boolean
    destination?: boolean
    description?: boolean
    status?: boolean
    notes?: boolean
  }, ExtArgs["result"]["quoteRequest"]>

  export type QuoteRequestSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    lastName?: boolean
    company?: boolean
    phone?: boolean
    email?: boolean
    region?: boolean
    city?: boolean
    serviceType?: boolean
    vehicleType?: boolean
    estimatedVolume?: boolean
    frequency?: boolean
    origin?: boolean
    destination?: boolean
    description?: boolean
    status?: boolean
    notes?: boolean
  }

  export type QuoteRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "firstName" | "lastName" | "company" | "phone" | "email" | "region" | "city" | "serviceType" | "vehicleType" | "estimatedVolume" | "frequency" | "origin" | "destination" | "description" | "status" | "notes", ExtArgs["result"]["quoteRequest"]>

  export type $QuoteRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuoteRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      firstName: string
      lastName: string
      company: string | null
      phone: string
      email: string
      region: string
      city: string
      serviceType: string
      vehicleType: string
      estimatedVolume: string | null
      frequency: string
      origin: string
      destination: string
      description: string
      status: string
      notes: string | null
    }, ExtArgs["result"]["quoteRequest"]>
    composites: {}
  }

  type QuoteRequestGetPayload<S extends boolean | null | undefined | QuoteRequestDefaultArgs> = $Result.GetResult<Prisma.$QuoteRequestPayload, S>

  type QuoteRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuoteRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuoteRequestCountAggregateInputType | true
    }

  export interface QuoteRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuoteRequest'], meta: { name: 'QuoteRequest' } }
    /**
     * Find zero or one QuoteRequest that matches the filter.
     * @param {QuoteRequestFindUniqueArgs} args - Arguments to find a QuoteRequest
     * @example
     * // Get one QuoteRequest
     * const quoteRequest = await prisma.quoteRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuoteRequestFindUniqueArgs>(args: SelectSubset<T, QuoteRequestFindUniqueArgs<ExtArgs>>): Prisma__QuoteRequestClient<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one QuoteRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuoteRequestFindUniqueOrThrowArgs} args - Arguments to find a QuoteRequest
     * @example
     * // Get one QuoteRequest
     * const quoteRequest = await prisma.quoteRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuoteRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, QuoteRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuoteRequestClient<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first QuoteRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteRequestFindFirstArgs} args - Arguments to find a QuoteRequest
     * @example
     * // Get one QuoteRequest
     * const quoteRequest = await prisma.quoteRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuoteRequestFindFirstArgs>(args?: SelectSubset<T, QuoteRequestFindFirstArgs<ExtArgs>>): Prisma__QuoteRequestClient<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first QuoteRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteRequestFindFirstOrThrowArgs} args - Arguments to find a QuoteRequest
     * @example
     * // Get one QuoteRequest
     * const quoteRequest = await prisma.quoteRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuoteRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, QuoteRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuoteRequestClient<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more QuoteRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuoteRequests
     * const quoteRequests = await prisma.quoteRequest.findMany()
     * 
     * // Get first 10 QuoteRequests
     * const quoteRequests = await prisma.quoteRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quoteRequestWithIdOnly = await prisma.quoteRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuoteRequestFindManyArgs>(args?: SelectSubset<T, QuoteRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a QuoteRequest.
     * @param {QuoteRequestCreateArgs} args - Arguments to create a QuoteRequest.
     * @example
     * // Create one QuoteRequest
     * const QuoteRequest = await prisma.quoteRequest.create({
     *   data: {
     *     // ... data to create a QuoteRequest
     *   }
     * })
     * 
     */
    create<T extends QuoteRequestCreateArgs>(args: SelectSubset<T, QuoteRequestCreateArgs<ExtArgs>>): Prisma__QuoteRequestClient<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many QuoteRequests.
     * @param {QuoteRequestCreateManyArgs} args - Arguments to create many QuoteRequests.
     * @example
     * // Create many QuoteRequests
     * const quoteRequest = await prisma.quoteRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuoteRequestCreateManyArgs>(args?: SelectSubset<T, QuoteRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuoteRequests and returns the data saved in the database.
     * @param {QuoteRequestCreateManyAndReturnArgs} args - Arguments to create many QuoteRequests.
     * @example
     * // Create many QuoteRequests
     * const quoteRequest = await prisma.quoteRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuoteRequests and only return the `id`
     * const quoteRequestWithIdOnly = await prisma.quoteRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuoteRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, QuoteRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a QuoteRequest.
     * @param {QuoteRequestDeleteArgs} args - Arguments to delete one QuoteRequest.
     * @example
     * // Delete one QuoteRequest
     * const QuoteRequest = await prisma.quoteRequest.delete({
     *   where: {
     *     // ... filter to delete one QuoteRequest
     *   }
     * })
     * 
     */
    delete<T extends QuoteRequestDeleteArgs>(args: SelectSubset<T, QuoteRequestDeleteArgs<ExtArgs>>): Prisma__QuoteRequestClient<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one QuoteRequest.
     * @param {QuoteRequestUpdateArgs} args - Arguments to update one QuoteRequest.
     * @example
     * // Update one QuoteRequest
     * const quoteRequest = await prisma.quoteRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuoteRequestUpdateArgs>(args: SelectSubset<T, QuoteRequestUpdateArgs<ExtArgs>>): Prisma__QuoteRequestClient<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more QuoteRequests.
     * @param {QuoteRequestDeleteManyArgs} args - Arguments to filter QuoteRequests to delete.
     * @example
     * // Delete a few QuoteRequests
     * const { count } = await prisma.quoteRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuoteRequestDeleteManyArgs>(args?: SelectSubset<T, QuoteRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuoteRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuoteRequests
     * const quoteRequest = await prisma.quoteRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuoteRequestUpdateManyArgs>(args: SelectSubset<T, QuoteRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuoteRequests and returns the data updated in the database.
     * @param {QuoteRequestUpdateManyAndReturnArgs} args - Arguments to update many QuoteRequests.
     * @example
     * // Update many QuoteRequests
     * const quoteRequest = await prisma.quoteRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuoteRequests and only return the `id`
     * const quoteRequestWithIdOnly = await prisma.quoteRequest.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends QuoteRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, QuoteRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one QuoteRequest.
     * @param {QuoteRequestUpsertArgs} args - Arguments to update or create a QuoteRequest.
     * @example
     * // Update or create a QuoteRequest
     * const quoteRequest = await prisma.quoteRequest.upsert({
     *   create: {
     *     // ... data to create a QuoteRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuoteRequest we want to update
     *   }
     * })
     */
    upsert<T extends QuoteRequestUpsertArgs>(args: SelectSubset<T, QuoteRequestUpsertArgs<ExtArgs>>): Prisma__QuoteRequestClient<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of QuoteRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteRequestCountArgs} args - Arguments to filter QuoteRequests to count.
     * @example
     * // Count the number of QuoteRequests
     * const count = await prisma.quoteRequest.count({
     *   where: {
     *     // ... the filter for the QuoteRequests we want to count
     *   }
     * })
    **/
    count<T extends QuoteRequestCountArgs>(
      args?: Subset<T, QuoteRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuoteRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuoteRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuoteRequestAggregateArgs>(args: Subset<T, QuoteRequestAggregateArgs>): Prisma.PrismaPromise<GetQuoteRequestAggregateType<T>>

    /**
     * Group by QuoteRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteRequestGroupByArgs} args - Group by arguments.
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
      T extends QuoteRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuoteRequestGroupByArgs['orderBy'] }
        : { orderBy?: QuoteRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuoteRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuoteRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuoteRequest model
   */
  readonly fields: QuoteRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuoteRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuoteRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the QuoteRequest model
   */ 
  interface QuoteRequestFieldRefs {
    readonly id: FieldRef<"QuoteRequest", 'String'>
    readonly createdAt: FieldRef<"QuoteRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"QuoteRequest", 'DateTime'>
    readonly firstName: FieldRef<"QuoteRequest", 'String'>
    readonly lastName: FieldRef<"QuoteRequest", 'String'>
    readonly company: FieldRef<"QuoteRequest", 'String'>
    readonly phone: FieldRef<"QuoteRequest", 'String'>
    readonly email: FieldRef<"QuoteRequest", 'String'>
    readonly region: FieldRef<"QuoteRequest", 'String'>
    readonly city: FieldRef<"QuoteRequest", 'String'>
    readonly serviceType: FieldRef<"QuoteRequest", 'String'>
    readonly vehicleType: FieldRef<"QuoteRequest", 'String'>
    readonly estimatedVolume: FieldRef<"QuoteRequest", 'String'>
    readonly frequency: FieldRef<"QuoteRequest", 'String'>
    readonly origin: FieldRef<"QuoteRequest", 'String'>
    readonly destination: FieldRef<"QuoteRequest", 'String'>
    readonly description: FieldRef<"QuoteRequest", 'String'>
    readonly status: FieldRef<"QuoteRequest", 'String'>
    readonly notes: FieldRef<"QuoteRequest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuoteRequest findUnique
   */
  export type QuoteRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteRequest
     */
    omit?: QuoteRequestOmit<ExtArgs> | null
    /**
     * Filter, which QuoteRequest to fetch.
     */
    where: QuoteRequestWhereUniqueInput
  }

  /**
   * QuoteRequest findUniqueOrThrow
   */
  export type QuoteRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteRequest
     */
    omit?: QuoteRequestOmit<ExtArgs> | null
    /**
     * Filter, which QuoteRequest to fetch.
     */
    where: QuoteRequestWhereUniqueInput
  }

  /**
   * QuoteRequest findFirst
   */
  export type QuoteRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteRequest
     */
    omit?: QuoteRequestOmit<ExtArgs> | null
    /**
     * Filter, which QuoteRequest to fetch.
     */
    where?: QuoteRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteRequests to fetch.
     */
    orderBy?: QuoteRequestOrderByWithRelationInput | QuoteRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuoteRequests.
     */
    cursor?: QuoteRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuoteRequests.
     */
    distinct?: QuoteRequestScalarFieldEnum | QuoteRequestScalarFieldEnum[]
  }

  /**
   * QuoteRequest findFirstOrThrow
   */
  export type QuoteRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteRequest
     */
    omit?: QuoteRequestOmit<ExtArgs> | null
    /**
     * Filter, which QuoteRequest to fetch.
     */
    where?: QuoteRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteRequests to fetch.
     */
    orderBy?: QuoteRequestOrderByWithRelationInput | QuoteRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuoteRequests.
     */
    cursor?: QuoteRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuoteRequests.
     */
    distinct?: QuoteRequestScalarFieldEnum | QuoteRequestScalarFieldEnum[]
  }

  /**
   * QuoteRequest findMany
   */
  export type QuoteRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteRequest
     */
    omit?: QuoteRequestOmit<ExtArgs> | null
    /**
     * Filter, which QuoteRequests to fetch.
     */
    where?: QuoteRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteRequests to fetch.
     */
    orderBy?: QuoteRequestOrderByWithRelationInput | QuoteRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuoteRequests.
     */
    cursor?: QuoteRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteRequests.
     */
    skip?: number
    distinct?: QuoteRequestScalarFieldEnum | QuoteRequestScalarFieldEnum[]
  }

  /**
   * QuoteRequest create
   */
  export type QuoteRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteRequest
     */
    omit?: QuoteRequestOmit<ExtArgs> | null
    /**
     * The data needed to create a QuoteRequest.
     */
    data: XOR<QuoteRequestCreateInput, QuoteRequestUncheckedCreateInput>
  }

  /**
   * QuoteRequest createMany
   */
  export type QuoteRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuoteRequests.
     */
    data: QuoteRequestCreateManyInput | QuoteRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuoteRequest createManyAndReturn
   */
  export type QuoteRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteRequest
     */
    omit?: QuoteRequestOmit<ExtArgs> | null
    /**
     * The data used to create many QuoteRequests.
     */
    data: QuoteRequestCreateManyInput | QuoteRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuoteRequest update
   */
  export type QuoteRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteRequest
     */
    omit?: QuoteRequestOmit<ExtArgs> | null
    /**
     * The data needed to update a QuoteRequest.
     */
    data: XOR<QuoteRequestUpdateInput, QuoteRequestUncheckedUpdateInput>
    /**
     * Choose, which QuoteRequest to update.
     */
    where: QuoteRequestWhereUniqueInput
  }

  /**
   * QuoteRequest updateMany
   */
  export type QuoteRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuoteRequests.
     */
    data: XOR<QuoteRequestUpdateManyMutationInput, QuoteRequestUncheckedUpdateManyInput>
    /**
     * Filter which QuoteRequests to update
     */
    where?: QuoteRequestWhereInput
    /**
     * Limit how many QuoteRequests to update.
     */
    limit?: number
  }

  /**
   * QuoteRequest updateManyAndReturn
   */
  export type QuoteRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteRequest
     */
    omit?: QuoteRequestOmit<ExtArgs> | null
    /**
     * The data used to update QuoteRequests.
     */
    data: XOR<QuoteRequestUpdateManyMutationInput, QuoteRequestUncheckedUpdateManyInput>
    /**
     * Filter which QuoteRequests to update
     */
    where?: QuoteRequestWhereInput
    /**
     * Limit how many QuoteRequests to update.
     */
    limit?: number
  }

  /**
   * QuoteRequest upsert
   */
  export type QuoteRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteRequest
     */
    omit?: QuoteRequestOmit<ExtArgs> | null
    /**
     * The filter to search for the QuoteRequest to update in case it exists.
     */
    where: QuoteRequestWhereUniqueInput
    /**
     * In case the QuoteRequest found by the `where` argument doesn't exist, create a new QuoteRequest with this data.
     */
    create: XOR<QuoteRequestCreateInput, QuoteRequestUncheckedCreateInput>
    /**
     * In case the QuoteRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuoteRequestUpdateInput, QuoteRequestUncheckedUpdateInput>
  }

  /**
   * QuoteRequest delete
   */
  export type QuoteRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteRequest
     */
    omit?: QuoteRequestOmit<ExtArgs> | null
    /**
     * Filter which QuoteRequest to delete.
     */
    where: QuoteRequestWhereUniqueInput
  }

  /**
   * QuoteRequest deleteMany
   */
  export type QuoteRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuoteRequests to delete
     */
    where?: QuoteRequestWhereInput
    /**
     * Limit how many QuoteRequests to delete.
     */
    limit?: number
  }

  /**
   * QuoteRequest without action
   */
  export type QuoteRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteRequest
     */
    omit?: QuoteRequestOmit<ExtArgs> | null
  }


  /**
   * Model ContactMessage
   */

  export type AggregateContactMessage = {
    _count: ContactMessageCountAggregateOutputType | null
    _min: ContactMessageMinAggregateOutputType | null
    _max: ContactMessageMaxAggregateOutputType | null
  }

  export type ContactMessageMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    name: string | null
    email: string | null
    phone: string | null
    subject: string | null
    message: string | null
    status: string | null
  }

  export type ContactMessageMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    name: string | null
    email: string | null
    phone: string | null
    subject: string | null
    message: string | null
    status: string | null
  }

  export type ContactMessageCountAggregateOutputType = {
    id: number
    createdAt: number
    name: number
    email: number
    phone: number
    subject: number
    message: number
    status: number
    _all: number
  }


  export type ContactMessageMinAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    email?: true
    phone?: true
    subject?: true
    message?: true
    status?: true
  }

  export type ContactMessageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    email?: true
    phone?: true
    subject?: true
    message?: true
    status?: true
  }

  export type ContactMessageCountAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    email?: true
    phone?: true
    subject?: true
    message?: true
    status?: true
    _all?: true
  }

  export type ContactMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactMessage to aggregate.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactMessages
    **/
    _count?: true | ContactMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMessageMaxAggregateInputType
  }

  export type GetContactMessageAggregateType<T extends ContactMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateContactMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactMessage[P]>
      : GetScalarType<T[P], AggregateContactMessage[P]>
  }




  export type ContactMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactMessageWhereInput
    orderBy?: ContactMessageOrderByWithAggregationInput | ContactMessageOrderByWithAggregationInput[]
    by: ContactMessageScalarFieldEnum[] | ContactMessageScalarFieldEnum
    having?: ContactMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactMessageCountAggregateInputType | true
    _min?: ContactMessageMinAggregateInputType
    _max?: ContactMessageMaxAggregateInputType
  }

  export type ContactMessageGroupByOutputType = {
    id: string
    createdAt: Date
    name: string
    email: string
    phone: string | null
    subject: string
    message: string
    status: string
    _count: ContactMessageCountAggregateOutputType | null
    _min: ContactMessageMinAggregateOutputType | null
    _max: ContactMessageMaxAggregateOutputType | null
  }

  type GetContactMessageGroupByPayload<T extends ContactMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ContactMessageGroupByOutputType[P]>
        }
      >
    >


  export type ContactMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
  }, ExtArgs["result"]["contactMessage"]>

  export type ContactMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
  }, ExtArgs["result"]["contactMessage"]>

  export type ContactMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
  }, ExtArgs["result"]["contactMessage"]>

  export type ContactMessageSelectScalar = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
  }

  export type ContactMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "name" | "email" | "phone" | "subject" | "message" | "status", ExtArgs["result"]["contactMessage"]>

  export type $ContactMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactMessage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      name: string
      email: string
      phone: string | null
      subject: string
      message: string
      status: string
    }, ExtArgs["result"]["contactMessage"]>
    composites: {}
  }

  type ContactMessageGetPayload<S extends boolean | null | undefined | ContactMessageDefaultArgs> = $Result.GetResult<Prisma.$ContactMessagePayload, S>

  type ContactMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactMessageCountAggregateInputType | true
    }

  export interface ContactMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactMessage'], meta: { name: 'ContactMessage' } }
    /**
     * Find zero or one ContactMessage that matches the filter.
     * @param {ContactMessageFindUniqueArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactMessageFindUniqueArgs>(args: SelectSubset<T, ContactMessageFindUniqueArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ContactMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactMessageFindUniqueOrThrowArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ContactMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindFirstArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactMessageFindFirstArgs>(args?: SelectSubset<T, ContactMessageFindFirstArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ContactMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindFirstOrThrowArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ContactMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactMessages
     * const contactMessages = await prisma.contactMessage.findMany()
     * 
     * // Get first 10 ContactMessages
     * const contactMessages = await prisma.contactMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactMessageWithIdOnly = await prisma.contactMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactMessageFindManyArgs>(args?: SelectSubset<T, ContactMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ContactMessage.
     * @param {ContactMessageCreateArgs} args - Arguments to create a ContactMessage.
     * @example
     * // Create one ContactMessage
     * const ContactMessage = await prisma.contactMessage.create({
     *   data: {
     *     // ... data to create a ContactMessage
     *   }
     * })
     * 
     */
    create<T extends ContactMessageCreateArgs>(args: SelectSubset<T, ContactMessageCreateArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ContactMessages.
     * @param {ContactMessageCreateManyArgs} args - Arguments to create many ContactMessages.
     * @example
     * // Create many ContactMessages
     * const contactMessage = await prisma.contactMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactMessageCreateManyArgs>(args?: SelectSubset<T, ContactMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactMessages and returns the data saved in the database.
     * @param {ContactMessageCreateManyAndReturnArgs} args - Arguments to create many ContactMessages.
     * @example
     * // Create many ContactMessages
     * const contactMessage = await prisma.contactMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactMessages and only return the `id`
     * const contactMessageWithIdOnly = await prisma.contactMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ContactMessage.
     * @param {ContactMessageDeleteArgs} args - Arguments to delete one ContactMessage.
     * @example
     * // Delete one ContactMessage
     * const ContactMessage = await prisma.contactMessage.delete({
     *   where: {
     *     // ... filter to delete one ContactMessage
     *   }
     * })
     * 
     */
    delete<T extends ContactMessageDeleteArgs>(args: SelectSubset<T, ContactMessageDeleteArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ContactMessage.
     * @param {ContactMessageUpdateArgs} args - Arguments to update one ContactMessage.
     * @example
     * // Update one ContactMessage
     * const contactMessage = await prisma.contactMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactMessageUpdateArgs>(args: SelectSubset<T, ContactMessageUpdateArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ContactMessages.
     * @param {ContactMessageDeleteManyArgs} args - Arguments to filter ContactMessages to delete.
     * @example
     * // Delete a few ContactMessages
     * const { count } = await prisma.contactMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactMessageDeleteManyArgs>(args?: SelectSubset<T, ContactMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactMessages
     * const contactMessage = await prisma.contactMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactMessageUpdateManyArgs>(args: SelectSubset<T, ContactMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactMessages and returns the data updated in the database.
     * @param {ContactMessageUpdateManyAndReturnArgs} args - Arguments to update many ContactMessages.
     * @example
     * // Update many ContactMessages
     * const contactMessage = await prisma.contactMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactMessages and only return the `id`
     * const contactMessageWithIdOnly = await prisma.contactMessage.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ContactMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ContactMessage.
     * @param {ContactMessageUpsertArgs} args - Arguments to update or create a ContactMessage.
     * @example
     * // Update or create a ContactMessage
     * const contactMessage = await prisma.contactMessage.upsert({
     *   create: {
     *     // ... data to create a ContactMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactMessage we want to update
     *   }
     * })
     */
    upsert<T extends ContactMessageUpsertArgs>(args: SelectSubset<T, ContactMessageUpsertArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ContactMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageCountArgs} args - Arguments to filter ContactMessages to count.
     * @example
     * // Count the number of ContactMessages
     * const count = await prisma.contactMessage.count({
     *   where: {
     *     // ... the filter for the ContactMessages we want to count
     *   }
     * })
    **/
    count<T extends ContactMessageCountArgs>(
      args?: Subset<T, ContactMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactMessageAggregateArgs>(args: Subset<T, ContactMessageAggregateArgs>): Prisma.PrismaPromise<GetContactMessageAggregateType<T>>

    /**
     * Group by ContactMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageGroupByArgs} args - Group by arguments.
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
      T extends ContactMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactMessageGroupByArgs['orderBy'] }
        : { orderBy?: ContactMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactMessage model
   */
  readonly fields: ContactMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ContactMessage model
   */ 
  interface ContactMessageFieldRefs {
    readonly id: FieldRef<"ContactMessage", 'String'>
    readonly createdAt: FieldRef<"ContactMessage", 'DateTime'>
    readonly name: FieldRef<"ContactMessage", 'String'>
    readonly email: FieldRef<"ContactMessage", 'String'>
    readonly phone: FieldRef<"ContactMessage", 'String'>
    readonly subject: FieldRef<"ContactMessage", 'String'>
    readonly message: FieldRef<"ContactMessage", 'String'>
    readonly status: FieldRef<"ContactMessage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ContactMessage findUnique
   */
  export type ContactMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage findUniqueOrThrow
   */
  export type ContactMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage findFirst
   */
  export type ContactMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactMessages.
     */
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[]
  }

  /**
   * ContactMessage findFirstOrThrow
   */
  export type ContactMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactMessages.
     */
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[]
  }

  /**
   * ContactMessage findMany
   */
  export type ContactMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessages to fetch.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[]
  }

  /**
   * ContactMessage create
   */
  export type ContactMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactMessage.
     */
    data: XOR<ContactMessageCreateInput, ContactMessageUncheckedCreateInput>
  }

  /**
   * ContactMessage createMany
   */
  export type ContactMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactMessages.
     */
    data: ContactMessageCreateManyInput | ContactMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactMessage createManyAndReturn
   */
  export type ContactMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ContactMessages.
     */
    data: ContactMessageCreateManyInput | ContactMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactMessage update
   */
  export type ContactMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactMessage.
     */
    data: XOR<ContactMessageUpdateInput, ContactMessageUncheckedUpdateInput>
    /**
     * Choose, which ContactMessage to update.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage updateMany
   */
  export type ContactMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactMessages.
     */
    data: XOR<ContactMessageUpdateManyMutationInput, ContactMessageUncheckedUpdateManyInput>
    /**
     * Filter which ContactMessages to update
     */
    where?: ContactMessageWhereInput
    /**
     * Limit how many ContactMessages to update.
     */
    limit?: number
  }

  /**
   * ContactMessage updateManyAndReturn
   */
  export type ContactMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data used to update ContactMessages.
     */
    data: XOR<ContactMessageUpdateManyMutationInput, ContactMessageUncheckedUpdateManyInput>
    /**
     * Filter which ContactMessages to update
     */
    where?: ContactMessageWhereInput
    /**
     * Limit how many ContactMessages to update.
     */
    limit?: number
  }

  /**
   * ContactMessage upsert
   */
  export type ContactMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactMessage to update in case it exists.
     */
    where: ContactMessageWhereUniqueInput
    /**
     * In case the ContactMessage found by the `where` argument doesn't exist, create a new ContactMessage with this data.
     */
    create: XOR<ContactMessageCreateInput, ContactMessageUncheckedCreateInput>
    /**
     * In case the ContactMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactMessageUpdateInput, ContactMessageUncheckedUpdateInput>
  }

  /**
   * ContactMessage delete
   */
  export type ContactMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter which ContactMessage to delete.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage deleteMany
   */
  export type ContactMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactMessages to delete
     */
    where?: ContactMessageWhereInput
    /**
     * Limit how many ContactMessages to delete.
     */
    limit?: number
  }

  /**
   * ContactMessage without action
   */
  export type ContactMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
  }


  /**
   * Model JobApplication
   */

  export type AggregateJobApplication = {
    _count: JobApplicationCountAggregateOutputType | null
    _min: JobApplicationMinAggregateOutputType | null
    _max: JobApplicationMaxAggregateOutputType | null
  }

  export type JobApplicationMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    position: string | null
    experience: string | null
    licenseType: string | null
    cvUrl: string | null
    message: string | null
    status: string | null
  }

  export type JobApplicationMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    position: string | null
    experience: string | null
    licenseType: string | null
    cvUrl: string | null
    message: string | null
    status: string | null
  }

  export type JobApplicationCountAggregateOutputType = {
    id: number
    createdAt: number
    firstName: number
    lastName: number
    email: number
    phone: number
    position: number
    experience: number
    licenseType: number
    cvUrl: number
    message: number
    status: number
    _all: number
  }


  export type JobApplicationMinAggregateInputType = {
    id?: true
    createdAt?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    position?: true
    experience?: true
    licenseType?: true
    cvUrl?: true
    message?: true
    status?: true
  }

  export type JobApplicationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    position?: true
    experience?: true
    licenseType?: true
    cvUrl?: true
    message?: true
    status?: true
  }

  export type JobApplicationCountAggregateInputType = {
    id?: true
    createdAt?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    position?: true
    experience?: true
    licenseType?: true
    cvUrl?: true
    message?: true
    status?: true
    _all?: true
  }

  export type JobApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobApplication to aggregate.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobApplications
    **/
    _count?: true | JobApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobApplicationMaxAggregateInputType
  }

  export type GetJobApplicationAggregateType<T extends JobApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateJobApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobApplication[P]>
      : GetScalarType<T[P], AggregateJobApplication[P]>
  }




  export type JobApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationWhereInput
    orderBy?: JobApplicationOrderByWithAggregationInput | JobApplicationOrderByWithAggregationInput[]
    by: JobApplicationScalarFieldEnum[] | JobApplicationScalarFieldEnum
    having?: JobApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobApplicationCountAggregateInputType | true
    _min?: JobApplicationMinAggregateInputType
    _max?: JobApplicationMaxAggregateInputType
  }

  export type JobApplicationGroupByOutputType = {
    id: string
    createdAt: Date
    firstName: string
    lastName: string
    email: string
    phone: string
    position: string
    experience: string | null
    licenseType: string | null
    cvUrl: string | null
    message: string | null
    status: string
    _count: JobApplicationCountAggregateOutputType | null
    _min: JobApplicationMinAggregateOutputType | null
    _max: JobApplicationMaxAggregateOutputType | null
  }

  type GetJobApplicationGroupByPayload<T extends JobApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], JobApplicationGroupByOutputType[P]>
        }
      >
    >


  export type JobApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    position?: boolean
    experience?: boolean
    licenseType?: boolean
    cvUrl?: boolean
    message?: boolean
    status?: boolean
  }, ExtArgs["result"]["jobApplication"]>

  export type JobApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    position?: boolean
    experience?: boolean
    licenseType?: boolean
    cvUrl?: boolean
    message?: boolean
    status?: boolean
  }, ExtArgs["result"]["jobApplication"]>

  export type JobApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    position?: boolean
    experience?: boolean
    licenseType?: boolean
    cvUrl?: boolean
    message?: boolean
    status?: boolean
  }, ExtArgs["result"]["jobApplication"]>

  export type JobApplicationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    position?: boolean
    experience?: boolean
    licenseType?: boolean
    cvUrl?: boolean
    message?: boolean
    status?: boolean
  }

  export type JobApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "firstName" | "lastName" | "email" | "phone" | "position" | "experience" | "licenseType" | "cvUrl" | "message" | "status", ExtArgs["result"]["jobApplication"]>

  export type $JobApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobApplication"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      firstName: string
      lastName: string
      email: string
      phone: string
      position: string
      experience: string | null
      licenseType: string | null
      cvUrl: string | null
      message: string | null
      status: string
    }, ExtArgs["result"]["jobApplication"]>
    composites: {}
  }

  type JobApplicationGetPayload<S extends boolean | null | undefined | JobApplicationDefaultArgs> = $Result.GetResult<Prisma.$JobApplicationPayload, S>

  type JobApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobApplicationCountAggregateInputType | true
    }

  export interface JobApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobApplication'], meta: { name: 'JobApplication' } }
    /**
     * Find zero or one JobApplication that matches the filter.
     * @param {JobApplicationFindUniqueArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobApplicationFindUniqueArgs>(args: SelectSubset<T, JobApplicationFindUniqueArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one JobApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobApplicationFindUniqueOrThrowArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, JobApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first JobApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindFirstArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobApplicationFindFirstArgs>(args?: SelectSubset<T, JobApplicationFindFirstArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first JobApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindFirstOrThrowArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, JobApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more JobApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobApplications
     * const jobApplications = await prisma.jobApplication.findMany()
     * 
     * // Get first 10 JobApplications
     * const jobApplications = await prisma.jobApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobApplicationWithIdOnly = await prisma.jobApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobApplicationFindManyArgs>(args?: SelectSubset<T, JobApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a JobApplication.
     * @param {JobApplicationCreateArgs} args - Arguments to create a JobApplication.
     * @example
     * // Create one JobApplication
     * const JobApplication = await prisma.jobApplication.create({
     *   data: {
     *     // ... data to create a JobApplication
     *   }
     * })
     * 
     */
    create<T extends JobApplicationCreateArgs>(args: SelectSubset<T, JobApplicationCreateArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many JobApplications.
     * @param {JobApplicationCreateManyArgs} args - Arguments to create many JobApplications.
     * @example
     * // Create many JobApplications
     * const jobApplication = await prisma.jobApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobApplicationCreateManyArgs>(args?: SelectSubset<T, JobApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobApplications and returns the data saved in the database.
     * @param {JobApplicationCreateManyAndReturnArgs} args - Arguments to create many JobApplications.
     * @example
     * // Create many JobApplications
     * const jobApplication = await prisma.jobApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobApplications and only return the `id`
     * const jobApplicationWithIdOnly = await prisma.jobApplication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, JobApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a JobApplication.
     * @param {JobApplicationDeleteArgs} args - Arguments to delete one JobApplication.
     * @example
     * // Delete one JobApplication
     * const JobApplication = await prisma.jobApplication.delete({
     *   where: {
     *     // ... filter to delete one JobApplication
     *   }
     * })
     * 
     */
    delete<T extends JobApplicationDeleteArgs>(args: SelectSubset<T, JobApplicationDeleteArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one JobApplication.
     * @param {JobApplicationUpdateArgs} args - Arguments to update one JobApplication.
     * @example
     * // Update one JobApplication
     * const jobApplication = await prisma.jobApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobApplicationUpdateArgs>(args: SelectSubset<T, JobApplicationUpdateArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more JobApplications.
     * @param {JobApplicationDeleteManyArgs} args - Arguments to filter JobApplications to delete.
     * @example
     * // Delete a few JobApplications
     * const { count } = await prisma.jobApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobApplicationDeleteManyArgs>(args?: SelectSubset<T, JobApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobApplications
     * const jobApplication = await prisma.jobApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobApplicationUpdateManyArgs>(args: SelectSubset<T, JobApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobApplications and returns the data updated in the database.
     * @param {JobApplicationUpdateManyAndReturnArgs} args - Arguments to update many JobApplications.
     * @example
     * // Update many JobApplications
     * const jobApplication = await prisma.jobApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobApplications and only return the `id`
     * const jobApplicationWithIdOnly = await prisma.jobApplication.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends JobApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, JobApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one JobApplication.
     * @param {JobApplicationUpsertArgs} args - Arguments to update or create a JobApplication.
     * @example
     * // Update or create a JobApplication
     * const jobApplication = await prisma.jobApplication.upsert({
     *   create: {
     *     // ... data to create a JobApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobApplication we want to update
     *   }
     * })
     */
    upsert<T extends JobApplicationUpsertArgs>(args: SelectSubset<T, JobApplicationUpsertArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of JobApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationCountArgs} args - Arguments to filter JobApplications to count.
     * @example
     * // Count the number of JobApplications
     * const count = await prisma.jobApplication.count({
     *   where: {
     *     // ... the filter for the JobApplications we want to count
     *   }
     * })
    **/
    count<T extends JobApplicationCountArgs>(
      args?: Subset<T, JobApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobApplicationAggregateArgs>(args: Subset<T, JobApplicationAggregateArgs>): Prisma.PrismaPromise<GetJobApplicationAggregateType<T>>

    /**
     * Group by JobApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationGroupByArgs} args - Group by arguments.
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
      T extends JobApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobApplicationGroupByArgs['orderBy'] }
        : { orderBy?: JobApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobApplication model
   */
  readonly fields: JobApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the JobApplication model
   */ 
  interface JobApplicationFieldRefs {
    readonly id: FieldRef<"JobApplication", 'String'>
    readonly createdAt: FieldRef<"JobApplication", 'DateTime'>
    readonly firstName: FieldRef<"JobApplication", 'String'>
    readonly lastName: FieldRef<"JobApplication", 'String'>
    readonly email: FieldRef<"JobApplication", 'String'>
    readonly phone: FieldRef<"JobApplication", 'String'>
    readonly position: FieldRef<"JobApplication", 'String'>
    readonly experience: FieldRef<"JobApplication", 'String'>
    readonly licenseType: FieldRef<"JobApplication", 'String'>
    readonly cvUrl: FieldRef<"JobApplication", 'String'>
    readonly message: FieldRef<"JobApplication", 'String'>
    readonly status: FieldRef<"JobApplication", 'String'>
  }
    

  // Custom InputTypes
  /**
   * JobApplication findUnique
   */
  export type JobApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication findUniqueOrThrow
   */
  export type JobApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication findFirst
   */
  export type JobApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobApplications.
     */
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobApplication findFirstOrThrow
   */
  export type JobApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobApplications.
     */
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobApplication findMany
   */
  export type JobApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Filter, which JobApplications to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobApplication create
   */
  export type JobApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * The data needed to create a JobApplication.
     */
    data: XOR<JobApplicationCreateInput, JobApplicationUncheckedCreateInput>
  }

  /**
   * JobApplication createMany
   */
  export type JobApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobApplications.
     */
    data: JobApplicationCreateManyInput | JobApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobApplication createManyAndReturn
   */
  export type JobApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many JobApplications.
     */
    data: JobApplicationCreateManyInput | JobApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobApplication update
   */
  export type JobApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * The data needed to update a JobApplication.
     */
    data: XOR<JobApplicationUpdateInput, JobApplicationUncheckedUpdateInput>
    /**
     * Choose, which JobApplication to update.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication updateMany
   */
  export type JobApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobApplications.
     */
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyInput>
    /**
     * Filter which JobApplications to update
     */
    where?: JobApplicationWhereInput
    /**
     * Limit how many JobApplications to update.
     */
    limit?: number
  }

  /**
   * JobApplication updateManyAndReturn
   */
  export type JobApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * The data used to update JobApplications.
     */
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyInput>
    /**
     * Filter which JobApplications to update
     */
    where?: JobApplicationWhereInput
    /**
     * Limit how many JobApplications to update.
     */
    limit?: number
  }

  /**
   * JobApplication upsert
   */
  export type JobApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * The filter to search for the JobApplication to update in case it exists.
     */
    where: JobApplicationWhereUniqueInput
    /**
     * In case the JobApplication found by the `where` argument doesn't exist, create a new JobApplication with this data.
     */
    create: XOR<JobApplicationCreateInput, JobApplicationUncheckedCreateInput>
    /**
     * In case the JobApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobApplicationUpdateInput, JobApplicationUncheckedUpdateInput>
  }

  /**
   * JobApplication delete
   */
  export type JobApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Filter which JobApplication to delete.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication deleteMany
   */
  export type JobApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobApplications to delete
     */
    where?: JobApplicationWhereInput
    /**
     * Limit how many JobApplications to delete.
     */
    limit?: number
  }

  /**
   * JobApplication without action
   */
  export type JobApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
  }


  /**
   * Model TrackingOrder
   */

  export type AggregateTrackingOrder = {
    _count: TrackingOrderCountAggregateOutputType | null
    _min: TrackingOrderMinAggregateOutputType | null
    _max: TrackingOrderMaxAggregateOutputType | null
  }

  export type TrackingOrderMinAggregateOutputType = {
    id: string | null
    trackingCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
    clientName: string | null
    senderCompany: string | null
    recipientName: string | null
    origin: string | null
    destination: string | null
    serviceType: string | null
    currentStatus: string | null
    currentLocation: string | null
    estimatedDelivery: Date | null
    deliveredAt: Date | null
  }

  export type TrackingOrderMaxAggregateOutputType = {
    id: string | null
    trackingCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
    clientName: string | null
    senderCompany: string | null
    recipientName: string | null
    origin: string | null
    destination: string | null
    serviceType: string | null
    currentStatus: string | null
    currentLocation: string | null
    estimatedDelivery: Date | null
    deliveredAt: Date | null
  }

  export type TrackingOrderCountAggregateOutputType = {
    id: number
    trackingCode: number
    createdAt: number
    updatedAt: number
    clientName: number
    senderCompany: number
    recipientName: number
    origin: number
    destination: number
    serviceType: number
    currentStatus: number
    currentLocation: number
    estimatedDelivery: number
    deliveredAt: number
    _all: number
  }


  export type TrackingOrderMinAggregateInputType = {
    id?: true
    trackingCode?: true
    createdAt?: true
    updatedAt?: true
    clientName?: true
    senderCompany?: true
    recipientName?: true
    origin?: true
    destination?: true
    serviceType?: true
    currentStatus?: true
    currentLocation?: true
    estimatedDelivery?: true
    deliveredAt?: true
  }

  export type TrackingOrderMaxAggregateInputType = {
    id?: true
    trackingCode?: true
    createdAt?: true
    updatedAt?: true
    clientName?: true
    senderCompany?: true
    recipientName?: true
    origin?: true
    destination?: true
    serviceType?: true
    currentStatus?: true
    currentLocation?: true
    estimatedDelivery?: true
    deliveredAt?: true
  }

  export type TrackingOrderCountAggregateInputType = {
    id?: true
    trackingCode?: true
    createdAt?: true
    updatedAt?: true
    clientName?: true
    senderCompany?: true
    recipientName?: true
    origin?: true
    destination?: true
    serviceType?: true
    currentStatus?: true
    currentLocation?: true
    estimatedDelivery?: true
    deliveredAt?: true
    _all?: true
  }

  export type TrackingOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackingOrder to aggregate.
     */
    where?: TrackingOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingOrders to fetch.
     */
    orderBy?: TrackingOrderOrderByWithRelationInput | TrackingOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackingOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrackingOrders
    **/
    _count?: true | TrackingOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackingOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackingOrderMaxAggregateInputType
  }

  export type GetTrackingOrderAggregateType<T extends TrackingOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateTrackingOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrackingOrder[P]>
      : GetScalarType<T[P], AggregateTrackingOrder[P]>
  }




  export type TrackingOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackingOrderWhereInput
    orderBy?: TrackingOrderOrderByWithAggregationInput | TrackingOrderOrderByWithAggregationInput[]
    by: TrackingOrderScalarFieldEnum[] | TrackingOrderScalarFieldEnum
    having?: TrackingOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackingOrderCountAggregateInputType | true
    _min?: TrackingOrderMinAggregateInputType
    _max?: TrackingOrderMaxAggregateInputType
  }

  export type TrackingOrderGroupByOutputType = {
    id: string
    trackingCode: string
    createdAt: Date
    updatedAt: Date
    clientName: string
    senderCompany: string
    recipientName: string
    origin: string
    destination: string
    serviceType: string
    currentStatus: string
    currentLocation: string | null
    estimatedDelivery: Date | null
    deliveredAt: Date | null
    _count: TrackingOrderCountAggregateOutputType | null
    _min: TrackingOrderMinAggregateOutputType | null
    _max: TrackingOrderMaxAggregateOutputType | null
  }

  type GetTrackingOrderGroupByPayload<T extends TrackingOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackingOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackingOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackingOrderGroupByOutputType[P]>
            : GetScalarType<T[P], TrackingOrderGroupByOutputType[P]>
        }
      >
    >


  export type TrackingOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackingCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientName?: boolean
    senderCompany?: boolean
    recipientName?: boolean
    origin?: boolean
    destination?: boolean
    serviceType?: boolean
    currentStatus?: boolean
    currentLocation?: boolean
    estimatedDelivery?: boolean
    deliveredAt?: boolean
    events?: boolean | TrackingOrder$eventsArgs<ExtArgs>
    _count?: boolean | TrackingOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackingOrder"]>

  export type TrackingOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackingCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientName?: boolean
    senderCompany?: boolean
    recipientName?: boolean
    origin?: boolean
    destination?: boolean
    serviceType?: boolean
    currentStatus?: boolean
    currentLocation?: boolean
    estimatedDelivery?: boolean
    deliveredAt?: boolean
  }, ExtArgs["result"]["trackingOrder"]>

  export type TrackingOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackingCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientName?: boolean
    senderCompany?: boolean
    recipientName?: boolean
    origin?: boolean
    destination?: boolean
    serviceType?: boolean
    currentStatus?: boolean
    currentLocation?: boolean
    estimatedDelivery?: boolean
    deliveredAt?: boolean
  }, ExtArgs["result"]["trackingOrder"]>

  export type TrackingOrderSelectScalar = {
    id?: boolean
    trackingCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientName?: boolean
    senderCompany?: boolean
    recipientName?: boolean
    origin?: boolean
    destination?: boolean
    serviceType?: boolean
    currentStatus?: boolean
    currentLocation?: boolean
    estimatedDelivery?: boolean
    deliveredAt?: boolean
  }

  export type TrackingOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "trackingCode" | "createdAt" | "updatedAt" | "clientName" | "senderCompany" | "recipientName" | "origin" | "destination" | "serviceType" | "currentStatus" | "currentLocation" | "estimatedDelivery" | "deliveredAt", ExtArgs["result"]["trackingOrder"]>
  export type TrackingOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | TrackingOrder$eventsArgs<ExtArgs>
    _count?: boolean | TrackingOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TrackingOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TrackingOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TrackingOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrackingOrder"
    objects: {
      events: Prisma.$TrackingEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      trackingCode: string
      createdAt: Date
      updatedAt: Date
      clientName: string
      senderCompany: string
      recipientName: string
      origin: string
      destination: string
      serviceType: string
      currentStatus: string
      currentLocation: string | null
      estimatedDelivery: Date | null
      deliveredAt: Date | null
    }, ExtArgs["result"]["trackingOrder"]>
    composites: {}
  }

  type TrackingOrderGetPayload<S extends boolean | null | undefined | TrackingOrderDefaultArgs> = $Result.GetResult<Prisma.$TrackingOrderPayload, S>

  type TrackingOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrackingOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrackingOrderCountAggregateInputType | true
    }

  export interface TrackingOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrackingOrder'], meta: { name: 'TrackingOrder' } }
    /**
     * Find zero or one TrackingOrder that matches the filter.
     * @param {TrackingOrderFindUniqueArgs} args - Arguments to find a TrackingOrder
     * @example
     * // Get one TrackingOrder
     * const trackingOrder = await prisma.trackingOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrackingOrderFindUniqueArgs>(args: SelectSubset<T, TrackingOrderFindUniqueArgs<ExtArgs>>): Prisma__TrackingOrderClient<$Result.GetResult<Prisma.$TrackingOrderPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TrackingOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrackingOrderFindUniqueOrThrowArgs} args - Arguments to find a TrackingOrder
     * @example
     * // Get one TrackingOrder
     * const trackingOrder = await prisma.trackingOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrackingOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, TrackingOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrackingOrderClient<$Result.GetResult<Prisma.$TrackingOrderPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TrackingOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingOrderFindFirstArgs} args - Arguments to find a TrackingOrder
     * @example
     * // Get one TrackingOrder
     * const trackingOrder = await prisma.trackingOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrackingOrderFindFirstArgs>(args?: SelectSubset<T, TrackingOrderFindFirstArgs<ExtArgs>>): Prisma__TrackingOrderClient<$Result.GetResult<Prisma.$TrackingOrderPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TrackingOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingOrderFindFirstOrThrowArgs} args - Arguments to find a TrackingOrder
     * @example
     * // Get one TrackingOrder
     * const trackingOrder = await prisma.trackingOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrackingOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, TrackingOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrackingOrderClient<$Result.GetResult<Prisma.$TrackingOrderPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TrackingOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrackingOrders
     * const trackingOrders = await prisma.trackingOrder.findMany()
     * 
     * // Get first 10 TrackingOrders
     * const trackingOrders = await prisma.trackingOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackingOrderWithIdOnly = await prisma.trackingOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrackingOrderFindManyArgs>(args?: SelectSubset<T, TrackingOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingOrderPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TrackingOrder.
     * @param {TrackingOrderCreateArgs} args - Arguments to create a TrackingOrder.
     * @example
     * // Create one TrackingOrder
     * const TrackingOrder = await prisma.trackingOrder.create({
     *   data: {
     *     // ... data to create a TrackingOrder
     *   }
     * })
     * 
     */
    create<T extends TrackingOrderCreateArgs>(args: SelectSubset<T, TrackingOrderCreateArgs<ExtArgs>>): Prisma__TrackingOrderClient<$Result.GetResult<Prisma.$TrackingOrderPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TrackingOrders.
     * @param {TrackingOrderCreateManyArgs} args - Arguments to create many TrackingOrders.
     * @example
     * // Create many TrackingOrders
     * const trackingOrder = await prisma.trackingOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrackingOrderCreateManyArgs>(args?: SelectSubset<T, TrackingOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrackingOrders and returns the data saved in the database.
     * @param {TrackingOrderCreateManyAndReturnArgs} args - Arguments to create many TrackingOrders.
     * @example
     * // Create many TrackingOrders
     * const trackingOrder = await prisma.trackingOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrackingOrders and only return the `id`
     * const trackingOrderWithIdOnly = await prisma.trackingOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrackingOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, TrackingOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingOrderPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a TrackingOrder.
     * @param {TrackingOrderDeleteArgs} args - Arguments to delete one TrackingOrder.
     * @example
     * // Delete one TrackingOrder
     * const TrackingOrder = await prisma.trackingOrder.delete({
     *   where: {
     *     // ... filter to delete one TrackingOrder
     *   }
     * })
     * 
     */
    delete<T extends TrackingOrderDeleteArgs>(args: SelectSubset<T, TrackingOrderDeleteArgs<ExtArgs>>): Prisma__TrackingOrderClient<$Result.GetResult<Prisma.$TrackingOrderPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TrackingOrder.
     * @param {TrackingOrderUpdateArgs} args - Arguments to update one TrackingOrder.
     * @example
     * // Update one TrackingOrder
     * const trackingOrder = await prisma.trackingOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrackingOrderUpdateArgs>(args: SelectSubset<T, TrackingOrderUpdateArgs<ExtArgs>>): Prisma__TrackingOrderClient<$Result.GetResult<Prisma.$TrackingOrderPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TrackingOrders.
     * @param {TrackingOrderDeleteManyArgs} args - Arguments to filter TrackingOrders to delete.
     * @example
     * // Delete a few TrackingOrders
     * const { count } = await prisma.trackingOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrackingOrderDeleteManyArgs>(args?: SelectSubset<T, TrackingOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackingOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrackingOrders
     * const trackingOrder = await prisma.trackingOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrackingOrderUpdateManyArgs>(args: SelectSubset<T, TrackingOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackingOrders and returns the data updated in the database.
     * @param {TrackingOrderUpdateManyAndReturnArgs} args - Arguments to update many TrackingOrders.
     * @example
     * // Update many TrackingOrders
     * const trackingOrder = await prisma.trackingOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrackingOrders and only return the `id`
     * const trackingOrderWithIdOnly = await prisma.trackingOrder.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TrackingOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, TrackingOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingOrderPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one TrackingOrder.
     * @param {TrackingOrderUpsertArgs} args - Arguments to update or create a TrackingOrder.
     * @example
     * // Update or create a TrackingOrder
     * const trackingOrder = await prisma.trackingOrder.upsert({
     *   create: {
     *     // ... data to create a TrackingOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrackingOrder we want to update
     *   }
     * })
     */
    upsert<T extends TrackingOrderUpsertArgs>(args: SelectSubset<T, TrackingOrderUpsertArgs<ExtArgs>>): Prisma__TrackingOrderClient<$Result.GetResult<Prisma.$TrackingOrderPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of TrackingOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingOrderCountArgs} args - Arguments to filter TrackingOrders to count.
     * @example
     * // Count the number of TrackingOrders
     * const count = await prisma.trackingOrder.count({
     *   where: {
     *     // ... the filter for the TrackingOrders we want to count
     *   }
     * })
    **/
    count<T extends TrackingOrderCountArgs>(
      args?: Subset<T, TrackingOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackingOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrackingOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrackingOrderAggregateArgs>(args: Subset<T, TrackingOrderAggregateArgs>): Prisma.PrismaPromise<GetTrackingOrderAggregateType<T>>

    /**
     * Group by TrackingOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingOrderGroupByArgs} args - Group by arguments.
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
      T extends TrackingOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackingOrderGroupByArgs['orderBy'] }
        : { orderBy?: TrackingOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrackingOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackingOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrackingOrder model
   */
  readonly fields: TrackingOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrackingOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackingOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends TrackingOrder$eventsArgs<ExtArgs> = {}>(args?: Subset<T, TrackingOrder$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingEventPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the TrackingOrder model
   */ 
  interface TrackingOrderFieldRefs {
    readonly id: FieldRef<"TrackingOrder", 'String'>
    readonly trackingCode: FieldRef<"TrackingOrder", 'String'>
    readonly createdAt: FieldRef<"TrackingOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"TrackingOrder", 'DateTime'>
    readonly clientName: FieldRef<"TrackingOrder", 'String'>
    readonly senderCompany: FieldRef<"TrackingOrder", 'String'>
    readonly recipientName: FieldRef<"TrackingOrder", 'String'>
    readonly origin: FieldRef<"TrackingOrder", 'String'>
    readonly destination: FieldRef<"TrackingOrder", 'String'>
    readonly serviceType: FieldRef<"TrackingOrder", 'String'>
    readonly currentStatus: FieldRef<"TrackingOrder", 'String'>
    readonly currentLocation: FieldRef<"TrackingOrder", 'String'>
    readonly estimatedDelivery: FieldRef<"TrackingOrder", 'DateTime'>
    readonly deliveredAt: FieldRef<"TrackingOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TrackingOrder findUnique
   */
  export type TrackingOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingOrder
     */
    select?: TrackingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingOrder
     */
    omit?: TrackingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingOrderInclude<ExtArgs> | null
    /**
     * Filter, which TrackingOrder to fetch.
     */
    where: TrackingOrderWhereUniqueInput
  }

  /**
   * TrackingOrder findUniqueOrThrow
   */
  export type TrackingOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingOrder
     */
    select?: TrackingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingOrder
     */
    omit?: TrackingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingOrderInclude<ExtArgs> | null
    /**
     * Filter, which TrackingOrder to fetch.
     */
    where: TrackingOrderWhereUniqueInput
  }

  /**
   * TrackingOrder findFirst
   */
  export type TrackingOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingOrder
     */
    select?: TrackingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingOrder
     */
    omit?: TrackingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingOrderInclude<ExtArgs> | null
    /**
     * Filter, which TrackingOrder to fetch.
     */
    where?: TrackingOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingOrders to fetch.
     */
    orderBy?: TrackingOrderOrderByWithRelationInput | TrackingOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackingOrders.
     */
    cursor?: TrackingOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackingOrders.
     */
    distinct?: TrackingOrderScalarFieldEnum | TrackingOrderScalarFieldEnum[]
  }

  /**
   * TrackingOrder findFirstOrThrow
   */
  export type TrackingOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingOrder
     */
    select?: TrackingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingOrder
     */
    omit?: TrackingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingOrderInclude<ExtArgs> | null
    /**
     * Filter, which TrackingOrder to fetch.
     */
    where?: TrackingOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingOrders to fetch.
     */
    orderBy?: TrackingOrderOrderByWithRelationInput | TrackingOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackingOrders.
     */
    cursor?: TrackingOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackingOrders.
     */
    distinct?: TrackingOrderScalarFieldEnum | TrackingOrderScalarFieldEnum[]
  }

  /**
   * TrackingOrder findMany
   */
  export type TrackingOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingOrder
     */
    select?: TrackingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingOrder
     */
    omit?: TrackingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingOrderInclude<ExtArgs> | null
    /**
     * Filter, which TrackingOrders to fetch.
     */
    where?: TrackingOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingOrders to fetch.
     */
    orderBy?: TrackingOrderOrderByWithRelationInput | TrackingOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrackingOrders.
     */
    cursor?: TrackingOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingOrders.
     */
    skip?: number
    distinct?: TrackingOrderScalarFieldEnum | TrackingOrderScalarFieldEnum[]
  }

  /**
   * TrackingOrder create
   */
  export type TrackingOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingOrder
     */
    select?: TrackingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingOrder
     */
    omit?: TrackingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a TrackingOrder.
     */
    data: XOR<TrackingOrderCreateInput, TrackingOrderUncheckedCreateInput>
  }

  /**
   * TrackingOrder createMany
   */
  export type TrackingOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrackingOrders.
     */
    data: TrackingOrderCreateManyInput | TrackingOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrackingOrder createManyAndReturn
   */
  export type TrackingOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingOrder
     */
    select?: TrackingOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingOrder
     */
    omit?: TrackingOrderOmit<ExtArgs> | null
    /**
     * The data used to create many TrackingOrders.
     */
    data: TrackingOrderCreateManyInput | TrackingOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrackingOrder update
   */
  export type TrackingOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingOrder
     */
    select?: TrackingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingOrder
     */
    omit?: TrackingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a TrackingOrder.
     */
    data: XOR<TrackingOrderUpdateInput, TrackingOrderUncheckedUpdateInput>
    /**
     * Choose, which TrackingOrder to update.
     */
    where: TrackingOrderWhereUniqueInput
  }

  /**
   * TrackingOrder updateMany
   */
  export type TrackingOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrackingOrders.
     */
    data: XOR<TrackingOrderUpdateManyMutationInput, TrackingOrderUncheckedUpdateManyInput>
    /**
     * Filter which TrackingOrders to update
     */
    where?: TrackingOrderWhereInput
    /**
     * Limit how many TrackingOrders to update.
     */
    limit?: number
  }

  /**
   * TrackingOrder updateManyAndReturn
   */
  export type TrackingOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingOrder
     */
    select?: TrackingOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingOrder
     */
    omit?: TrackingOrderOmit<ExtArgs> | null
    /**
     * The data used to update TrackingOrders.
     */
    data: XOR<TrackingOrderUpdateManyMutationInput, TrackingOrderUncheckedUpdateManyInput>
    /**
     * Filter which TrackingOrders to update
     */
    where?: TrackingOrderWhereInput
    /**
     * Limit how many TrackingOrders to update.
     */
    limit?: number
  }

  /**
   * TrackingOrder upsert
   */
  export type TrackingOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingOrder
     */
    select?: TrackingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingOrder
     */
    omit?: TrackingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the TrackingOrder to update in case it exists.
     */
    where: TrackingOrderWhereUniqueInput
    /**
     * In case the TrackingOrder found by the `where` argument doesn't exist, create a new TrackingOrder with this data.
     */
    create: XOR<TrackingOrderCreateInput, TrackingOrderUncheckedCreateInput>
    /**
     * In case the TrackingOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackingOrderUpdateInput, TrackingOrderUncheckedUpdateInput>
  }

  /**
   * TrackingOrder delete
   */
  export type TrackingOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingOrder
     */
    select?: TrackingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingOrder
     */
    omit?: TrackingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingOrderInclude<ExtArgs> | null
    /**
     * Filter which TrackingOrder to delete.
     */
    where: TrackingOrderWhereUniqueInput
  }

  /**
   * TrackingOrder deleteMany
   */
  export type TrackingOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackingOrders to delete
     */
    where?: TrackingOrderWhereInput
    /**
     * Limit how many TrackingOrders to delete.
     */
    limit?: number
  }

  /**
   * TrackingOrder.events
   */
  export type TrackingOrder$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingEvent
     */
    select?: TrackingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingEvent
     */
    omit?: TrackingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingEventInclude<ExtArgs> | null
    where?: TrackingEventWhereInput
    orderBy?: TrackingEventOrderByWithRelationInput | TrackingEventOrderByWithRelationInput[]
    cursor?: TrackingEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackingEventScalarFieldEnum | TrackingEventScalarFieldEnum[]
  }

  /**
   * TrackingOrder without action
   */
  export type TrackingOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingOrder
     */
    select?: TrackingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingOrder
     */
    omit?: TrackingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingOrderInclude<ExtArgs> | null
  }


  /**
   * Model TrackingEvent
   */

  export type AggregateTrackingEvent = {
    _count: TrackingEventCountAggregateOutputType | null
    _min: TrackingEventMinAggregateOutputType | null
    _max: TrackingEventMaxAggregateOutputType | null
  }

  export type TrackingEventMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    timestamp: Date | null
    status: string | null
    title: string | null
    description: string | null
    location: string | null
  }

  export type TrackingEventMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    timestamp: Date | null
    status: string | null
    title: string | null
    description: string | null
    location: string | null
  }

  export type TrackingEventCountAggregateOutputType = {
    id: number
    orderId: number
    timestamp: number
    status: number
    title: number
    description: number
    location: number
    _all: number
  }


  export type TrackingEventMinAggregateInputType = {
    id?: true
    orderId?: true
    timestamp?: true
    status?: true
    title?: true
    description?: true
    location?: true
  }

  export type TrackingEventMaxAggregateInputType = {
    id?: true
    orderId?: true
    timestamp?: true
    status?: true
    title?: true
    description?: true
    location?: true
  }

  export type TrackingEventCountAggregateInputType = {
    id?: true
    orderId?: true
    timestamp?: true
    status?: true
    title?: true
    description?: true
    location?: true
    _all?: true
  }

  export type TrackingEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackingEvent to aggregate.
     */
    where?: TrackingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingEvents to fetch.
     */
    orderBy?: TrackingEventOrderByWithRelationInput | TrackingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrackingEvents
    **/
    _count?: true | TrackingEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackingEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackingEventMaxAggregateInputType
  }

  export type GetTrackingEventAggregateType<T extends TrackingEventAggregateArgs> = {
        [P in keyof T & keyof AggregateTrackingEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrackingEvent[P]>
      : GetScalarType<T[P], AggregateTrackingEvent[P]>
  }




  export type TrackingEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackingEventWhereInput
    orderBy?: TrackingEventOrderByWithAggregationInput | TrackingEventOrderByWithAggregationInput[]
    by: TrackingEventScalarFieldEnum[] | TrackingEventScalarFieldEnum
    having?: TrackingEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackingEventCountAggregateInputType | true
    _min?: TrackingEventMinAggregateInputType
    _max?: TrackingEventMaxAggregateInputType
  }

  export type TrackingEventGroupByOutputType = {
    id: string
    orderId: string
    timestamp: Date
    status: string
    title: string
    description: string
    location: string
    _count: TrackingEventCountAggregateOutputType | null
    _min: TrackingEventMinAggregateOutputType | null
    _max: TrackingEventMaxAggregateOutputType | null
  }

  type GetTrackingEventGroupByPayload<T extends TrackingEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackingEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackingEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackingEventGroupByOutputType[P]>
            : GetScalarType<T[P], TrackingEventGroupByOutputType[P]>
        }
      >
    >


  export type TrackingEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    timestamp?: boolean
    status?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    order?: boolean | TrackingOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackingEvent"]>

  export type TrackingEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    timestamp?: boolean
    status?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    order?: boolean | TrackingOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackingEvent"]>

  export type TrackingEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    timestamp?: boolean
    status?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    order?: boolean | TrackingOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackingEvent"]>

  export type TrackingEventSelectScalar = {
    id?: boolean
    orderId?: boolean
    timestamp?: boolean
    status?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
  }

  export type TrackingEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "timestamp" | "status" | "title" | "description" | "location", ExtArgs["result"]["trackingEvent"]>
  export type TrackingEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | TrackingOrderDefaultArgs<ExtArgs>
  }
  export type TrackingEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | TrackingOrderDefaultArgs<ExtArgs>
  }
  export type TrackingEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | TrackingOrderDefaultArgs<ExtArgs>
  }

  export type $TrackingEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrackingEvent"
    objects: {
      order: Prisma.$TrackingOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      timestamp: Date
      status: string
      title: string
      description: string
      location: string
    }, ExtArgs["result"]["trackingEvent"]>
    composites: {}
  }

  type TrackingEventGetPayload<S extends boolean | null | undefined | TrackingEventDefaultArgs> = $Result.GetResult<Prisma.$TrackingEventPayload, S>

  type TrackingEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrackingEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrackingEventCountAggregateInputType | true
    }

  export interface TrackingEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrackingEvent'], meta: { name: 'TrackingEvent' } }
    /**
     * Find zero or one TrackingEvent that matches the filter.
     * @param {TrackingEventFindUniqueArgs} args - Arguments to find a TrackingEvent
     * @example
     * // Get one TrackingEvent
     * const trackingEvent = await prisma.trackingEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrackingEventFindUniqueArgs>(args: SelectSubset<T, TrackingEventFindUniqueArgs<ExtArgs>>): Prisma__TrackingEventClient<$Result.GetResult<Prisma.$TrackingEventPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TrackingEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrackingEventFindUniqueOrThrowArgs} args - Arguments to find a TrackingEvent
     * @example
     * // Get one TrackingEvent
     * const trackingEvent = await prisma.trackingEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrackingEventFindUniqueOrThrowArgs>(args: SelectSubset<T, TrackingEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrackingEventClient<$Result.GetResult<Prisma.$TrackingEventPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TrackingEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingEventFindFirstArgs} args - Arguments to find a TrackingEvent
     * @example
     * // Get one TrackingEvent
     * const trackingEvent = await prisma.trackingEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrackingEventFindFirstArgs>(args?: SelectSubset<T, TrackingEventFindFirstArgs<ExtArgs>>): Prisma__TrackingEventClient<$Result.GetResult<Prisma.$TrackingEventPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TrackingEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingEventFindFirstOrThrowArgs} args - Arguments to find a TrackingEvent
     * @example
     * // Get one TrackingEvent
     * const trackingEvent = await prisma.trackingEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrackingEventFindFirstOrThrowArgs>(args?: SelectSubset<T, TrackingEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrackingEventClient<$Result.GetResult<Prisma.$TrackingEventPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TrackingEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrackingEvents
     * const trackingEvents = await prisma.trackingEvent.findMany()
     * 
     * // Get first 10 TrackingEvents
     * const trackingEvents = await prisma.trackingEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackingEventWithIdOnly = await prisma.trackingEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrackingEventFindManyArgs>(args?: SelectSubset<T, TrackingEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingEventPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TrackingEvent.
     * @param {TrackingEventCreateArgs} args - Arguments to create a TrackingEvent.
     * @example
     * // Create one TrackingEvent
     * const TrackingEvent = await prisma.trackingEvent.create({
     *   data: {
     *     // ... data to create a TrackingEvent
     *   }
     * })
     * 
     */
    create<T extends TrackingEventCreateArgs>(args: SelectSubset<T, TrackingEventCreateArgs<ExtArgs>>): Prisma__TrackingEventClient<$Result.GetResult<Prisma.$TrackingEventPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TrackingEvents.
     * @param {TrackingEventCreateManyArgs} args - Arguments to create many TrackingEvents.
     * @example
     * // Create many TrackingEvents
     * const trackingEvent = await prisma.trackingEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrackingEventCreateManyArgs>(args?: SelectSubset<T, TrackingEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrackingEvents and returns the data saved in the database.
     * @param {TrackingEventCreateManyAndReturnArgs} args - Arguments to create many TrackingEvents.
     * @example
     * // Create many TrackingEvents
     * const trackingEvent = await prisma.trackingEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrackingEvents and only return the `id`
     * const trackingEventWithIdOnly = await prisma.trackingEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrackingEventCreateManyAndReturnArgs>(args?: SelectSubset<T, TrackingEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingEventPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a TrackingEvent.
     * @param {TrackingEventDeleteArgs} args - Arguments to delete one TrackingEvent.
     * @example
     * // Delete one TrackingEvent
     * const TrackingEvent = await prisma.trackingEvent.delete({
     *   where: {
     *     // ... filter to delete one TrackingEvent
     *   }
     * })
     * 
     */
    delete<T extends TrackingEventDeleteArgs>(args: SelectSubset<T, TrackingEventDeleteArgs<ExtArgs>>): Prisma__TrackingEventClient<$Result.GetResult<Prisma.$TrackingEventPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TrackingEvent.
     * @param {TrackingEventUpdateArgs} args - Arguments to update one TrackingEvent.
     * @example
     * // Update one TrackingEvent
     * const trackingEvent = await prisma.trackingEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrackingEventUpdateArgs>(args: SelectSubset<T, TrackingEventUpdateArgs<ExtArgs>>): Prisma__TrackingEventClient<$Result.GetResult<Prisma.$TrackingEventPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TrackingEvents.
     * @param {TrackingEventDeleteManyArgs} args - Arguments to filter TrackingEvents to delete.
     * @example
     * // Delete a few TrackingEvents
     * const { count } = await prisma.trackingEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrackingEventDeleteManyArgs>(args?: SelectSubset<T, TrackingEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackingEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrackingEvents
     * const trackingEvent = await prisma.trackingEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrackingEventUpdateManyArgs>(args: SelectSubset<T, TrackingEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackingEvents and returns the data updated in the database.
     * @param {TrackingEventUpdateManyAndReturnArgs} args - Arguments to update many TrackingEvents.
     * @example
     * // Update many TrackingEvents
     * const trackingEvent = await prisma.trackingEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrackingEvents and only return the `id`
     * const trackingEventWithIdOnly = await prisma.trackingEvent.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TrackingEventUpdateManyAndReturnArgs>(args: SelectSubset<T, TrackingEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingEventPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one TrackingEvent.
     * @param {TrackingEventUpsertArgs} args - Arguments to update or create a TrackingEvent.
     * @example
     * // Update or create a TrackingEvent
     * const trackingEvent = await prisma.trackingEvent.upsert({
     *   create: {
     *     // ... data to create a TrackingEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrackingEvent we want to update
     *   }
     * })
     */
    upsert<T extends TrackingEventUpsertArgs>(args: SelectSubset<T, TrackingEventUpsertArgs<ExtArgs>>): Prisma__TrackingEventClient<$Result.GetResult<Prisma.$TrackingEventPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of TrackingEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingEventCountArgs} args - Arguments to filter TrackingEvents to count.
     * @example
     * // Count the number of TrackingEvents
     * const count = await prisma.trackingEvent.count({
     *   where: {
     *     // ... the filter for the TrackingEvents we want to count
     *   }
     * })
    **/
    count<T extends TrackingEventCountArgs>(
      args?: Subset<T, TrackingEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackingEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrackingEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrackingEventAggregateArgs>(args: Subset<T, TrackingEventAggregateArgs>): Prisma.PrismaPromise<GetTrackingEventAggregateType<T>>

    /**
     * Group by TrackingEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingEventGroupByArgs} args - Group by arguments.
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
      T extends TrackingEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackingEventGroupByArgs['orderBy'] }
        : { orderBy?: TrackingEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrackingEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackingEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrackingEvent model
   */
  readonly fields: TrackingEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrackingEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackingEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends TrackingOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrackingOrderDefaultArgs<ExtArgs>>): Prisma__TrackingOrderClient<$Result.GetResult<Prisma.$TrackingOrderPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the TrackingEvent model
   */ 
  interface TrackingEventFieldRefs {
    readonly id: FieldRef<"TrackingEvent", 'String'>
    readonly orderId: FieldRef<"TrackingEvent", 'String'>
    readonly timestamp: FieldRef<"TrackingEvent", 'DateTime'>
    readonly status: FieldRef<"TrackingEvent", 'String'>
    readonly title: FieldRef<"TrackingEvent", 'String'>
    readonly description: FieldRef<"TrackingEvent", 'String'>
    readonly location: FieldRef<"TrackingEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TrackingEvent findUnique
   */
  export type TrackingEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingEvent
     */
    select?: TrackingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingEvent
     */
    omit?: TrackingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingEventInclude<ExtArgs> | null
    /**
     * Filter, which TrackingEvent to fetch.
     */
    where: TrackingEventWhereUniqueInput
  }

  /**
   * TrackingEvent findUniqueOrThrow
   */
  export type TrackingEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingEvent
     */
    select?: TrackingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingEvent
     */
    omit?: TrackingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingEventInclude<ExtArgs> | null
    /**
     * Filter, which TrackingEvent to fetch.
     */
    where: TrackingEventWhereUniqueInput
  }

  /**
   * TrackingEvent findFirst
   */
  export type TrackingEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingEvent
     */
    select?: TrackingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingEvent
     */
    omit?: TrackingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingEventInclude<ExtArgs> | null
    /**
     * Filter, which TrackingEvent to fetch.
     */
    where?: TrackingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingEvents to fetch.
     */
    orderBy?: TrackingEventOrderByWithRelationInput | TrackingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackingEvents.
     */
    cursor?: TrackingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackingEvents.
     */
    distinct?: TrackingEventScalarFieldEnum | TrackingEventScalarFieldEnum[]
  }

  /**
   * TrackingEvent findFirstOrThrow
   */
  export type TrackingEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingEvent
     */
    select?: TrackingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingEvent
     */
    omit?: TrackingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingEventInclude<ExtArgs> | null
    /**
     * Filter, which TrackingEvent to fetch.
     */
    where?: TrackingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingEvents to fetch.
     */
    orderBy?: TrackingEventOrderByWithRelationInput | TrackingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackingEvents.
     */
    cursor?: TrackingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackingEvents.
     */
    distinct?: TrackingEventScalarFieldEnum | TrackingEventScalarFieldEnum[]
  }

  /**
   * TrackingEvent findMany
   */
  export type TrackingEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingEvent
     */
    select?: TrackingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingEvent
     */
    omit?: TrackingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingEventInclude<ExtArgs> | null
    /**
     * Filter, which TrackingEvents to fetch.
     */
    where?: TrackingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingEvents to fetch.
     */
    orderBy?: TrackingEventOrderByWithRelationInput | TrackingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrackingEvents.
     */
    cursor?: TrackingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingEvents.
     */
    skip?: number
    distinct?: TrackingEventScalarFieldEnum | TrackingEventScalarFieldEnum[]
  }

  /**
   * TrackingEvent create
   */
  export type TrackingEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingEvent
     */
    select?: TrackingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingEvent
     */
    omit?: TrackingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingEventInclude<ExtArgs> | null
    /**
     * The data needed to create a TrackingEvent.
     */
    data: XOR<TrackingEventCreateInput, TrackingEventUncheckedCreateInput>
  }

  /**
   * TrackingEvent createMany
   */
  export type TrackingEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrackingEvents.
     */
    data: TrackingEventCreateManyInput | TrackingEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrackingEvent createManyAndReturn
   */
  export type TrackingEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingEvent
     */
    select?: TrackingEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingEvent
     */
    omit?: TrackingEventOmit<ExtArgs> | null
    /**
     * The data used to create many TrackingEvents.
     */
    data: TrackingEventCreateManyInput | TrackingEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrackingEvent update
   */
  export type TrackingEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingEvent
     */
    select?: TrackingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingEvent
     */
    omit?: TrackingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingEventInclude<ExtArgs> | null
    /**
     * The data needed to update a TrackingEvent.
     */
    data: XOR<TrackingEventUpdateInput, TrackingEventUncheckedUpdateInput>
    /**
     * Choose, which TrackingEvent to update.
     */
    where: TrackingEventWhereUniqueInput
  }

  /**
   * TrackingEvent updateMany
   */
  export type TrackingEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrackingEvents.
     */
    data: XOR<TrackingEventUpdateManyMutationInput, TrackingEventUncheckedUpdateManyInput>
    /**
     * Filter which TrackingEvents to update
     */
    where?: TrackingEventWhereInput
    /**
     * Limit how many TrackingEvents to update.
     */
    limit?: number
  }

  /**
   * TrackingEvent updateManyAndReturn
   */
  export type TrackingEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingEvent
     */
    select?: TrackingEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingEvent
     */
    omit?: TrackingEventOmit<ExtArgs> | null
    /**
     * The data used to update TrackingEvents.
     */
    data: XOR<TrackingEventUpdateManyMutationInput, TrackingEventUncheckedUpdateManyInput>
    /**
     * Filter which TrackingEvents to update
     */
    where?: TrackingEventWhereInput
    /**
     * Limit how many TrackingEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrackingEvent upsert
   */
  export type TrackingEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingEvent
     */
    select?: TrackingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingEvent
     */
    omit?: TrackingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingEventInclude<ExtArgs> | null
    /**
     * The filter to search for the TrackingEvent to update in case it exists.
     */
    where: TrackingEventWhereUniqueInput
    /**
     * In case the TrackingEvent found by the `where` argument doesn't exist, create a new TrackingEvent with this data.
     */
    create: XOR<TrackingEventCreateInput, TrackingEventUncheckedCreateInput>
    /**
     * In case the TrackingEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackingEventUpdateInput, TrackingEventUncheckedUpdateInput>
  }

  /**
   * TrackingEvent delete
   */
  export type TrackingEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingEvent
     */
    select?: TrackingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingEvent
     */
    omit?: TrackingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingEventInclude<ExtArgs> | null
    /**
     * Filter which TrackingEvent to delete.
     */
    where: TrackingEventWhereUniqueInput
  }

  /**
   * TrackingEvent deleteMany
   */
  export type TrackingEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackingEvents to delete
     */
    where?: TrackingEventWhereInput
    /**
     * Limit how many TrackingEvents to delete.
     */
    limit?: number
  }

  /**
   * TrackingEvent without action
   */
  export type TrackingEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingEvent
     */
    select?: TrackingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingEvent
     */
    omit?: TrackingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingEventInclude<ExtArgs> | null
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


  export const QuoteRequestScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    firstName: 'firstName',
    lastName: 'lastName',
    company: 'company',
    phone: 'phone',
    email: 'email',
    region: 'region',
    city: 'city',
    serviceType: 'serviceType',
    vehicleType: 'vehicleType',
    estimatedVolume: 'estimatedVolume',
    frequency: 'frequency',
    origin: 'origin',
    destination: 'destination',
    description: 'description',
    status: 'status',
    notes: 'notes'
  };

  export type QuoteRequestScalarFieldEnum = (typeof QuoteRequestScalarFieldEnum)[keyof typeof QuoteRequestScalarFieldEnum]


  export const ContactMessageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    email: 'email',
    phone: 'phone',
    subject: 'subject',
    message: 'message',
    status: 'status'
  };

  export type ContactMessageScalarFieldEnum = (typeof ContactMessageScalarFieldEnum)[keyof typeof ContactMessageScalarFieldEnum]


  export const JobApplicationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    position: 'position',
    experience: 'experience',
    licenseType: 'licenseType',
    cvUrl: 'cvUrl',
    message: 'message',
    status: 'status'
  };

  export type JobApplicationScalarFieldEnum = (typeof JobApplicationScalarFieldEnum)[keyof typeof JobApplicationScalarFieldEnum]


  export const TrackingOrderScalarFieldEnum: {
    id: 'id',
    trackingCode: 'trackingCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clientName: 'clientName',
    senderCompany: 'senderCompany',
    recipientName: 'recipientName',
    origin: 'origin',
    destination: 'destination',
    serviceType: 'serviceType',
    currentStatus: 'currentStatus',
    currentLocation: 'currentLocation',
    estimatedDelivery: 'estimatedDelivery',
    deliveredAt: 'deliveredAt'
  };

  export type TrackingOrderScalarFieldEnum = (typeof TrackingOrderScalarFieldEnum)[keyof typeof TrackingOrderScalarFieldEnum]


  export const TrackingEventScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    timestamp: 'timestamp',
    status: 'status',
    title: 'title',
    description: 'description',
    location: 'location'
  };

  export type TrackingEventScalarFieldEnum = (typeof TrackingEventScalarFieldEnum)[keyof typeof TrackingEventScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type QuoteRequestWhereInput = {
    AND?: QuoteRequestWhereInput | QuoteRequestWhereInput[]
    OR?: QuoteRequestWhereInput[]
    NOT?: QuoteRequestWhereInput | QuoteRequestWhereInput[]
    id?: StringFilter<"QuoteRequest"> | string
    createdAt?: DateTimeFilter<"QuoteRequest"> | Date | string
    updatedAt?: DateTimeFilter<"QuoteRequest"> | Date | string
    firstName?: StringFilter<"QuoteRequest"> | string
    lastName?: StringFilter<"QuoteRequest"> | string
    company?: StringNullableFilter<"QuoteRequest"> | string | null
    phone?: StringFilter<"QuoteRequest"> | string
    email?: StringFilter<"QuoteRequest"> | string
    region?: StringFilter<"QuoteRequest"> | string
    city?: StringFilter<"QuoteRequest"> | string
    serviceType?: StringFilter<"QuoteRequest"> | string
    vehicleType?: StringFilter<"QuoteRequest"> | string
    estimatedVolume?: StringNullableFilter<"QuoteRequest"> | string | null
    frequency?: StringFilter<"QuoteRequest"> | string
    origin?: StringFilter<"QuoteRequest"> | string
    destination?: StringFilter<"QuoteRequest"> | string
    description?: StringFilter<"QuoteRequest"> | string
    status?: StringFilter<"QuoteRequest"> | string
    notes?: StringNullableFilter<"QuoteRequest"> | string | null
  }

  export type QuoteRequestOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    company?: SortOrderInput | SortOrder
    phone?: SortOrder
    email?: SortOrder
    region?: SortOrder
    city?: SortOrder
    serviceType?: SortOrder
    vehicleType?: SortOrder
    estimatedVolume?: SortOrderInput | SortOrder
    frequency?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    description?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
  }

  export type QuoteRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuoteRequestWhereInput | QuoteRequestWhereInput[]
    OR?: QuoteRequestWhereInput[]
    NOT?: QuoteRequestWhereInput | QuoteRequestWhereInput[]
    createdAt?: DateTimeFilter<"QuoteRequest"> | Date | string
    updatedAt?: DateTimeFilter<"QuoteRequest"> | Date | string
    firstName?: StringFilter<"QuoteRequest"> | string
    lastName?: StringFilter<"QuoteRequest"> | string
    company?: StringNullableFilter<"QuoteRequest"> | string | null
    phone?: StringFilter<"QuoteRequest"> | string
    email?: StringFilter<"QuoteRequest"> | string
    region?: StringFilter<"QuoteRequest"> | string
    city?: StringFilter<"QuoteRequest"> | string
    serviceType?: StringFilter<"QuoteRequest"> | string
    vehicleType?: StringFilter<"QuoteRequest"> | string
    estimatedVolume?: StringNullableFilter<"QuoteRequest"> | string | null
    frequency?: StringFilter<"QuoteRequest"> | string
    origin?: StringFilter<"QuoteRequest"> | string
    destination?: StringFilter<"QuoteRequest"> | string
    description?: StringFilter<"QuoteRequest"> | string
    status?: StringFilter<"QuoteRequest"> | string
    notes?: StringNullableFilter<"QuoteRequest"> | string | null
  }, "id">

  export type QuoteRequestOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    company?: SortOrderInput | SortOrder
    phone?: SortOrder
    email?: SortOrder
    region?: SortOrder
    city?: SortOrder
    serviceType?: SortOrder
    vehicleType?: SortOrder
    estimatedVolume?: SortOrderInput | SortOrder
    frequency?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    description?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: QuoteRequestCountOrderByAggregateInput
    _max?: QuoteRequestMaxOrderByAggregateInput
    _min?: QuoteRequestMinOrderByAggregateInput
  }

  export type QuoteRequestScalarWhereWithAggregatesInput = {
    AND?: QuoteRequestScalarWhereWithAggregatesInput | QuoteRequestScalarWhereWithAggregatesInput[]
    OR?: QuoteRequestScalarWhereWithAggregatesInput[]
    NOT?: QuoteRequestScalarWhereWithAggregatesInput | QuoteRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuoteRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"QuoteRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuoteRequest"> | Date | string
    firstName?: StringWithAggregatesFilter<"QuoteRequest"> | string
    lastName?: StringWithAggregatesFilter<"QuoteRequest"> | string
    company?: StringNullableWithAggregatesFilter<"QuoteRequest"> | string | null
    phone?: StringWithAggregatesFilter<"QuoteRequest"> | string
    email?: StringWithAggregatesFilter<"QuoteRequest"> | string
    region?: StringWithAggregatesFilter<"QuoteRequest"> | string
    city?: StringWithAggregatesFilter<"QuoteRequest"> | string
    serviceType?: StringWithAggregatesFilter<"QuoteRequest"> | string
    vehicleType?: StringWithAggregatesFilter<"QuoteRequest"> | string
    estimatedVolume?: StringNullableWithAggregatesFilter<"QuoteRequest"> | string | null
    frequency?: StringWithAggregatesFilter<"QuoteRequest"> | string
    origin?: StringWithAggregatesFilter<"QuoteRequest"> | string
    destination?: StringWithAggregatesFilter<"QuoteRequest"> | string
    description?: StringWithAggregatesFilter<"QuoteRequest"> | string
    status?: StringWithAggregatesFilter<"QuoteRequest"> | string
    notes?: StringNullableWithAggregatesFilter<"QuoteRequest"> | string | null
  }

  export type ContactMessageWhereInput = {
    AND?: ContactMessageWhereInput | ContactMessageWhereInput[]
    OR?: ContactMessageWhereInput[]
    NOT?: ContactMessageWhereInput | ContactMessageWhereInput[]
    id?: StringFilter<"ContactMessage"> | string
    createdAt?: DateTimeFilter<"ContactMessage"> | Date | string
    name?: StringFilter<"ContactMessage"> | string
    email?: StringFilter<"ContactMessage"> | string
    phone?: StringNullableFilter<"ContactMessage"> | string | null
    subject?: StringFilter<"ContactMessage"> | string
    message?: StringFilter<"ContactMessage"> | string
    status?: StringFilter<"ContactMessage"> | string
  }

  export type ContactMessageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type ContactMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactMessageWhereInput | ContactMessageWhereInput[]
    OR?: ContactMessageWhereInput[]
    NOT?: ContactMessageWhereInput | ContactMessageWhereInput[]
    createdAt?: DateTimeFilter<"ContactMessage"> | Date | string
    name?: StringFilter<"ContactMessage"> | string
    email?: StringFilter<"ContactMessage"> | string
    phone?: StringNullableFilter<"ContactMessage"> | string | null
    subject?: StringFilter<"ContactMessage"> | string
    message?: StringFilter<"ContactMessage"> | string
    status?: StringFilter<"ContactMessage"> | string
  }, "id">

  export type ContactMessageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    _count?: ContactMessageCountOrderByAggregateInput
    _max?: ContactMessageMaxOrderByAggregateInput
    _min?: ContactMessageMinOrderByAggregateInput
  }

  export type ContactMessageScalarWhereWithAggregatesInput = {
    AND?: ContactMessageScalarWhereWithAggregatesInput | ContactMessageScalarWhereWithAggregatesInput[]
    OR?: ContactMessageScalarWhereWithAggregatesInput[]
    NOT?: ContactMessageScalarWhereWithAggregatesInput | ContactMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContactMessage"> | Date | string
    name?: StringWithAggregatesFilter<"ContactMessage"> | string
    email?: StringWithAggregatesFilter<"ContactMessage"> | string
    phone?: StringNullableWithAggregatesFilter<"ContactMessage"> | string | null
    subject?: StringWithAggregatesFilter<"ContactMessage"> | string
    message?: StringWithAggregatesFilter<"ContactMessage"> | string
    status?: StringWithAggregatesFilter<"ContactMessage"> | string
  }

  export type JobApplicationWhereInput = {
    AND?: JobApplicationWhereInput | JobApplicationWhereInput[]
    OR?: JobApplicationWhereInput[]
    NOT?: JobApplicationWhereInput | JobApplicationWhereInput[]
    id?: StringFilter<"JobApplication"> | string
    createdAt?: DateTimeFilter<"JobApplication"> | Date | string
    firstName?: StringFilter<"JobApplication"> | string
    lastName?: StringFilter<"JobApplication"> | string
    email?: StringFilter<"JobApplication"> | string
    phone?: StringFilter<"JobApplication"> | string
    position?: StringFilter<"JobApplication"> | string
    experience?: StringNullableFilter<"JobApplication"> | string | null
    licenseType?: StringNullableFilter<"JobApplication"> | string | null
    cvUrl?: StringNullableFilter<"JobApplication"> | string | null
    message?: StringNullableFilter<"JobApplication"> | string | null
    status?: StringFilter<"JobApplication"> | string
  }

  export type JobApplicationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    position?: SortOrder
    experience?: SortOrderInput | SortOrder
    licenseType?: SortOrderInput | SortOrder
    cvUrl?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
  }

  export type JobApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobApplicationWhereInput | JobApplicationWhereInput[]
    OR?: JobApplicationWhereInput[]
    NOT?: JobApplicationWhereInput | JobApplicationWhereInput[]
    createdAt?: DateTimeFilter<"JobApplication"> | Date | string
    firstName?: StringFilter<"JobApplication"> | string
    lastName?: StringFilter<"JobApplication"> | string
    email?: StringFilter<"JobApplication"> | string
    phone?: StringFilter<"JobApplication"> | string
    position?: StringFilter<"JobApplication"> | string
    experience?: StringNullableFilter<"JobApplication"> | string | null
    licenseType?: StringNullableFilter<"JobApplication"> | string | null
    cvUrl?: StringNullableFilter<"JobApplication"> | string | null
    message?: StringNullableFilter<"JobApplication"> | string | null
    status?: StringFilter<"JobApplication"> | string
  }, "id">

  export type JobApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    position?: SortOrder
    experience?: SortOrderInput | SortOrder
    licenseType?: SortOrderInput | SortOrder
    cvUrl?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: JobApplicationCountOrderByAggregateInput
    _max?: JobApplicationMaxOrderByAggregateInput
    _min?: JobApplicationMinOrderByAggregateInput
  }

  export type JobApplicationScalarWhereWithAggregatesInput = {
    AND?: JobApplicationScalarWhereWithAggregatesInput | JobApplicationScalarWhereWithAggregatesInput[]
    OR?: JobApplicationScalarWhereWithAggregatesInput[]
    NOT?: JobApplicationScalarWhereWithAggregatesInput | JobApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobApplication"> | string
    createdAt?: DateTimeWithAggregatesFilter<"JobApplication"> | Date | string
    firstName?: StringWithAggregatesFilter<"JobApplication"> | string
    lastName?: StringWithAggregatesFilter<"JobApplication"> | string
    email?: StringWithAggregatesFilter<"JobApplication"> | string
    phone?: StringWithAggregatesFilter<"JobApplication"> | string
    position?: StringWithAggregatesFilter<"JobApplication"> | string
    experience?: StringNullableWithAggregatesFilter<"JobApplication"> | string | null
    licenseType?: StringNullableWithAggregatesFilter<"JobApplication"> | string | null
    cvUrl?: StringNullableWithAggregatesFilter<"JobApplication"> | string | null
    message?: StringNullableWithAggregatesFilter<"JobApplication"> | string | null
    status?: StringWithAggregatesFilter<"JobApplication"> | string
  }

  export type TrackingOrderWhereInput = {
    AND?: TrackingOrderWhereInput | TrackingOrderWhereInput[]
    OR?: TrackingOrderWhereInput[]
    NOT?: TrackingOrderWhereInput | TrackingOrderWhereInput[]
    id?: StringFilter<"TrackingOrder"> | string
    trackingCode?: StringFilter<"TrackingOrder"> | string
    createdAt?: DateTimeFilter<"TrackingOrder"> | Date | string
    updatedAt?: DateTimeFilter<"TrackingOrder"> | Date | string
    clientName?: StringFilter<"TrackingOrder"> | string
    senderCompany?: StringFilter<"TrackingOrder"> | string
    recipientName?: StringFilter<"TrackingOrder"> | string
    origin?: StringFilter<"TrackingOrder"> | string
    destination?: StringFilter<"TrackingOrder"> | string
    serviceType?: StringFilter<"TrackingOrder"> | string
    currentStatus?: StringFilter<"TrackingOrder"> | string
    currentLocation?: StringNullableFilter<"TrackingOrder"> | string | null
    estimatedDelivery?: DateTimeNullableFilter<"TrackingOrder"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"TrackingOrder"> | Date | string | null
    events?: TrackingEventListRelationFilter
  }

  export type TrackingOrderOrderByWithRelationInput = {
    id?: SortOrder
    trackingCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientName?: SortOrder
    senderCompany?: SortOrder
    recipientName?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    serviceType?: SortOrder
    currentStatus?: SortOrder
    currentLocation?: SortOrderInput | SortOrder
    estimatedDelivery?: SortOrderInput | SortOrder
    deliveredAt?: SortOrderInput | SortOrder
    events?: TrackingEventOrderByRelationAggregateInput
  }

  export type TrackingOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    trackingCode?: string
    AND?: TrackingOrderWhereInput | TrackingOrderWhereInput[]
    OR?: TrackingOrderWhereInput[]
    NOT?: TrackingOrderWhereInput | TrackingOrderWhereInput[]
    createdAt?: DateTimeFilter<"TrackingOrder"> | Date | string
    updatedAt?: DateTimeFilter<"TrackingOrder"> | Date | string
    clientName?: StringFilter<"TrackingOrder"> | string
    senderCompany?: StringFilter<"TrackingOrder"> | string
    recipientName?: StringFilter<"TrackingOrder"> | string
    origin?: StringFilter<"TrackingOrder"> | string
    destination?: StringFilter<"TrackingOrder"> | string
    serviceType?: StringFilter<"TrackingOrder"> | string
    currentStatus?: StringFilter<"TrackingOrder"> | string
    currentLocation?: StringNullableFilter<"TrackingOrder"> | string | null
    estimatedDelivery?: DateTimeNullableFilter<"TrackingOrder"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"TrackingOrder"> | Date | string | null
    events?: TrackingEventListRelationFilter
  }, "id" | "trackingCode">

  export type TrackingOrderOrderByWithAggregationInput = {
    id?: SortOrder
    trackingCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientName?: SortOrder
    senderCompany?: SortOrder
    recipientName?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    serviceType?: SortOrder
    currentStatus?: SortOrder
    currentLocation?: SortOrderInput | SortOrder
    estimatedDelivery?: SortOrderInput | SortOrder
    deliveredAt?: SortOrderInput | SortOrder
    _count?: TrackingOrderCountOrderByAggregateInput
    _max?: TrackingOrderMaxOrderByAggregateInput
    _min?: TrackingOrderMinOrderByAggregateInput
  }

  export type TrackingOrderScalarWhereWithAggregatesInput = {
    AND?: TrackingOrderScalarWhereWithAggregatesInput | TrackingOrderScalarWhereWithAggregatesInput[]
    OR?: TrackingOrderScalarWhereWithAggregatesInput[]
    NOT?: TrackingOrderScalarWhereWithAggregatesInput | TrackingOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrackingOrder"> | string
    trackingCode?: StringWithAggregatesFilter<"TrackingOrder"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TrackingOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TrackingOrder"> | Date | string
    clientName?: StringWithAggregatesFilter<"TrackingOrder"> | string
    senderCompany?: StringWithAggregatesFilter<"TrackingOrder"> | string
    recipientName?: StringWithAggregatesFilter<"TrackingOrder"> | string
    origin?: StringWithAggregatesFilter<"TrackingOrder"> | string
    destination?: StringWithAggregatesFilter<"TrackingOrder"> | string
    serviceType?: StringWithAggregatesFilter<"TrackingOrder"> | string
    currentStatus?: StringWithAggregatesFilter<"TrackingOrder"> | string
    currentLocation?: StringNullableWithAggregatesFilter<"TrackingOrder"> | string | null
    estimatedDelivery?: DateTimeNullableWithAggregatesFilter<"TrackingOrder"> | Date | string | null
    deliveredAt?: DateTimeNullableWithAggregatesFilter<"TrackingOrder"> | Date | string | null
  }

  export type TrackingEventWhereInput = {
    AND?: TrackingEventWhereInput | TrackingEventWhereInput[]
    OR?: TrackingEventWhereInput[]
    NOT?: TrackingEventWhereInput | TrackingEventWhereInput[]
    id?: StringFilter<"TrackingEvent"> | string
    orderId?: StringFilter<"TrackingEvent"> | string
    timestamp?: DateTimeFilter<"TrackingEvent"> | Date | string
    status?: StringFilter<"TrackingEvent"> | string
    title?: StringFilter<"TrackingEvent"> | string
    description?: StringFilter<"TrackingEvent"> | string
    location?: StringFilter<"TrackingEvent"> | string
    order?: XOR<TrackingOrderScalarRelationFilter, TrackingOrderWhereInput>
  }

  export type TrackingEventOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    order?: TrackingOrderOrderByWithRelationInput
  }

  export type TrackingEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrackingEventWhereInput | TrackingEventWhereInput[]
    OR?: TrackingEventWhereInput[]
    NOT?: TrackingEventWhereInput | TrackingEventWhereInput[]
    orderId?: StringFilter<"TrackingEvent"> | string
    timestamp?: DateTimeFilter<"TrackingEvent"> | Date | string
    status?: StringFilter<"TrackingEvent"> | string
    title?: StringFilter<"TrackingEvent"> | string
    description?: StringFilter<"TrackingEvent"> | string
    location?: StringFilter<"TrackingEvent"> | string
    order?: XOR<TrackingOrderScalarRelationFilter, TrackingOrderWhereInput>
  }, "id">

  export type TrackingEventOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    _count?: TrackingEventCountOrderByAggregateInput
    _max?: TrackingEventMaxOrderByAggregateInput
    _min?: TrackingEventMinOrderByAggregateInput
  }

  export type TrackingEventScalarWhereWithAggregatesInput = {
    AND?: TrackingEventScalarWhereWithAggregatesInput | TrackingEventScalarWhereWithAggregatesInput[]
    OR?: TrackingEventScalarWhereWithAggregatesInput[]
    NOT?: TrackingEventScalarWhereWithAggregatesInput | TrackingEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrackingEvent"> | string
    orderId?: StringWithAggregatesFilter<"TrackingEvent"> | string
    timestamp?: DateTimeWithAggregatesFilter<"TrackingEvent"> | Date | string
    status?: StringWithAggregatesFilter<"TrackingEvent"> | string
    title?: StringWithAggregatesFilter<"TrackingEvent"> | string
    description?: StringWithAggregatesFilter<"TrackingEvent"> | string
    location?: StringWithAggregatesFilter<"TrackingEvent"> | string
  }

  export type QuoteRequestCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    company?: string | null
    phone: string
    email: string
    region: string
    city: string
    serviceType: string
    vehicleType: string
    estimatedVolume?: string | null
    frequency: string
    origin: string
    destination: string
    description: string
    status?: string
    notes?: string | null
  }

  export type QuoteRequestUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    company?: string | null
    phone: string
    email: string
    region: string
    city: string
    serviceType: string
    vehicleType: string
    estimatedVolume?: string | null
    frequency: string
    origin: string
    destination: string
    description: string
    status?: string
    notes?: string | null
  }

  export type QuoteRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    estimatedVolume?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuoteRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    estimatedVolume?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuoteRequestCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    company?: string | null
    phone: string
    email: string
    region: string
    city: string
    serviceType: string
    vehicleType: string
    estimatedVolume?: string | null
    frequency: string
    origin: string
    destination: string
    description: string
    status?: string
    notes?: string | null
  }

  export type QuoteRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    estimatedVolume?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuoteRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    estimatedVolume?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactMessageCreateInput = {
    id?: string
    createdAt?: Date | string
    name: string
    email: string
    phone?: string | null
    subject: string
    message: string
    status?: string
  }

  export type ContactMessageUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    name: string
    email: string
    phone?: string | null
    subject: string
    message: string
    status?: string
  }

  export type ContactMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ContactMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ContactMessageCreateManyInput = {
    id?: string
    createdAt?: Date | string
    name: string
    email: string
    phone?: string | null
    subject: string
    message: string
    status?: string
  }

  export type ContactMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ContactMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type JobApplicationCreateInput = {
    id?: string
    createdAt?: Date | string
    firstName: string
    lastName: string
    email: string
    phone: string
    position: string
    experience?: string | null
    licenseType?: string | null
    cvUrl?: string | null
    message?: string | null
    status?: string
  }

  export type JobApplicationUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    firstName: string
    lastName: string
    email: string
    phone: string
    position: string
    experience?: string | null
    licenseType?: string | null
    cvUrl?: string | null
    message?: string | null
    status?: string
  }

  export type JobApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    licenseType?: NullableStringFieldUpdateOperationsInput | string | null
    cvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type JobApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    licenseType?: NullableStringFieldUpdateOperationsInput | string | null
    cvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type JobApplicationCreateManyInput = {
    id?: string
    createdAt?: Date | string
    firstName: string
    lastName: string
    email: string
    phone: string
    position: string
    experience?: string | null
    licenseType?: string | null
    cvUrl?: string | null
    message?: string | null
    status?: string
  }

  export type JobApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    licenseType?: NullableStringFieldUpdateOperationsInput | string | null
    cvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type JobApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    licenseType?: NullableStringFieldUpdateOperationsInput | string | null
    cvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TrackingOrderCreateInput = {
    id?: string
    trackingCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientName: string
    senderCompany: string
    recipientName: string
    origin: string
    destination: string
    serviceType: string
    currentStatus: string
    currentLocation?: string | null
    estimatedDelivery?: Date | string | null
    deliveredAt?: Date | string | null
    events?: TrackingEventCreateNestedManyWithoutOrderInput
  }

  export type TrackingOrderUncheckedCreateInput = {
    id?: string
    trackingCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientName: string
    senderCompany: string
    recipientName: string
    origin: string
    destination: string
    serviceType: string
    currentStatus: string
    currentLocation?: string | null
    estimatedDelivery?: Date | string | null
    deliveredAt?: Date | string | null
    events?: TrackingEventUncheckedCreateNestedManyWithoutOrderInput
  }

  export type TrackingOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientName?: StringFieldUpdateOperationsInput | string
    senderCompany?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    currentStatus?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    events?: TrackingEventUpdateManyWithoutOrderNestedInput
  }

  export type TrackingOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientName?: StringFieldUpdateOperationsInput | string
    senderCompany?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    currentStatus?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    events?: TrackingEventUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type TrackingOrderCreateManyInput = {
    id?: string
    trackingCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientName: string
    senderCompany: string
    recipientName: string
    origin: string
    destination: string
    serviceType: string
    currentStatus: string
    currentLocation?: string | null
    estimatedDelivery?: Date | string | null
    deliveredAt?: Date | string | null
  }

  export type TrackingOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientName?: StringFieldUpdateOperationsInput | string
    senderCompany?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    currentStatus?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TrackingOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientName?: StringFieldUpdateOperationsInput | string
    senderCompany?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    currentStatus?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TrackingEventCreateInput = {
    id?: string
    timestamp?: Date | string
    status: string
    title: string
    description: string
    location: string
    order: TrackingOrderCreateNestedOneWithoutEventsInput
  }

  export type TrackingEventUncheckedCreateInput = {
    id?: string
    orderId: string
    timestamp?: Date | string
    status: string
    title: string
    description: string
    location: string
  }

  export type TrackingEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    order?: TrackingOrderUpdateOneRequiredWithoutEventsNestedInput
  }

  export type TrackingEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type TrackingEventCreateManyInput = {
    id?: string
    orderId: string
    timestamp?: Date | string
    status: string
    title: string
    description: string
    location: string
  }

  export type TrackingEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type TrackingEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QuoteRequestCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    company?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    region?: SortOrder
    city?: SortOrder
    serviceType?: SortOrder
    vehicleType?: SortOrder
    estimatedVolume?: SortOrder
    frequency?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    description?: SortOrder
    status?: SortOrder
    notes?: SortOrder
  }

  export type QuoteRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    company?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    region?: SortOrder
    city?: SortOrder
    serviceType?: SortOrder
    vehicleType?: SortOrder
    estimatedVolume?: SortOrder
    frequency?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    description?: SortOrder
    status?: SortOrder
    notes?: SortOrder
  }

  export type QuoteRequestMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    company?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    region?: SortOrder
    city?: SortOrder
    serviceType?: SortOrder
    vehicleType?: SortOrder
    estimatedVolume?: SortOrder
    frequency?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    description?: SortOrder
    status?: SortOrder
    notes?: SortOrder
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

  export type ContactMessageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type ContactMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type ContactMessageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type JobApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    position?: SortOrder
    experience?: SortOrder
    licenseType?: SortOrder
    cvUrl?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type JobApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    position?: SortOrder
    experience?: SortOrder
    licenseType?: SortOrder
    cvUrl?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type JobApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    position?: SortOrder
    experience?: SortOrder
    licenseType?: SortOrder
    cvUrl?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TrackingEventListRelationFilter = {
    every?: TrackingEventWhereInput
    some?: TrackingEventWhereInput
    none?: TrackingEventWhereInput
  }

  export type TrackingEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrackingOrderCountOrderByAggregateInput = {
    id?: SortOrder
    trackingCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientName?: SortOrder
    senderCompany?: SortOrder
    recipientName?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    serviceType?: SortOrder
    currentStatus?: SortOrder
    currentLocation?: SortOrder
    estimatedDelivery?: SortOrder
    deliveredAt?: SortOrder
  }

  export type TrackingOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    trackingCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientName?: SortOrder
    senderCompany?: SortOrder
    recipientName?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    serviceType?: SortOrder
    currentStatus?: SortOrder
    currentLocation?: SortOrder
    estimatedDelivery?: SortOrder
    deliveredAt?: SortOrder
  }

  export type TrackingOrderMinOrderByAggregateInput = {
    id?: SortOrder
    trackingCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientName?: SortOrder
    senderCompany?: SortOrder
    recipientName?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    serviceType?: SortOrder
    currentStatus?: SortOrder
    currentLocation?: SortOrder
    estimatedDelivery?: SortOrder
    deliveredAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TrackingOrderScalarRelationFilter = {
    is?: TrackingOrderWhereInput
    isNot?: TrackingOrderWhereInput
  }

  export type TrackingEventCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
  }

  export type TrackingEventMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
  }

  export type TrackingEventMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TrackingEventCreateNestedManyWithoutOrderInput = {
    create?: XOR<TrackingEventCreateWithoutOrderInput, TrackingEventUncheckedCreateWithoutOrderInput> | TrackingEventCreateWithoutOrderInput[] | TrackingEventUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TrackingEventCreateOrConnectWithoutOrderInput | TrackingEventCreateOrConnectWithoutOrderInput[]
    createMany?: TrackingEventCreateManyOrderInputEnvelope
    connect?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
  }

  export type TrackingEventUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<TrackingEventCreateWithoutOrderInput, TrackingEventUncheckedCreateWithoutOrderInput> | TrackingEventCreateWithoutOrderInput[] | TrackingEventUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TrackingEventCreateOrConnectWithoutOrderInput | TrackingEventCreateOrConnectWithoutOrderInput[]
    createMany?: TrackingEventCreateManyOrderInputEnvelope
    connect?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TrackingEventUpdateManyWithoutOrderNestedInput = {
    create?: XOR<TrackingEventCreateWithoutOrderInput, TrackingEventUncheckedCreateWithoutOrderInput> | TrackingEventCreateWithoutOrderInput[] | TrackingEventUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TrackingEventCreateOrConnectWithoutOrderInput | TrackingEventCreateOrConnectWithoutOrderInput[]
    upsert?: TrackingEventUpsertWithWhereUniqueWithoutOrderInput | TrackingEventUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: TrackingEventCreateManyOrderInputEnvelope
    set?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
    disconnect?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
    delete?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
    connect?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
    update?: TrackingEventUpdateWithWhereUniqueWithoutOrderInput | TrackingEventUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: TrackingEventUpdateManyWithWhereWithoutOrderInput | TrackingEventUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: TrackingEventScalarWhereInput | TrackingEventScalarWhereInput[]
  }

  export type TrackingEventUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<TrackingEventCreateWithoutOrderInput, TrackingEventUncheckedCreateWithoutOrderInput> | TrackingEventCreateWithoutOrderInput[] | TrackingEventUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TrackingEventCreateOrConnectWithoutOrderInput | TrackingEventCreateOrConnectWithoutOrderInput[]
    upsert?: TrackingEventUpsertWithWhereUniqueWithoutOrderInput | TrackingEventUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: TrackingEventCreateManyOrderInputEnvelope
    set?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
    disconnect?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
    delete?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
    connect?: TrackingEventWhereUniqueInput | TrackingEventWhereUniqueInput[]
    update?: TrackingEventUpdateWithWhereUniqueWithoutOrderInput | TrackingEventUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: TrackingEventUpdateManyWithWhereWithoutOrderInput | TrackingEventUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: TrackingEventScalarWhereInput | TrackingEventScalarWhereInput[]
  }

  export type TrackingOrderCreateNestedOneWithoutEventsInput = {
    create?: XOR<TrackingOrderCreateWithoutEventsInput, TrackingOrderUncheckedCreateWithoutEventsInput>
    connectOrCreate?: TrackingOrderCreateOrConnectWithoutEventsInput
    connect?: TrackingOrderWhereUniqueInput
  }

  export type TrackingOrderUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<TrackingOrderCreateWithoutEventsInput, TrackingOrderUncheckedCreateWithoutEventsInput>
    connectOrCreate?: TrackingOrderCreateOrConnectWithoutEventsInput
    upsert?: TrackingOrderUpsertWithoutEventsInput
    connect?: TrackingOrderWhereUniqueInput
    update?: XOR<XOR<TrackingOrderUpdateToOneWithWhereWithoutEventsInput, TrackingOrderUpdateWithoutEventsInput>, TrackingOrderUncheckedUpdateWithoutEventsInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TrackingEventCreateWithoutOrderInput = {
    id?: string
    timestamp?: Date | string
    status: string
    title: string
    description: string
    location: string
  }

  export type TrackingEventUncheckedCreateWithoutOrderInput = {
    id?: string
    timestamp?: Date | string
    status: string
    title: string
    description: string
    location: string
  }

  export type TrackingEventCreateOrConnectWithoutOrderInput = {
    where: TrackingEventWhereUniqueInput
    create: XOR<TrackingEventCreateWithoutOrderInput, TrackingEventUncheckedCreateWithoutOrderInput>
  }

  export type TrackingEventCreateManyOrderInputEnvelope = {
    data: TrackingEventCreateManyOrderInput | TrackingEventCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type TrackingEventUpsertWithWhereUniqueWithoutOrderInput = {
    where: TrackingEventWhereUniqueInput
    update: XOR<TrackingEventUpdateWithoutOrderInput, TrackingEventUncheckedUpdateWithoutOrderInput>
    create: XOR<TrackingEventCreateWithoutOrderInput, TrackingEventUncheckedCreateWithoutOrderInput>
  }

  export type TrackingEventUpdateWithWhereUniqueWithoutOrderInput = {
    where: TrackingEventWhereUniqueInput
    data: XOR<TrackingEventUpdateWithoutOrderInput, TrackingEventUncheckedUpdateWithoutOrderInput>
  }

  export type TrackingEventUpdateManyWithWhereWithoutOrderInput = {
    where: TrackingEventScalarWhereInput
    data: XOR<TrackingEventUpdateManyMutationInput, TrackingEventUncheckedUpdateManyWithoutOrderInput>
  }

  export type TrackingEventScalarWhereInput = {
    AND?: TrackingEventScalarWhereInput | TrackingEventScalarWhereInput[]
    OR?: TrackingEventScalarWhereInput[]
    NOT?: TrackingEventScalarWhereInput | TrackingEventScalarWhereInput[]
    id?: StringFilter<"TrackingEvent"> | string
    orderId?: StringFilter<"TrackingEvent"> | string
    timestamp?: DateTimeFilter<"TrackingEvent"> | Date | string
    status?: StringFilter<"TrackingEvent"> | string
    title?: StringFilter<"TrackingEvent"> | string
    description?: StringFilter<"TrackingEvent"> | string
    location?: StringFilter<"TrackingEvent"> | string
  }

  export type TrackingOrderCreateWithoutEventsInput = {
    id?: string
    trackingCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientName: string
    senderCompany: string
    recipientName: string
    origin: string
    destination: string
    serviceType: string
    currentStatus: string
    currentLocation?: string | null
    estimatedDelivery?: Date | string | null
    deliveredAt?: Date | string | null
  }

  export type TrackingOrderUncheckedCreateWithoutEventsInput = {
    id?: string
    trackingCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientName: string
    senderCompany: string
    recipientName: string
    origin: string
    destination: string
    serviceType: string
    currentStatus: string
    currentLocation?: string | null
    estimatedDelivery?: Date | string | null
    deliveredAt?: Date | string | null
  }

  export type TrackingOrderCreateOrConnectWithoutEventsInput = {
    where: TrackingOrderWhereUniqueInput
    create: XOR<TrackingOrderCreateWithoutEventsInput, TrackingOrderUncheckedCreateWithoutEventsInput>
  }

  export type TrackingOrderUpsertWithoutEventsInput = {
    update: XOR<TrackingOrderUpdateWithoutEventsInput, TrackingOrderUncheckedUpdateWithoutEventsInput>
    create: XOR<TrackingOrderCreateWithoutEventsInput, TrackingOrderUncheckedCreateWithoutEventsInput>
    where?: TrackingOrderWhereInput
  }

  export type TrackingOrderUpdateToOneWithWhereWithoutEventsInput = {
    where?: TrackingOrderWhereInput
    data: XOR<TrackingOrderUpdateWithoutEventsInput, TrackingOrderUncheckedUpdateWithoutEventsInput>
  }

  export type TrackingOrderUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientName?: StringFieldUpdateOperationsInput | string
    senderCompany?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    currentStatus?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TrackingOrderUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientName?: StringFieldUpdateOperationsInput | string
    senderCompany?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    currentStatus?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TrackingEventCreateManyOrderInput = {
    id?: string
    timestamp?: Date | string
    status: string
    title: string
    description: string
    location: string
  }

  export type TrackingEventUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type TrackingEventUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type TrackingEventUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
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