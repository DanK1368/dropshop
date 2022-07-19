FROM continuumio/miniconda3:latest

RUN mkdir -p /backend
RUN mkdir -p /scripts

COPY ./backend /backend
COPY ./scripts /scripts
RUN chmod + ./scripts*

RUN /opt/conda/bin/conda env create -f /backend/requirements.yml

ENV PATH /opt/conda/envs/dropshop-backend/bin:$PATH
RUN echo "source activate dropshop-backend" >~/.bashrc

#WORKDIR /frontend
#COPY ./frontend/package.json /frontend/
#COPY ./frontend/package-lock.json /frontend/
#RUN npm install
#COPY ./frontend /frontend
#RUN npm run build

WORKDIR /backend