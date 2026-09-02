Plan: atualizar a seção Hero com a nova foto enviada

1. Upload do asset
   - Subir a imagem enviada para o Lovable Assets CDN via `lovable-assets create`.
   - Gerar o arquivo `src/assets/gustavo-hero.jpg.asset.json` com o ponteiro do CDN.

2. Substituir a foto do hero
   - Trocar `gustavo-hero.jpg.asset.json` por `src/assets/gustavo-hero.jpg.asset.json` (renomear conforme o arquivo gerado) em `src/components/landing/Hero.tsx`.
   - Aplicar a mesma foto tanto no mobile quanto no desktop.

3. Ajustar desktop para fundo sobreposto
   - Remover o container de coluna com `aspect-[3/4]` e `max-w-md`.
   - Usar a imagem como um plano de fundo absoluto no desktop, cobrindo a altura da seção, posicionada à direita.
   - Manter o foco no rosto/upper body via `object-[center_top]` ou similar.

4. Preservar camadas de contraste e vinheta
   - Manter os gradientes existentes que escurecem a imagem e garantem a legibilidade do texto.
   - Garantir que o texto e o botão CTA continuem com alto contraste sobre o fundo.

5. Verificação
   - Rodar typecheck e capturar screenshots mobile/desktop para confirmar que a nova imagem está posicionada corretamente, o texto continua legível e as vinhetas foram mantidas.
