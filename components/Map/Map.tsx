import styled from "styled-components";

const MapContainer = styled.article`
  position: relative;
  padding-top: 1rem;
  margin-bottom: 1rem;
  .map-responsive iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
  @media screen and (min-device-width: 320px) and (max-width: 768px) {
    overflow: hidden;
    padding-bottom: 16%;
  }
`;

interface MapProps {
  width: string;
  height: string;
  adress: string;
}

export const Map = ({ width, height, adress }: MapProps) => {
  return (
    <>
      <MapContainer>
        <iframe
          width={width}
          height={height}
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/search?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${adress}&zoom=15`}
          allowFullScreen
        ></iframe>
      </MapContainer>
    </>
  );
};
