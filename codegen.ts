import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './node_modules/crm-schema/schema.graphql',
  documents: ['src/**/*.tsx'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client'
    }
  }
}

export default config
