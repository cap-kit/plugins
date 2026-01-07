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
 * Capacitor Test plugin interface.
 */
export interface TestPlugin {
  /**
   * Echoes the provided value.
   *
   * If the plugin is configured with a `customMessage`, it will be appended
   * to the response.
   *
   * @param options - An object containing a `value` property to be echoed back.
   * @returns A promise resolving to an object containing the echoed `value`.
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
  echo(options: { value: string }): Promise<{ value: string }>;

  /**
   * Get the native Capacitor plugin version.
   *
   * @returns Promise that resolves with the plugin version
   * @throws Error if getting the version fails
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
  getPluginVersion(): Promise<{ version: string }>;
}
