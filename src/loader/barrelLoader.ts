import type webpack from 'webpack';

const barrelLoader: webpack.LoaderDefinitionFunction<{
      names: string[],
      wildcard: boolean
}> = function(source){
    this.cacheable();
    const { names, wildcard } = this.getOptions()

    const matches = source.match
}