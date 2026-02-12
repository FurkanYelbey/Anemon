package com.furkany.anemon.services;

import com.furkany.anemon.dto.ProductDto;
import com.furkany.anemon.entities.Product;
import com.furkany.anemon.repositories.ProductRepository;

import java.util.List;
import java.util.UUID;

public interface ProductService {

    public Product addProduct(ProductDto product);
    public List<ProductDto> getAllProducts(UUID categoryId, UUID typeId);

    ProductDto getProductBySlug(String slug);

    ProductDto getProductById(UUID id);

    Product updateProduct(ProductDto productDto, UUID id);

    Product fetchProductById(UUID uuid) throws Exception;

}