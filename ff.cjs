const path = require('path');
const init = async (context, { generateFiles }) => {
  const projectName = path.basename(process.cwd())
  generateFiles([
    'src',
    'README.md',
    'tsconfig.json',
    '.gitignore',
    'package.json',
  ])
}
exports.init = init