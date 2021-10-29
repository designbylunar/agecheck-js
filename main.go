package main

import (
  "os"
  "github.com/evanw/esbuild/pkg/api"
)

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints: []string{"index.ts","countries.ts"},
    Bundle: true,
    MinifySyntax: true,
    Outdir: "dist",
    Write: true,
  })
  if len(result.Errors) > 0 {
    os.Exit(1)
  }
}
