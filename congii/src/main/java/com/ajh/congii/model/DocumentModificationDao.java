package com.ajh.congii.model;

import com.ajh.congii.model.enums.Operation;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "DocumentModification")
@Getter

public class DocumentModificationDao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "modification_id")
    private Long modificationId;

    @Column(name = "character")
    private char character;

    @Column(name = "position")
    private int position;

    @Column(name = "operation")
    private Operation operation;
}
