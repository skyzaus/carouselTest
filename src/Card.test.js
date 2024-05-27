import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

test('should render without crashing', () => {
    render(<Card caption={TEST_IMAGES[0].caption} src={TEST_IMAGES[0].src} currNum="1" totalNum="3" />)
});

test("matches snapshot", () => {
    const { asFragment } = render(<Card caption={TEST_IMAGES[0].caption} src={TEST_IMAGES[0].src} currNum="1" totalNum="3" />);
    expect(asFragment()).toMatchSnapshot();
})