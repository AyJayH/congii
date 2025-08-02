package com.ajh.congii.model;

import com.ajh.congii.model.enums.Operation;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class PageCode {
    private final long document;
    private final String code;
}
