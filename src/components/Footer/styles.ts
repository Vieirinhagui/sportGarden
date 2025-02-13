import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100vw;
  height: auto;
  background-color: #00632c;
  padding: 1rem 1.25rem 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media (min-width: 1200px) {
    justify-content: center;
    align-items: start;
    flex-direction: row;
    gap: 16rem;
  }
  @media (min-width: 1440px) {
    padding: 4rem 18rem;
    justify-content: space-between;
  }
`;

export const RelativeDiv = styled.div`
  width: 100vw;
  height: auto;
  position: relative;
  margin-top: 50px;
  @media (min-width: 1280px) {
    margin-top: 100px;
  }
`;
export const Onda = styled.img`
  width: 100vw;
  height: 50px;
  z-index: 1;
  position: absolute;
  top: -50px;
  left: 0;
  background-color: white;
  @media (min-width: 1280px) {
    height: 100px;
    top: -100px;
  }
`;
export const FaleConoscoContainer = styled.div`
  width: 100%;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  @media (min-width: 1200px) {
    width: 30%;
    gap: 0;
  }
`;

export const Title = styled.span`
  width: 100%;
  font-size: 30px;
  color: white;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  color: white;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 8px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  padding: 16px 8px;
  background-color: white;
  border-radius: 8px;
  outline: none;
  border: none;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  resize: none;
  padding: 16px 8px;
  background-color: white;
  border-radius: 8px;
  outline: none;
  border: none;
`;

export const Button = styled.button`
  padding: 8px 32px;
  color: #00632c;
  background-color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transition: 0.5s;
    background-color: #2a2a2a;
    color: white;
  }
`;

export const InfosContainer = styled.div`
  width: 100%;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (min-width: 1200px) {
    width: 30%;
  }
`;

export const InfosHeaderContainer = styled.div`
  width: 100%;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;

export const InfosBodyContainer = styled.div`
  width: 100%;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1rem;
`;

export const InfosFooterContainer = styled.div`
  width: 100%;
  color: white;

  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: center;
  gap: 2rem;

  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: end;
    justify-content: center;
    margin-top: 24px;
  }
  @media (min-width: 1440px) {
    margin-top: 14px;
  }
`;

export const SocialMediaContainer = styled.div`
  width: 100%;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
    gap: 0.5rem;
  }
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 250px;
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 30%;
  }
  @media (min-width: 1280px) {
    width: 35%;
  }
  @media (min-width: 1440px) {
    width: 100%;
  }
`;

export const BlackFooter = styled.div`
  width: 100vw;
  height: 39px;
  background-color: #2a2a2a;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 12px;
  }

  @media (min-width: 768px) {
    span {
      font-size: 16px;
    }
  }
`;
