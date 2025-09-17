import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;  
`

export const Card = styled.div`
    background: white;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
    width: 300px;
    border-radius: 8px;
    display: grid;
    justify-items: center;
    padding: 10px;
`

export const ProfileImageContainer = styled.div`
    width: 116px;
    height: 116px;
    border-radius: 50%;
    background: #c7c7c7;
    margin-top: 12px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 68px;
    }
`

export const UserName = styled.h1`
    margin-top: 12px;
    font-weight: 600;
    color: #374151;
    font-size: 1.125rem;
    letter-spacing: 0.02em;
`

export const UserInfo = styled.div`
    background: white;
    width: 265px;
    height: 40px;
    margin-top: 16px;
    color: #374151;
    border-radius: 8px;
    border: 1px solid #d1d5db;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.05);

    display: flex;
    justify-content: center;
    align-items: center;
`

export const ButtonGroup = styled.div`
    margin: 20px 0;
    display: flex;
    gap: 16px;
`

export const Button = styled.button<{ variant?: "delete" | "cart" }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  border: none;
  transition: all 0.2s ease-in-out;

  ${({ variant }) =>
    variant === "delete"
      ? `
        background: #ef4444;
        &:hover {
          background: #dc2626;
          transform: translateY(-1px) scale(1.01);
        }
      `
      : variant === "cart"
      ? `
        background: #16a34a;
        &:hover {
          background: #15803d;
          transform: translateY(-1px) scale(1.01);
        }
      `
      : ""}
`;

export const StyledLink = styled(Link)<{ variant?: "delete" | "cart" }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  ${({ variant }) =>
    variant === "cart"
      ? `
        background: #16a34a;
        &:hover {
          background: #15803d;
          transform: translateY(-1px) scale(1.01);
        }
      `
      : ""}
`;