import * as Yup from "yup";
import Order from '../models/schemmas/order';
import Products from "../models/Products";
import Category from "../models/Categories";

class OrderController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      products: Yup.array().of(
        Yup.object()({
          id: Yup.number().required(),
          quantity: Yup.number().required(),
        })
      ).required(),
    });

    try {
      await schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { products } = request.body;
    const productsIds = products.map((product) => product.id);

    const findProducts = await Products.findAll({
      where: {
        id: productsIds,
      },
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['name'],
        },
      ],
    });

    const formattedProducts = findProducts.map((product) => {
      const productIndex = products.findIndex((item) => item.id === product.id);
      return {
        id: product.id,
        name: product.name,
        category: product.category.name, // Corrigido 'Category' para 'category'
        price: product.price,
        url: product.url,
        quantity: products[productIndex].quantity,
      };
    });

    const order = await Order.create({
      user: {
        id: request.userId,
        name: request.userName,
      },
      products: formattedProducts,
      status: 'edido realizado', // Pode ajustar conforme necessário
    });
     
     const createOrder = await Order.create(order)
      
    return response.status(201).json(createOrder);
  }
}

export default new OrderController();
