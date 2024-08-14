import { marked } from "marked";

interface GetAllNoticiasProps {
  id: number;
  imagem: string;
  titulo: string;
  descricao: string;
  conteudo: string | Promise<string>;
  data: Date;
}

const markdownContent = `
# Título

Este é um parágrafo em Markdown.

## Subtítulo

- Item 1
- Item 2

**Texto em negrito**
`;

// Converter Markdown para HTML
const htmlContent = marked(markdownContent);

export const getAllNoticias: GetAllNoticiasProps[] = [
  {
    id: 1,
    imagem:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAAbFBMVEUAAAD///+5ubns7OzNzc3y8vKzs7NfX1+QkJBNTU0/Pz9zc3MaGhqYmJiAgIB2dnYTExNZWVni4uLGxsZFRUXS0tJsbGwqKiqjo6M4ODiKiorY2NjBwcEICAj29vbn5+cfHx8vLy+srKydnZ1rkYR2AAAC/UlEQVR4nO3aW5OiMBCG4W5UEA8zKp6POPP//+PieEoC1HqxThbyPhc7Gtyqrq9IoAMiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAyo4nvChriMPBdQVMkvgtoiuHZdwUNkS59V9AQo7XvCpoi4rr3mjXL+WuGX74raIjzzHcFTdFJfVfQENnYdwUNsT35ruCXzaOKU+MjssWS7J2plupqsH8cv3/4+J2ivUhUh6XBWLOuaS8yO9o/OW5lvrgd7ujtw2L7S1X7kGimpcG4Uxpa6d78mi2ML1Hvn5f1H0p0cMrcwYqk5FM/n1+2at6ch5JUuinNv6qkJNLV/eNGrcY4lKSmMtaDPViZlBwfd5odayYGlJTMuvZgdVJzve0cRM7KFkpS6WW5tudfdVLFuTe9/Ble/zwFlFSxQluDNUnJ7hLJSN3GOKSkZGfNv7qkRIvL5Kx0MKikJuY9QH1SQx2utfQwJqikitslYzA+bvsG4847Vi13P2ElJZkx/2LtmIxeeKPuHYUEl5QY86929hWL1HFRGgwtqURH98HapGLdLMvTL7SkJHqcLXVJJbq9pDV3hoNLSo73+VeT1EF/suy4R0NJ6nmGpPf5V5PU7np9HNgbMG5SxYo/auNbHWZS8nWbf9VJje9dzNZpfuykvlbTaLxv3yNTKynpXbd3K5N6NMgiXc3NI05S+XciG+sHrWAnNbjOv8qkjsbjPbUe9TlJnfM4a+E2sZ2UrHeXf6uSyjQ3/5f56oaR1CEvkjoXcTnbDS3gJCWny/yrSOrDagxlbVwyn0lNYul+ZNKPl9lK2sZN6qx5kVRvmliKLsa53s2Oz67meU6lMlnml7eqRtI6blLS3/30wTY5uc9BV/rsE6Pa5qfddi+uxuVOOTi99q0xbzLd+a6gMb77vitojC6vTr9osv/7b/Bj2sJu5E36G98VNAav5L8qb/Prdf9W2sZ9y/do377J23BSvWrSvr1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7A73zF94TJhF7AAAAAElFTkSuQmCC",
    titulo: "O que é o Next.js?",
    descricao:
      "O Next.js é uma ferramenta de desenvolvimento de aplicações web com foco em produtividade e performance. Ele permite criar aplicações de alta qualidade com uma única ferramenta e uma única configuração.",
    conteudo: htmlContent,
    data: new Date(),
  },
  {
    id: 2,
    imagem:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAAbFBMVEUAAAD///+5ubns7OzNzc3y8vKzs7NfX1+QkJBNTU0/Pz9zc3MaGhqYmJiAgIB2dnYTExNZWVni4uLGxsZFRUXS0tJsbGwqKiqjo6M4ODiKiorY2NjBwcEICAj29vbn5+cfHx8vLy+srKydnZ1rkYR2AAAC/UlEQVR4nO3aW5OiMBCG4W5UEA8zKp6POPP//+PieEoC1HqxThbyPhc7Gtyqrq9IoAMiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAyo4nvChriMPBdQVMkvgtoiuHZdwUNkS59V9AQo7XvCpoi4rr3mjXL+WuGX74raIjzzHcFTdFJfVfQENnYdwUNsT35ruCXzaOKU+MjssWS7J2plupqsH8cv3/4+J2ivUhUh6XBWLOuaS8yO9o/OW5lvrgd7ujtw2L7S1X7kGimpcG4Uxpa6d78mi2ML1Hvn5f1H0p0cMrcwYqk5FM/n1+2at6ch5JUuinNv6qkJNLV/eNGrcY4lKSmMtaDPViZlBwfd5odayYGlJTMuvZgdVJzve0cRM7KFkpS6WW5tudfdVLFuTe9/Ble/zwFlFSxQluDNUnJ7hLJSN3GOKSkZGfNv7qkRIvL5Kx0MKikJuY9QH1SQx2utfQwJqikitslYzA+bvsG4847Vi13P2ElJZkx/2LtmIxeeKPuHYUEl5QY86929hWL1HFRGgwtqURH98HapGLdLMvTL7SkJHqcLXVJJbq9pDV3hoNLSo73+VeT1EF/suy4R0NJ6nmGpPf5V5PU7np9HNgbMG5SxYo/auNbHWZS8nWbf9VJje9dzNZpfuykvlbTaLxv3yNTKynpXbd3K5N6NMgiXc3NI05S+XciG+sHrWAnNbjOv8qkjsbjPbUe9TlJnfM4a+E2sZ2UrHeXf6uSyjQ3/5f56oaR1CEvkjoXcTnbDS3gJCWny/yrSOrDagxlbVwyn0lNYul+ZNKPl9lK2sZN6qx5kVRvmliKLsa53s2Oz67meU6lMlnml7eqRtI6blLS3/30wTY5uc9BV/rsE6Pa5qfddi+uxuVOOTi99q0xbzLd+a6gMb77vitojC6vTr9osv/7b/Bj2sJu5E36G98VNAav5L8qb/Prdf9W2sZ9y/do377J23BSvWrSvr1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7A73zF94TJhF7AAAAAElFTkSuQmCC",
    titulo: "Como usar o React com Next.js",
    descricao:
      "Integrar React com Next.js permite aproveitar a renderização no lado do servidor e a geração estática, melhorando a performance e SEO das suas aplicações.",
    conteudo: `
        <section class="pb-4">
            <h2 class="text-2xl mb-4">Introdução</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
        </section>
        </br>
        <section class="pb-4">
            <h2 class="text-2xl mb-4">Desenvolvimento</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper, felis non tempor facilisis, mi felis tristique libero, et tempor risus sapien ut metus.</p>
            <p>Praesent ac libero nec lorem consectetur auctor. Nullam vel tortor quis dolor condimentum eleifend.</p>
        </section>
        </br>
        <section class="pb-4">
            <h2 class="text-2xl mb-4">Conclusão</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula urna nec risus facilisis, id fringilla dui fermentum.</p>
        </section>
       </br>
        <section class="pb-4">
            <p><strong>Autor:</strong> João da Silva</p>
        </section>`,
    data: new Date("2024-08-02"),
  },
  // {
  //   id: 3,
  //   imagem:
  //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAAbFBMVEUAAAD///+5ubns7OzNzc3y8vKzs7NfX1+QkJBNTU0/Pz9zc3MaGhqYmJiAgIB2dnYTExNZWVni4uLGxsZFRUXS0tJsbGwqKiqjo6M4ODiKiorY2NjBwcEICAj29vbn5+cfHx8vLy+srKydnZ1rkYR2AAAC/UlEQVR4nO3aW5OiMBCG4W5UEA8zKp6POPP//+PieEoC1HqxThbyPhc7Gtyqrq9IoAMiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAyo4nvChriMPBdQVMkvgtoiuHZdwUNkS59V9AQo7XvCpoi4rr3mjXL+WuGX74raIjzzHcFTdFJfVfQENnYdwUNsT35ruCXzaOKU+MjssWS7J2plupqsH8cv3/4+J2ivUhUh6XBWLOuaS8yO9o/OW5lvrgd7ujtw2L7S1X7kGimpcG4Uxpa6d78mi2ML1Hvn5f1H0p0cMrcwYqk5FM/n1+2at6ch5JUuinNv6qkJNLV/eNGrcY4lKSmMtaDPViZlBwfd5odayYGlJTMuvZgdVJzve0cRM7KFkpS6WW5tudfdVLFuTe9/Ble/zwFlFSxQluDNUnJ7hLJSN3GOKSkZGfNv7qkRIvL5Kx0MKikJuY9QH1SQx2utfQwJqikitslYzA+bvsG4847Vi13P2ElJZkx/2LtmIxeeKPuHYUEl5QY86929hWL1HFRGgwtqURH98HapGLdLMvTL7SkJHqcLXVJJbq9pDV3hoNLSo73+VeT1EF/suy4R0NJ6nmGpPf5V5PU7np9HNgbMG5SxYo/auNbHWZS8nWbf9VJje9dzNZpfuykvlbTaLxv3yNTKynpXbd3K5N6NMgiXc3NI05S+XciG+sHrWAnNbjOv8qkjsbjPbUe9TlJnfM4a+E2sZ2UrHeXf6uSyjQ3/5f56oaR1CEvkjoXcTnbDS3gJCWny/yrSOrDagxlbVwyn0lNYul+ZNKPl9lK2sZN6qx5kVRvmliKLsa53s2Oz67meU6lMlnml7eqRtI6blLS3/30wTY5uc9BV/rsE6Pa5qfddi+uxuVOOTi99q0xbzLd+a6gMb77vitojC6vTr9osv/7b/Bj2sJu5E36G98VNAav5L8qb/Prdf9W2sZ9y/do377J23BSvWrSvr1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7A73zF94TJhF7AAAAAElFTkSuQmCC",
  //   titulo: "Vantagens de SSR com Next.js",
  //   descricao:
  //     "A renderização no lado do servidor (SSR) com Next.js traz várias vantagens, como melhor SEO e tempos de carregamento mais rápidos para aplicações web.",
  //   data: new Date("2024-08-03"),
  // },
  // {
  //   id: 4,
  //   imagem:
  //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAAbFBMVEUAAAD///+5ubns7OzNzc3y8vKzs7NfX1+QkJBNTU0/Pz9zc3MaGhqYmJiAgIB2dnYTExNZWVni4uLGxsZFRUXS0tJsbGwqKiqjo6M4ODiKiorY2NjBwcEICAj29vbn5+cfHx8vLy+srKydnZ1rkYR2AAAC/UlEQVR4nO3aW5OiMBCG4W5UEA8zKp6POPP//+PieEoC1HqxThbyPhc7Gtyqrq9IoAMiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAyo4nvChriMPBdQVMkvgtoiuHZdwUNkS59V9AQo7XvCpoi4rr3mjXL+WuGX74raIjzzHcFTdFJfVfQENnYdwUNsT35ruCXzaOKU+MjssWS7J2plupqsH8cv3/4+J2ivUhUh6XBWLOuaS8yO9o/OW5lvrgd7ujtw2L7S1X7kGimpcG4Uxpa6d78mi2ML1Hvn5f1H0p0cMrcwYqk5FM/n1+2at6ch5JUuinNv6qkJNLV/eNGrcY4lKSmMtaDPViZlBwfd5odayYGlJTMuvZgdVJzve0cRM7KFkpS6WW5tudfdVLFuTe9/Ble/zwFlFSxQluDNUnJ7hLJSN3GOKSkZGfNv7qkRIvL5Kx0MKikJuY9QH1SQx2utfQwJqikitslYzA+bvsG4847Vi13P2ElJZkx/2LtmIxeeKPuHYUEl5QY86929hWL1HFRGgwtqURH98HapGLdLMvTL7SkJHqcLXVJJbq9pDV3hoNLSo73+VeT1EF/suy4R0NJ6nmGpPf5V5PU7np9HNgbMG5SxYo/auNbHWZS8nWbf9VJje9dzNZpfuykvlbTaLxv3yNTKynpXbd3K5N6NMgiXc3NI05S+XciG+sHrWAnNbjOv8qkjsbjPbUe9TlJnfM4a+E2sZ2UrHeXf6uSyjQ3/5f56oaR1CEvkjoXcTnbDS3gJCWny/yrSOrDagxlbVwyn0lNYul+ZNKPl9lK2sZN6qx5kVRvmliKLsa53s2Oz67meU6lMlnml7eqRtI6blLS3/30wTY5uc9BV/rsE6Pa5qfddi+uxuVOOTi99q0xbzLd+a6gMb77vitojC6vTr9osv/7b/Bj2sJu5E36G98VNAav5L8qb/Prdf9W2sZ9y/do377J23BSvWrSvr1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7A73zF94TJhF7AAAAAElFTkSuQmCC",
  //   titulo: "Diferença entre Next.js e Gatsby",
  //   descricao:
  //     "Next.js e Gatsby são ambos frameworks para React, mas têm diferentes focos e abordagens para o desenvolvimento de aplicações web.",
  //   data: new Date("2024-08-04"),
  // },
  // {
  //   id: 5,
  //   imagem:
  //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAAbFBMVEUAAAD///+5ubns7OzNzc3y8vKzs7NfX1+QkJBNTU0/Pz9zc3MaGhqYmJiAgIB2dnYTExNZWVni4uLGxsZFRUXS0tJsbGwqKiqjo6M4ODiKiorY2NjBwcEICAj29vbn5+cfHx8vLy+srKydnZ1rkYR2AAAC/UlEQVR4nO3aW5OiMBCG4W5UEA8zKp6POPP//+PieEoC1HqxThbyPhc7Gtyqrq9IoAMiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAyo4nvChriMPBdQVMkvgtoiuHZdwUNkS59V9AQo7XvCpoi4rr3mjXL+WuGX74raIjzzHcFTdFJfVfQENnYdwUNsT35ruCXzaOKU+MjssWS7J2plupqsH8cv3/4+J2ivUhUh6XBWLOuaS8yO9o/OW5lvrgd7ujtw2L7S1X7kGimpcG4Uxpa6d78mi2ML1Hvn5f1H0p0cMrcwYqk5FM/n1+2at6ch5JUuinNv6qkJNLV/eNGrcY4lKSmMtaDPViZlBwfd5odayYGlJTMuvZgdVJzve0cRM7KFkpS6WW5tudfdVLFuTe9/Ble/zwFlFSxQluDNUnJ7hLJSN3GOKSkZGfNv7qkRIvL5Kx0MKikJuY9QH1SQx2utfQwJqikitslYzA+bvsG4847Vi13P2ElJZkx/2LtmIxeeKPuHYUEl5QY86929hWL1HFRGgwtqURH98HapGLdLMvTL7SkJHqcLXVJJbq9pDV3hoNLSo73+VeT1EF/suy4R0NJ6nmGpPf5V5PU7np9HNgbMG5SxYo/auNbHWZS8nWbf9VJje9dzNZpfuykvlbTaLxv3yNTKynpXbd3K5N6NMgiXc3NI05S+XciG+sHrWAnNbjOv8qkjsbjPbUe9TlJnfM4a+E2sZ2UrHeXf6uSyjQ3/5f56oaR1CEvkjoXcTnbDS3gJCWny/yrSOrDagxlbVwyn0lNYul+ZNKPl9lK2sZN6qx5kVRvmliKLsa53s2Oz67meU6lMlnml7eqRtI6blLS3/30wTY5uc9BV/rsE6Pa5qfddi+uxuVOOTi99q0xbzLd+a6gMb77vitojC6vTr9osv/7b/Bj2sJu5E36G98VNAav5L8qb/Prdf9W2sZ9y/do377J23BSvWrSvr1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7A73zF94TJhF7AAAAAElFTkSuQmCC",
  //   titulo: "O futuro do desenvolvimento web com Next.js",
  //   descricao:
  //     "O Next.js está moldando o futuro do desenvolvimento web com suas características inovadoras e suporte a renderização no lado do servidor e geração estática.",
  //   data: new Date("2024-08-05"),
  // },
  // {
  //   id: 6,
  //   imagem:
  //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAAbFBMVEUAAAD///+5ubns7OzNzc3y8vKzs7NfX1+QkJBNTU0/Pz9zc3MaGhqYmJiAgIB2dnYTExNZWVni4uLGxsZFRUXS0tJsbGwqKiqjo6M4ODiKiorY2NjBwcEICAj29vbn5+cfHx8vLy+srKydnZ1rkYR2AAAC/UlEQVR4nO3aW5OiMBCG4W5UEA8zKp6POPP//+PieEoC1HqxThbyPhc7Gtyqrq9IoAMiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAyo4nvChriMPBdQVMkvgtoiuHZdwUNkS59V9AQo7XvCpoi4rr3mjXL+WuGX74raIjzzHcFTdFJfVfQENnYdwUNsT35ruCXzaOKU+MjssWS7J2plupqsH8cv3/4+J2ivUhUh6XBWLOuaS8yO9o/OW5lvrgd7ujtw2L7S1X7kGimpcG4Uxpa6d78mi2ML1Hvn5f1H0p0cMrcwYqk5FM/n1+2at6ch5JUuinNv6qkJNLV/eNGrcY4lKSmMtaDPViZlBwfd5odayYGlJTMuvZgdVJzve0cRM7KFkpS6WW5tudfdVLFuTe9/Ble/zwFlFSxQluDNUnJ7hLJSN3GOKSkZGfNv7qkRIvL5Kx0MKikJuY9QH1SQx2utfQwJqikitslYzA+bvsG4847Vi13P2ElJZkx/2LtmIxeeKPuHYUEl5QY86929hWL1HFRGgwtqURH98HapGLdLMvTL7SkJHqcLXVJJbq9pDV3hoNLSo73+VeT1EF/suy4R0NJ6nmGpPf5V5PU7np9HNgbMG5SxYo/auNbHWZS8nWbf9VJje9dzNZpfuykvlbTaLxv3yNTKynpXbd3K5N6NMgiXc3NI05S+XciG+sHrWAnNbjOv8qkjsbjPbUe9TlJnfM4a+E2sZ2UrHeXf6uSyjQ3/5f56oaR1CEvkjoXcTnbDS3gJCWny/yrSOrDagxlbVwyn0lNYul+ZNKPl9lK2sZN6qx5kVRvmliKLsa53s2Oz67meU6lMlnml7eqRtI6blLS3/30wTY5uc9BV/rsE6Pa5qfddi+uxuVOOTi99q0xbzLd+a6gMb77vitojC6vTr9osv/7b/Bj2sJu5E36G98VNAav5L8qb/Prdf9W2sZ9y/do377J23BSvWrSvr1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7A73zF94TJhF7AAAAAElFTkSuQmCC",
  //   titulo: "Guia rápido para iniciar com Next.js",
  //   descricao:
  //     "Este guia rápido cobre os passos essenciais para iniciar com Next.js, desde a configuração inicial até o desenvolvimento de sua primeira aplicação.",
  //   data: new Date("2024-08-06"),
  // },
  // {
  //   id: 7,
  //   imagem:
  //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAAbFBMVEUAAAD///+5ubns7OzNzc3y8vKzs7NfX1+QkJBNTU0/Pz9zc3MaGhqYmJiAgIB2dnYTExNZWVni4uLGxsZFRUXS0tJsbGwqKiqjo6M4ODiKiorY2NjBwcEICAj29vbn5+cfHx8vLy+srKydnZ1rkYR2AAAC/UlEQVR4nO3aW5OiMBCG4W5UEA8zKp6POPP//+PieEoC1HqxThbyPhc7Gtyqrq9IoAMiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAyo4nvChriMPBdQVMkvgtoiuHZdwUNkS59V9AQo7XvCpoi4rr3mjXL+WuGX74raIjzzHcFTdFJfVfQENnYdwUNsT35ruCXzaOKU+MjssWS7J2plupqsH8cv3/4+J2ivUhUh6XBWLOuaS8yO9o/OW5lvrgd7ujtw2L7S1X7kGimpcG4Uxpa6d78mi2ML1Hvn5f1H0p0cMrcwYqk5FM/n1+2at6ch5JUuinNv6qkJNLV/eNGrcY4lKSmMtaDPViZlBwfd5odayYGlJTMuvZgdVJzve0cRM7KFkpS6WW5tudfdVLFuTe9/Ble/zwFlFSxQluDNUnJ7hLJSN3GOKSkZGfNv7qkRIvL5Kx0MKikJuY9QH1SQx2utfQwJqikitslYzA+bvsG4847Vi13P2ElJZkx/2LtmIxeeKPuHYUEl5QY86929hWL1HFRGgwtqURH98HapGLdLMvTL7SkJHqcLXVJJbq9pDV3hoNLSo73+VeT1EF/suy4R0NJ6nmGpPf5V5PU7np9HNgbMG5SxYo/auNbHWZS8nWbf9VJje9dzNZpfuykvlbTaLxv3yNTKynpXbd3K5N6NMgiXc3NI05S+XciG+sHrWAnNbjOv8qkjsbjPbUe9TlJnfM4a+E2sZ2UrHeXf6uSyjQ3/5f56oaR1CEvkjoXcTnbDS3gJCWny/yrSOrDagxlbVwyn0lNYul+ZNKPl9lK2sZN6qx5kVRvmliKLsa53s2Oz67meU6lMlnml7eqRtI6blLS3/30wTY5uc9BV/rsE6Pa5qfddi+uxuVOOTi99q0xbzLd+a6gMb77vitojC6vTr9osv/7b/Bj2sJu5E36G98VNAav5L8qb/Prdf9W2sZ9y/do377J23BSvWrSvr1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7A73zF94TJhF7AAAAAElFTkSuQmCC",
  //   titulo: "Melhores práticas para SEO com Next.js",
  //   descricao:
  //     "Implementar práticas de SEO eficazes com Next.js pode ajudar a melhorar a visibilidade e a performance do seu site nos motores de busca.",
  //   data: new Date("2024-08-07"),
  // },
  // {
  //   id: 8,
  //   imagem:
  //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAAbFBMVEUAAAD///+5ubns7OzNzc3y8vKzs7NfX1+QkJBNTU0/Pz9zc3MaGhqYmJiAgIB2dnYTExNZWVni4uLGxsZFRUXS0tJsbGwqKiqjo6M4ODiKiorY2NjBwcEICAj29vbn5+cfHx8vLy+srKydnZ1rkYR2AAAC/UlEQVR4nO3aW5OiMBCG4W5UEA8zKp6POPP//+PieEoC1HqxThbyPhc7Gtyqrq9IoAMiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAyo4nvChriMPBdQVMkvgtoiuHZdwUNkS59V9AQo7XvCpoi4rr3mjXL+WuGX74raIjzzHcFTdFJfVfQENnYdwUNsT35ruCXzaOKU+MjssWS7J2plupqsH8cv3/4+J2ivUhUh6XBWLOuaS8yO9o/OW5lvrgd7ujtw2L7S1X7kGimpcG4Uxpa6d78mi2ML1Hvn5f1H0p0cMrcwYqk5FM/n1+2at6ch5JUuinNv6qkJNLV/eNGrcY4lKSmMtaDPViZlBwfd5odayYGlJTMuvZgdVJzve0cRM7KFkpS6WW5tudfdVLFuTe9/Ble/zwFlFSxQluDNUnJ7hLJSN3GOKSkZGfNv7qkRIvL5Kx0MKikJuY9QH1SQx2utfQwJqikitslYzA+bvsG4847Vi13P2ElJZkx/2LtmIxeeKPuHYUEl5QY86929hWL1HFRGgwtqURH98HapGLdLMvTL7SkJHqcLXVJJbq9pDV3hoNLSo73+VeT1EF/suy4R0NJ6nmGpPf5V5PU7np9HNgbMG5SxYo/auNbHWZS8nWbf9VJje9dzNZpfuykvlbTaLxv3yNTKynpXbd3K5N6NMgiXc3NI05S+XciG+sHrWAnNbjOv8qkjsbjPbUe9TlJnfM4a+E2sZ2UrHeXf6uSyjQ3/5f56oaR1CEvkjoXcTnbDS3gJCWny/yrSOrDagxlbVwyn0lNYul+ZNKPl9lK2sZN6qx5kVRvmliKLsa53s2Oz67meU6lMlnml7eqRtI6blLS3/30wTY5uc9BV/rsE6Pa5qfddi+uxuVOOTi99q0xbzLd+a6gMb77vitojC6vTr9osv/7b/Bj2sJu5E36G98VNAav5L8qb/Prdf9W2sZ9y/do377J23BSvWrSvr1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7A73zF94TJhF7AAAAAElFTkSuQmCC",
  //   titulo: "Como implementar autenticação com Next.js",
  //   descricao:
  //     "Aprenda a implementar autenticação em suas aplicações Next.js com estratégias seguras e eficientes para proteger seus usuários.",
  //   data: new Date("2024-08-08"),
  // },
  // {
  //   id: 9,
  //   imagem:
  //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAAbFBMVEUAAAD///+5ubns7OzNzc3y8vKzs7NfX1+QkJBNTU0/Pz9zc3MaGhqYmJiAgIB2dnYTExNZWVni4uLGxsZFRUXS0tJsbGwqKiqjo6M4ODiKiorY2NjBwcEICAj29vbn5+cfHx8vLy+srKydnZ1rkYR2AAAC/UlEQVR4nO3aW5OiMBCG4W5UEA8zKp6POPP//+PieEoC1HqxThbyPhc7Gtyqrq9IoAMiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAyo4nvChriMPBdQVMkvgtoiuHZdwUNkS59V9AQo7XvCpoi4rr3mjXL+WuGX74raIjzzHcFTdFJfVfQENnYdwUNsT35ruCXzaOKU+MjssWS7J2plupqsH8cv3/4+J2ivUhUh6XBWLOuaS8yO9o/OW5lvrgd7ujtw2L7S1X7kGimpcG4Uxpa6d78mi2ML1Hvn5f1H0p0cMrcwYqk5FM/n1+2at6ch5JUuinNv6qkJNLV/eNGrcY4lKSmMtaDPViZlBwfd5odayYGlJTMuvZgdVJzve0cRM7KFkpS6WW5tudfdVLFuTe9/Ble/zwFlFSxQluDNUnJ7hLJSN3GOKSkZGfNv7qkRIvL5Kx0MKikJuY9QH1SQx2utfQwJqikitslYzA+bvsG4847Vi13P2ElJZkx/2LtmIxeeKPuHYUEl5QY86929hWL1HFRGgwtqURH98HapGLdLMvTL7SkJHqcLXVJJbq9pDV3hoNLSo73+VeT1EF/suy4R0NJ6nmGpPf5V5PU7np9HNgbMG5SxYo/auNbHWZS8nWbf9VJje9dzNZpfuykvlbTaLxv3yNTKynpXbd3K5N6NMgiXc3NI05S+XciG+sHrWAnNbjOv8qkjsbjPbUe9TlJnfM4a+E2sZ2UrHeXf6uSyjQ3/5f56oaR1CEvkjoXcTnbDS3gJCWny/yrSOrDagxlbVwyn0lNYul+ZNKPl9lK2sZN6qx5kVRvmliKLsa53s2Oz67meU6lMlnml7eqRtI6blLS3/30wTY5uc9BV/rsE6Pa5qfddi+uxuVOOTi99q0xbzLd+a6gMb77vitojC6vTr9osv/7b/Bj2sJu5E36G98VNAav5L8qb/Prdf9W2sZ9y/do377J23BSvWrSvr1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7A73zF94TJhF7AAAAAElFTkSuQmCC",
  //   titulo:
  //     "Desempenho de Next.js em comparação com outros frameworks Desempenho de Next.js em comparação com outros frameworks",
  //   descricao:
  //     "Comparar o desempenho de Next.js com outros frameworks pode ajudar a escolher a melhor ferramenta para suas necessidades de desenvolvimento. Comparar o desempenho de Next.js com outros frameworks pode ajudar a escolher a melhor ferramenta para suas necessidades de desenvolvimento. Comparar o desempenho de Next.js com outros frameworks pode ajudar a escolher a melhor ferramenta para suas necessidades de desenvolvimento. Comparar o desempenho de Next.js com outros frameworks pode ajudar a escolher a melhor ferramenta para suas necessidades de desenvolvimento.",
  //   data: new Date("2024-08-09"),
  // },
  // {
  //   id: 10,
  //   imagem:
  //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAAbFBMVEUAAAD///+5ubns7OzNzc3y8vKzs7NfX1+QkJBNTU0/Pz9zc3MaGhqYmJiAgIB2dnYTExNZWVni4uLGxsZFRUXS0tJsbGwqKiqjo6M4ODiKiorY2NjBwcEICAj29vbn5+cfHx8vLy+srKydnZ1rkYR2AAAC/UlEQVR4nO3aW5OiMBCG4W5UEA8zKp6POPP//+PieEoC1HqxThbyPhc7Gtyqrq9IoAMiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAyo4nvChriMPBdQVMkvgtoiuHZdwUNkS59V9AQo7XvCpoi4rr3mjXL+WuGX74raIjzzHcFTdFJfVfQENnYdwUNsT35ruCXzaOKU+MjssWS7J2plupqsH8cv3/4+J2ivUhUh6XBWLOuaS8yO9o/OW5lvrgd7ujtw2L7S1X7kGimpcG4Uxpa6d78mi2ML1Hvn5f1H0p0cMrcwYqk5FM/n1+2at6ch5JUuinNv6qkJNLV/eNGrcY4lKSmMtaDPViZlBwfd5odayYGlJTMuvZgdVJzve0cRM7KFkpS6WW5tudfdVLFuTe9/Ble/zwFlFSxQluDNUnJ7hLJSN3GOKSkZGfNv7qkRIvL5Kx0MKikJuY9QH1SQx2utfQwJqikitslYzA+bvsG4847Vi13P2ElJZkx/2LtmIxeeKPuHYUEl5QY86929hWL1HFRGgwtqURH98HapGLdLMvTL7SkJHqcLXVJJbq9pDV3hoNLSo73+VeT1EF/suy4R0NJ6nmGpPf5V5PU7np9HNgbMG5SxYo/auNbHWZS8nWbf9VJje9dzNZpfuykvlbTaLxv3yNTKynpXbd3K5N6NMgiXc3NI05S+XciG+sHrWAnNbjOv8qkjsbjPbUe9TlJnfM4a+E2sZ2UrHeXf6uSyjQ3/5f56oaR1CEvkjoXcTnbDS3gJCWny/yrSOrDagxlbVwyn0lNYul+ZNKPl9lK2sZN6qx5kVRvmliKLsa53s2Oz67meU6lMlnml7eqRtI6blLS3/30wTY5uc9BV/rsE6Pa5qfddi+uxuVOOTi99q0xbzLd+a6gMb77vitojC6vTr9osv/7b/Bj2sJu5E36G98VNAav5L8qb/Prdf9W2sZ9y/do377J23BSvWrSvr1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7A73zF94TJhF7AAAAAElFTkSuQmCC",
  //   titulo: "Principais bibliotecas para usar com Next.js",
  //   descricao:
  //     "Explore as principais bibliotecas que podem ser usadas em conjunto com Next.js para expandir suas funcionalidades e melhorar a eficiência do desenvolvimento.",
  //   data: new Date("2024-08-10"),
  // },
];
