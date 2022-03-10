set -e

# set up
rm -rf dist

# act
pnpm exec webpack
pnpm exec cross-env HELLO=world import-meta-env --example .env.example

# assert
diff -r dist __fixtures__