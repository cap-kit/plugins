/// <reference types="@capacitor/cli" />

/**
 * Extend the PluginsConfig interface to include configuration options for the Test plugin.
 */
declare module '@capacitor/cli' {
  export interface PluginsConfig {
    /**
     * Configuration options for the Test plugin.
     */
    Test?: {
      /**
       * A custom message to append to the echo response.
       * This demonstrates how to pass data from `capacitor.config.ts` to the plugin.
       *
       * @default " (from config)"
       * @example " - Hello from Config!"
       * @since 0.0.1
       */
      customMessage?: string;
    };
  }
}

/**
 * Options for the echo method.
 */
export interface EchoOptions {
  /**
   * The value to be echoed.
   */
  value: string;
}

/**
 * Result returned by the echo method.
 */
export interface EchoResult {
  /**
   * The echoed value.
   */
  value: string;
}

/**
 * Result returned by the getPluginVersion method.
 */
export interface PluginVersionResult {
  /**
   * The native version string of the plugin.
   */
  version: string;
}

/**
 * Capacitor Test plugin interface.
 */
export interface TestPlugin {
  /**
   * Echoes the provided value.
   *
   * If the plugin is configured with a `customMessage`, it will be appended
   * to the response.
   *
   * @param options - The options containing the value to echo.
   * @returns A promise resolving to the echo result.
   *
   * @example
   * ```typescript
   * import { Test } from '@cap-kit/test-plugin';
   *
   * const result = await Test.echo({ value: 'Hello, World!' });
   * console.log(result.value); // Output: 'Hello, World!'
   * ```
   *
   * @since 0.0.1
   */
  echo(options: EchoOptions): Promise<EchoResult>;

  /**
   * Get the native Capacitor plugin version.
   *
   * @returns A promise resolving to an object containing the version string.
   * @throws Error if getting the version fails.
   *
   * @example
   * ```typescript
   * import { Test } from '@cap-kit/test-plugin';
   *
   * const { version } = await Test.getPluginVersion();
   * console.log('Plugin version:', version); // Output: Plugin version: 0.0.1
   * ```
   *
   * @since 0.0.1
   */
  getPluginVersion(): Promise<PluginVersionResult>;
}
