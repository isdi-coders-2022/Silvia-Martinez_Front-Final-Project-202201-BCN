import styled from "styled-components";

const MapContainer = styled.article`
  position: relative;

  .map-responsive iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
  @media screen and (min-device-width: 320px) and (max-width: 768px) {
    overflow: hidden;
  }
`;

interface MapProps {
  adress: string;
}

export const Map = ({ adress }: MapProps) => {
  return (
    <>
      <MapContainer>
        <iframe
          width={200}
          height={185}
          frameBorder="0"
          style={{ border: 0, borderRadius: 13 }}
          src={`https://www.google.com/maps/embed/v1/search?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${adress}&zoom=15`}
          allowFullScreen
        ></iframe>
      </MapContainer>
    </>
  );
};

export const MapDetail = ({ adress }: MapProps) => {
  return (
    <>
      <MapContainer>
        <iframe
          width={400}
          height={200}
          frameBorder="0"
          style={{ border: 0, borderRadius: 13 }}
          src={`https://www.google.com/maps/embed/v1/search?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${adress}&zoom=15`}
          allowFullScreen
        ></iframe>
      </MapContainer>
    </>
  );
};
