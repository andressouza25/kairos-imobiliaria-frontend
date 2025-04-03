import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiHome, FiMaximize2, FiTag } from "react-icons/fi";
import {
  LuBath,
  LuBedDouble,
  LuCarFront,
  LuCoins,
  LuArrowLeft,
  LuArrowRight,
} from "react-icons/lu";
import {
  PageContainer,
  Title,
  InfoGrid,
  MainImageContainer,
  CarouselContainer,
  CarouselImage,
  VerticalGallery,
  Thumb,
  Price,
  ContactButton,
  SideCard,
  SideContainer,
  SubTitle,
  FeaturesRow,
  FeatureItem,
  ContentColumn,
  ImageModalOverlay,
  ImageModalContent,
  CloseButton,
  LeftArrow,
  RightArrow,
  PrevArrow,
  NextArrow,
} from "../styles/ImovelDetalhadoStyles";
import { Imovel } from "../data/ImovelData";
import { Helmet } from "react-helmet-async";

export default function ImovelDetalhesPage() {
  const { id } = useParams();
  const [imovel, setImovel] = useState<Imovel | null>(null);
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right"
  );
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const fetchImovel = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/imoveis/${id}`
      );
      const data = await response.json();
      setImovel(data);
      setMainImage(data.imageUrls?.[0]);
      setCurrentIndex(0);
    };

    fetchImovel();
  }, [id]);

  useEffect(() => {
    if (!showImageModal) {
      setCarouselIndex(currentIndex);
    }
  }, [showImageModal]);

  if (!imovel) return <p>Carregando imóvel...</p>;

  const {
    title,
    description,
    price,
    location,
    imageUrls,
    propertyType,
    transactionType,
    bedrooms,
    suites,
    bathrooms,
    garage,
    area,
  } = imovel;

  const nextImage = () => {
    setCarouselIndex((prev) => (prev < imageUrls.length - 1 ? prev + 1 : 0));
  };

  const prevImage = () => {
    setCarouselIndex((prev) => (prev > 0 ? prev - 1 : imageUrls.length - 1));
  };

  return (
    <PageContainer>
      <Helmet>
        <title>{`${title} em ${location} | Kairós Imobiliária`}</title>
        <meta
          name="description"
          content={`${title} - ${bedrooms} quartos, ${suites} suítes, ${area} m². Localizado em ${location}. Veja todos os detalhes desse imóvel na Kairós Imobiliária.`}
        />
      </Helmet>
      <InfoGrid>
        <MainImageContainer>
          {mainImage && (
            <CarouselContainer>
              <CarouselImage
                src={imageUrls[carouselIndex]}
                alt="Imagem do imóvel"
                onClick={() => {
                  setShowImageModal(true);
                  setCurrentIndex(carouselIndex);
                  setSlideDirection("right");
                }}
                style={{ cursor: "zoom-in" }}
              />
              {imageUrls.length > 1 && (
                <>
                  <PrevArrow onClick={prevImage}>
                    <LuArrowLeft size={24} />
                  </PrevArrow>{" "}
                  <NextArrow onClick={nextImage}>
                    <LuArrowRight size={24} />
                  </NextArrow>{" "}
                </>
              )}
            </CarouselContainer>
          )}

          <FeaturesRow>
            <FeatureItem>
              <FiTag /> {propertyType}
            </FeatureItem>
            <FeatureItem>
              <FiHome /> {bedrooms} quartos
            </FeatureItem>
            <FeatureItem>
              <LuBedDouble /> {suites} suítes
            </FeatureItem>
            <FeatureItem>
              <LuBath /> {bathrooms} banheiros
            </FeatureItem>
            <FeatureItem>
              <LuCarFront /> {garage} vagas
            </FeatureItem>
            <FeatureItem>
              <FiMaximize2 /> {area} m²
            </FeatureItem>
            <FeatureItem>
              <LuCoins /> {transactionType}
            </FeatureItem>
          </FeaturesRow>
        </MainImageContainer>

        <VerticalGallery>
          {imageUrls.map((url, index) => (
            <Thumb
              key={index}
              src={url}
              onClick={() => {
                setMainImage(url);
                setCarouselIndex(index);
              }}
            />
          ))}
        </VerticalGallery>
      </InfoGrid>

      <SideContainer>
        <ContentColumn>
          <Title>{title}</Title>
          <SubTitle>{location}</SubTitle>
          <p>{description}</p>
        </ContentColumn>

        <SideCard>
          <SubTitle>Investimento</SubTitle>
          <Price>R$ {price.toLocaleString("pt-BR")}</Price>
          <ContactButton
            href={`https://wa.me/5516994558101?text=Olá, tenho interesse no imóvel "${title}"`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com Atendente
          </ContactButton>
        </SideCard>
      </SideContainer>

      {showImageModal && imageUrls.length > 0 && (
        <>
          <ImageModalOverlay onClick={() => setShowImageModal(false)}>
            <ImageModalContent
              key={imageUrls[currentIndex]}
              src={imageUrls[currentIndex]}
              alt="Imagem ampliada"
              direction={slideDirection}
              onClick={(e) => e.stopPropagation()}
            />
          </ImageModalOverlay>

          <CloseButton onClick={() => setShowImageModal(false)}>×</CloseButton>

          {currentIndex > 0 && (
            <LeftArrow
              onClick={() => {
                setSlideDirection("left");
                setCurrentIndex((prev) => prev - 1);
              }}
            >
              ‹
            </LeftArrow>
          )}

          {currentIndex < imageUrls.length - 1 && (
            <RightArrow
              onClick={() => {
                setSlideDirection("right");
                setCurrentIndex((prev) => prev + 1);
              }}
            >
              ›
            </RightArrow>
          )}
        </>
      )}
    </PageContainer>
  );
}
