const carouselIndicators = document.querySelector(".carousel-indicators");
      const estruturaCarousel = [
        {
          img: "img/parafuso_tuf_lok.jpg",
          alt: "parafuso tuf lok",
          label: "Serviço de troca de parafusos do DAIT – 081 e DAIT – 083",
        },
        {
          img: "img/grampo_u_1.jfif",
          alt: "grampo u 1",
          label:
            "Foi notado que as abraçadeiras de aço carbono estão muito corroídas necessitando a troca por aço inox",
        },
        {
          img: "img/grampo_u_2.jfif",
          alt: "grampo u 2",
          label:
            "Foi notado que as abraçadeiras de aço carbono estão muito corroídas necessitando a troca por aço inox",
        },
        {
          img: "img/serviço_ajuste.jfif",
          alt: "serviço de ajuste",
          label:
            "Serviço de ajuste nos tampões de 2”, 2 ½” e de 1 ½” na lateral e topo dos contentores metálicos",
        },
        {
          img: "img/tampao_2_1_e_meia_pol.jfif",
          alt: "tampao 2 1 e meia pol",
          label:
            "Serviço de ajuste nos tampões de 2”, 2 ½” e de 1 ½” na lateral e topo dos contentores metálicos",
        },
        {
          img: "img/tri_clamp_6_pol_1.jpg",
          alt: "tri clamp 6 pol 1",
          label:
            "Serviço de ajuste nos tampões de 2”, 2 ½” e de 1 ½” na lateral e topo dos contentores metálicos",
        },
        {
          img: "img/tri_clamp_6_pol_2.jpg",
          alt: "tri clamp 6 pol 2",
          label:
            "Serviço de ajuste nos tampões de 2”, 2 ½” e de 1 ½” na lateral e topo dos contentores metálicos",
        },
        {
          img: "img/tri_clamp_6_pol_3.jfif",
          alt: "tri clamp 6 pol 3",
          label:
            "Serviço de ajuste nos tampões de 2”, 2 ½” e de 1 ½” na lateral e topo dos contentores metálicos",
        },
        {
          img: "img/tri_clamp_6_pol_4.jfif",
          alt: "tri clamp 6 pol 4",
          label:
            "Serviço de ajuste nos tampões de 2”, 2 ½” e de 1 ½” na lateral e topo dos contentores metálicos",
        },
        {
          img: "img/triclamp_2_pol_1_meia_pol.jfif",
          alt: "triclamp 2 pol 1 e meia pol",
          label:
            "Serviço de ajuste nos tampões de 2”, 2 ½” e de 1 ½” na lateral e topo dos contentores metálicos",
        },
        {
          img: "img/boca_de_visita_1.jpg",
          alt: "boca de visita 1",
          label: "Limpeza, ajuste e substituição de junta da tampa de visita",
        },
        {
          img: "img/boca_de_visita_2.jfif",
          alt: "boca de visita 2",
          label: "Limpeza, ajuste e substituição de junta da tampa de visita",
        },
        {
          img: "img/boca_de_visita_3.jfif",
          alt: "boca de visita 3",
          label: "Limpeza, ajuste e substituição de junta da tampa de visita",
        },
        {
          img: "img/reuniao_segurança_1.jfif",
          alt: "reuniao segurança 1",
          label:
            "Reunião pré-operacional ou quando necessitava de alguma alteração com técnico de segurança da Essencis",
        },
        {
          img: "img/reuniao_segurança_2.jfif",
          alt: "reuniao segurança 2",
          label:
            "Reunião pré-operacional ou quando necessitava de alguma alteração com técnico de segurança da Essencis",
        },
        {
          img: "img/valv_4_pol.jfif",
          alt: "valv 4 pol",
          label:
            "Manutenção nas válvulas esferas de 4” sendo realizada a retirada, lixamento e aplicação de Primer na semana anterior (11 a 15/07)",
        },
        {
          img: "img/psvs_1.jpg",
          alt: "psvs 1",
          label:
            "Temos um total de 14 PSVs aguardando instalação sendo 12 feito recertificação no dia 16/05/2022 e 2 no dia 19/05/21",
        },
        {
          img: "img/psvs_2.jfif",
          alt: "psvs 2",
          label:
            "Temos algumas com data de validade vencida (testes feitos em 2020)",
        },
        {
          img: "img/grade.jpg",
          alt: "grade enferrujada",
          label:
            "Algumas grades superiores precisam de tratamento anticorrosão e pintura",
        },
        {
          img: "img/parafusos_enferrujados.jfif",
          alt: "parafusos enferrujados",
          label:
            "Parafusos 3/8” para abraçadeira Tuf-Lok precisam ser substituídas devido a corrosão",
        },
      ];
      let htmlParaInjetarcarouselIndicators = "";
      for (let i = 0; i < estruturaCarousel.length; i++) {
        const element = estruturaCarousel[i];
        if (i == 0) {
          htmlParaInjetarcarouselIndicators += `
            <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to=${i}
            class="active"
            aria-current="true"
            aria-label="Slide 1"
            ></button>
        `;
        } else {
          htmlParaInjetarcarouselIndicators += `
            <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to=${i}
            aria-label="Slide ${i + 1}"
            ></button>
            `;
        }
      }

      carouselIndicators.innerHTML = htmlParaInjetarcarouselIndicators;
      const carouselInner = document.querySelector(`.carousel-inner`);
      console.log(carouselInner);
      let htmlParaInjetarcarouselInner = "";
      for (let i = 0; i < estruturaCarousel.length; i++) {
        const element = estruturaCarousel[i];
        if (i == 0) {
          htmlParaInjetarcarouselInner += `
            <div class="carousel-item active">
            <img
              src=${element.img}
              class="d-block w-50 ratio ratio-1x1"
              alt=${element.alt}
            />
            <div class="carousel-caption d-md-block bg-white rounded">
              <p class="text-black">${element.label}</p>
            </div>
          </div>
            `;
        } else {
          htmlParaInjetarcarouselInner += `
            <div class="carousel-item">
            <img
              src=${element.img}
              class="d-block w-50 ratio ratio-1x1"
              alt=${element.alt}
            />
            <div class="carousel-caption d-md-block bg-white rounded">
              <p class="text-black">${element.label}</p>
            </div>
          </div>
            `;
        }
      }

      carouselInner.innerHTML = htmlParaInjetarcarouselInner;