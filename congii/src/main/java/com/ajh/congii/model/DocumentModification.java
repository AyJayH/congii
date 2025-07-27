package com.ajh.congii.model;

import com.ajh.congii.model.enums.Operation;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class DocumentModification {
    private final char character;
    private final int position;
    private final Operation operation;
}
