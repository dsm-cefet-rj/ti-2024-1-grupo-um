import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url'; // Importa utilidades do módulo 'url'

// Converte `import.meta.url` para o diretório atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename(req, file, callback) {
            // Criar o hash
            const hash = crypto.randomBytes(6).toString('hex');
            // Criar o nome do arquivo com hash (para evitar substituir arquivos com o mesmo nome)
            const fileName = `${hash}-${file.originalname}`;

            callback(null, fileName);
        }
    })
};
