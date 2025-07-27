package com.ajh.congii.repository;

import com.ajh.congii.model.DocumentModificationDao;
import com.ajh.congii.model.DocumentStoreDao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DocumentRepository extends JpaRepository<DocumentStoreDao, Long> {
    Optional<DocumentStoreDao> findByPageType(String pageType);
}
