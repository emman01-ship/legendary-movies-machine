package com.movies.search.mysql.connection.kafka;

import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.common.serialization.StringSerializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Properties;

public class MovieProducer {

    private static final Logger log = LoggerFactory.getLogger(MovieProducer.class.getSimpleName());

    public static void main(String[] args) {
        log.info("hello world");

        //create Producer properties
        Properties properties = new Properties();
        //connect to localhost
        properties.setProperty("bootstrap.servers", "127.0.0.1:9092");

        //specify how the producer will behave, producer is expecting strings
        properties.setProperty("key.serializer", StringSerializer.class.getName());
        properties.setProperty("value.serializer", StringSerializer.class.getName());

        //create the Producer
        KafkaProducer<String, String> producer = new KafkaProducer<>(properties);

        //create a producer record, first topic will be "picked_movies"
        ProducerRecord<String, String> producerRecord = new ProducerRecord<>("picked_movies", "AVATAR");

        //send data
        producer.send(producerRecord);

        //tell the producer to send all data and block until done -- synchronous
        producer.flush();

        //flush and close the producer
        producer.close();
    }
}
