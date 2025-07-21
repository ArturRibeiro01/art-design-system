export default {
    '**/*.{ts,tsx,js,jsx}': (files) => {
        return files.map((file) => {
            // Extrai o pacote onde está o arquivo modificado
            const match = file.match(/^packages\/([^/]+)/);
            if (!match) return 'echo "❌ Arquivo fora de packages ignorado"';

            const pkg = match[1];
            return `cd packages/${pkg} && npm run lint:fix`;
        });
    },
};