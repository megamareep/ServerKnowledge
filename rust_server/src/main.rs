use std::net::{TcpListener, TcpStream};

fn handle_client(_stream: TcpStream) {
    // ...
    //println!("{}",stream);
}

fn main() -> std::io::Result<()> {
    let listener = TcpListener::bind("127.0.0.1:8030")?;
    println!("Hello, world!");
    // accept connections and process them serially
    for stream in listener.incoming() {
        handle_client(stream?);
    }
    Ok(())
    
}