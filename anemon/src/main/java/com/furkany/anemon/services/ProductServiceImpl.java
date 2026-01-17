package com.furkany.anemon.services;

import com.furkany.anemon.dto.ProductDto;
import com.furkany.anemon.entities.Product;
import com.furkany.anemon.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product addProduct(ProductDto product) {

        return null;
    }

    @Override
    public List<Product> getAllProducts() {
        List<Product> products = productRepository.findAll();

        return products;
    }

    private Product createProduct(ProductDto productDto) {
        Product product = new Product();
        product.setName(productDto.getName());
        product.setDescription(productDto.getDescription());
        product.setNewArrival(productDto.isNewArrival());
        product.setPrice(productDto.getPrice());

        return product;
    }
}
