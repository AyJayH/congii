package com.ajh.congii.repository;

import com.ajh.congii.model.DocumentModificationDao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentModificationRepository extends JpaRepository<DocumentModificationDao, Long> {
}
