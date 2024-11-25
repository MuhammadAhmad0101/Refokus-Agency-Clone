import Button from "../Button";

function Product({ product }) {
      return (
            <div className="flex py-20 items-center justify-between max-w-screen-lg  mx-auto">
                  <h1 className="text-5xl capitalize font-medium">{product.title}</h1>
                  <div className="w-1/3 mr-11">
                        <p className="mb-8">{product.description}</p>
                        <div className="flex gap-5">
                              <Button />
                              {product.caseStudyButton && <Button ctn="Case Study" />}
                        </div>
                  </div>
            </div>
      );
}

export default Product;
