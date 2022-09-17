export function getProductSelectedAttribute(product, attributeSet, choosenAttributes) {
    const choosenAttribute = choosenAttributes.find((attribute) =>
        attribute.productId === product.id &&
        attribute.attributeSetId === attributeSet.id)

    return product.attributes.map((attributes) =>
        attributes.items.find((attribute) =>
            attributes.id === choosenAttribute.attributeSetId &&
            attribute.id === choosenAttribute.id)
    ).filter((element) => element !== undefined)[0]
}
