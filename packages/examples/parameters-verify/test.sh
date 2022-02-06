set -e

# set up
rm -rf dist

# act
pnpm run build
cp .env.prod ./dist/assets/.env
sh inject-env.sh

# assert
diff -r dist __dist__