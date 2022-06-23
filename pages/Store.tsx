import { Row, Col } from "react-bootstrap";
import items from "../data/items";
import { Item } from "../components/Item";

export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} sx={1} lg={3} className="g-3">
        {items.map((item) => (
          <Col key={item.id}>
            <Item {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
