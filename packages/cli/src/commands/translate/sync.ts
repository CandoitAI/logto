import { languages } from '@logto/language-kit';
import { isBuiltInLanguageTag as isPhrasesBuiltInLanguageTag } from '@logto/phrases';
import { isBuiltInLanguageTag as isPhrasesUiBuiltInLanguageTag } from '@logto/phrases-ui';
import PQueue from 'p-queue';
import type { CommandModule } from 'yargs';

import { inquireInstancePath } from '../connector/utils.js';

import { type TranslationOptions, baseLanguage, syncTranslation } from './utils.js';

const sync: CommandModule<{ path?: string }, { path?: string }> = {
  command: ['sync'],
  describe:
    'Translate all untranslated phrases using ChatGPT. Note the environment variable `OPENAI_API_KEY` is required to work.',
  handler: async ({ path: inputPath }) => {
    const queue = new PQueue({ concurrency: 1 });
    const instancePath = await inquireInstancePath(inputPath);

    for (const languageTag of Object.keys(languages)) {
      if (languageTag === baseLanguage) {
        continue;
      }

      const baseOptions = {
        instancePath,
        verbose: false,
        queue,
      } satisfies Partial<TranslationOptions>;

      if (isPhrasesBuiltInLanguageTag(languageTag)) {
        void syncTranslation({
          ...baseOptions,
          packageName: 'phrases',
          languageTag,
        });
      }

      if (isPhrasesUiBuiltInLanguageTag(languageTag)) {
        void syncTranslation({
          ...baseOptions,
          packageName: 'phrases-ui',
          languageTag,
        });
      }
    }

    await queue.onIdle();
  },
};

export default sync;
