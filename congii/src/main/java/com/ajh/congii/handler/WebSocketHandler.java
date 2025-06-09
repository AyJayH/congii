package com.ajh.congii.handler;

import com.ajh.congii.model.DocumentModification;
import com.ajh.congii.model.DocumentModificationDao;
import com.ajh.congii.service.DocumentService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

@RequiredArgsConstructor
public class WebSocketHandler extends TextWebSocketHandler {


    private final ObjectMapper mapper;
    private final DocumentService documentService;

    private final Set<WebSocketSession> sessions = ConcurrentHashMap.newKeySet();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) {
        sessions.add(session);
        System.out.println("New connection: " + session.getId());
    }

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws IOException {
        //System.out.println("Received: " + message.getPayload());
        DocumentModification update = mapper.readValue(message.getPayload(), DocumentModification.class);
        System.out.println(update.getCharacter());
        DocumentModificationDao temp = documentService.saveMessage(update);
        System.out.println(temp);
        // Echo or broadcast to all
        for (WebSocketSession s : sessions) {
            if (s.isOpen()) {
                s.sendMessage(new TextMessage("Echo: " + message.getPayload()));
            }
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
        sessions.remove(session);
        System.out.println("Connection closed: " + session.getId());
    }

    @Override
    public void handleTransportError(WebSocketSession session, Throwable exception) {
        System.err.println("Error: " + exception.getMessage());
    }
}
