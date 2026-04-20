import { Plugin, useEngine } from '@envelop/core';
import { parse, validate, specifiedRules, execute, subscribe } from 'graphql';
import { buildHeaders } from './buildHeaders';
import { useLogger } from './useLogger';
import { ContextType } from '../types';

const plugins: Plugin<ContextType>[] = [
  useEngine({ parse, validate, specifiedRules, execute, subscribe }) as Plugin<ContextType>,
  buildHeaders(),
  useLogger(),
];

export default plugins;
