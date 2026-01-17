package com.furkany.anemon.services;

import com.furkany.anemon.dto.ProductDto;
import com.furkany.anemon.entities.Product;

import java.util.List;

public interface ProductService {

    public Product addProduct(ProductDto product);
    public List<Product> getAllProducts();
}
