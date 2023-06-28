<template>
  <div class="section section-content">
    <div class="container-fluid">
      <div class="content-wrapper">
        <div class="text-wrapper">
          <h2 class="title">Subtítulo</h2>
          <div class="subtitle">
            <p>
              A Smart Abrasivos Industriais é uma empresa focada no fornecimento
              de soluções de qualidade para processos produtivos do mercado
              industrial. Nascida em meio ao polo industrial de Caxias do Sul, a
              Smart comercializa seus produtos para todo o país.
            </p>
            <p>
              Com o objetivo de gerar soluções que otimizem a relação
              custo-benefício de seus clientes, a SMART tem em sua proposta de
              valor o oferecimento de produtos que gerem eficácia operacional e
              ganho de produtividade.
            </p>
            <p>
              Nosso objetivo é solucionar problemas e aumentar a produtividade
              de nossos clientes, encontrando melhorias através de abrasivos e
              químicos industriais de alta performance. Para isso, a Smart conta
              com uma equipe de profissionais com alto grau de conhecimento de
              mercado e entendimento técnico de produtos e processos.
            </p>
            <p>
              Nós somos a Smart Abrasivos e estamos prontos para atender as
              necessidades da indústria em qualidade e eficácia, entre em
              contato com a gente e descubra como podemos ajudar a sua empresa!
            </p>
          </div>
        </div>
        <div class="banner-wrapper">
          <div class="image-banner">
            <img alt="imagem" src="@/assets/images/bannersobrenos.jpg" />
          </div>
          <div class="text-banner">
            <h4 class="uppertitle">Título superior</h4>
            <h3 class="title">Título da seção</h3>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
              dapibus felis, eu vulputate lectus. Integer pellentesque malesuada
              tellus, id hendrerit tortor pulvinar eu.
            </p>
          </div>
        </div>
        <div class="text-wrapper">
          <div class="subtitle">
            <p>
              A Smart Abrasivos Industriais é uma empresa focada no fornecimento
              de soluções de qualidade para processos produtivos do mercado
              industrial. Nascida em meio ao polo industrial de Caxias do Sul, a
              Smart comercializa seus produtos para todo o país. Com o objetivo
              de gerar soluções que otimizem a relação custo-benefício de seus
              clientes, a SMART tem em sua proposta de valor o oferecimento de
              produtos que gerem eficácia operacional e ganho de produtividade.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.section-content {
  margin-top: 120px;

  .container-fluid {
    padding: 0 25%;
  }

  .text-wrapper {
    .title {
      font-size: $font-size-lg;
      text-align: center;
      margin-bottom: 30px;
    }

    .subtitle {
      font-size: $font-size-ml;
      line-height: 160%;

      p {
        margin-bottom: 20px;
        text-align: justify;
      }
    }
  }

  .banner-wrapper {
    display: flex;
    margin-top: 120px;
    margin-bottom: 120px;

    .image-banner {
      display: flex;
      width: 50%;

      img {
        width: 100%;
        object-fit: cover;
        aspect-ratio: 1;
      }
    }

    .text-banner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 5%;
      width: 50%;

      .uppertitle {
        text-transform: uppercase;
        font-size: $font-size-md;
      }

      .title {
        font-size: $font-size-lg;
        margin-bottom: 15px;
      }

      .description {
        font-size: $font-size-ml;
        line-height: 160%;
        margin-bottom: 15px;
        text-align: justify;
      }

      .main-button {
        height: 42px;
        padding: 0 30px;
      }
    }
  }
}
</style>
