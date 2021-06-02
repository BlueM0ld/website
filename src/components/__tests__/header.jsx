import React from "react"
import renderer from "react-test-renderer"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<p>This is it</p>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})