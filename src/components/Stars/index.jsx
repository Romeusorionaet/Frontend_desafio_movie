import {StarOutlined, StarFilled} from '@ant-design/icons';

import {Container} from "./style";

export function Stars({ rating }) {
  return (
    <Container>
      <span> {rating >= 1 ? <StarFilled /> : <StarOutlined />} </span>
      <span> {rating >= 2 ? <StarFilled /> : <StarOutlined />} </span>
      <span> {rating >= 3 ? <StarFilled /> : <StarOutlined />} </span>
      <span> {rating >= 4 ? <StarFilled /> : <StarOutlined />} </span>
      <span> {rating >= 5 ? <StarFilled /> : <StarOutlined />} </span>
    </Container>
  );
}